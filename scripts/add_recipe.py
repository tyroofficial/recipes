#!/usr/bin/env python3
"""
Add a recipe to the site from an Instagram link.

Runs inside the "Add recipe from Instagram" GitHub Action. Steps:
  1. Find the Instagram URL in the issue title/body.
  2. Scrape the post via Apify (caption, cover image, video).
  3. If the caption looks thin and there's a video, transcribe it (faster-whisper).
  4. Ask Claude to extract a structured recipe (strict JSON).
  5. Download the cover image -> images/<id>.jpg (resized).
  6. Insert the recipe into recipes.js.

Env: APIFY_TOKEN, ANTHROPIC_API_KEY, ISSUE_TITLE, ISSUE_BODY, GITHUB_OUTPUT
"""

import json
import os
import re
import sys
import datetime

RECIPES_JS = "recipes.js"
IMAGES_DIR = "images"

CATEGORIES = ["sauce", "meat", "vegetable", "seafood", "pasta", "soup", "salad",
              "dessert", "bread", "breakfast", "side", "main", "drink"]
TIMES = ["quick", "medium", "long"]
DIFFICULTIES = ["easy", "medium", "hard"]
FLAVORS = ["spicy", "sweet", "savoury", "sour", "smoky", "fresh", "rich",
           "tangy", "herby", "garlicky"]

CLAUDE_MODEL = os.environ.get("CLAUDE_MODEL", "claude-sonnet-5")


def log(msg):
    print(msg, flush=True)


def fail(msg):
    log(f"::error::{msg}")
    # Leave a human-readable reason for the issue comment
    with open("failure_reason.txt", "w") as f:
        f.write(msg)
    sys.exit(1)


# ---------------------------------------------------------------- URL parsing
def find_instagram_url(text):
    m = re.search(r"https?://(?:www\.)?instagram\.com/(?:reel|reels|p|tv|share)/[\w\-./?=&%]+", text)
    return m.group(0).split("?")[0] if m else None


# ---------------------------------------------------------------- Apify scrape
def scrape_instagram(url, token):
    from apify_client import ApifyClient
    client = ApifyClient(token)
    log(f"Scraping {url} via Apify…")
    run = client.actor("apify/instagram-scraper").call(run_input={
        "directUrls": [url],
        "resultsType": "posts",
        "resultsLimit": 1,
        "addParentData": False,
    })
    items = list(client.dataset(run["defaultDatasetId"]).iterate_items())
    if not items:
        fail("Apify returned no data for that link — is the post public?")
    post = items[0]
    if post.get("error"):
        fail(f"Apify couldn't scrape the post: {post.get('errorDescription') or post['error']}")
    return {
        "caption": post.get("caption") or "",
        "image_url": post.get("displayUrl") or (post.get("images") or [None])[0],
        "video_url": post.get("videoUrl"),
        "author": post.get("ownerFullName") or post.get("ownerUsername") or "",
    }


# ---------------------------------------------------------------- Transcription
def caption_has_recipe(caption):
    """Heuristic: a real recipe caption has measurements and some length."""
    if len(caption) < 200:
        return False
    units = re.findall(r"\b(cups?|tbsp|tablespoons?|tsp|teaspoons?|oz|ounces?|lbs?|grams?|g|ml|cloves?)\b",
                       caption, re.I)
    return len(units) >= 3


def transcribe_video(video_url):
    import requests
    log("Caption looks thin — downloading video for transcription…")
    path = "/tmp/reel.mp4"
    r = requests.get(video_url, timeout=120, headers={"User-Agent": "Mozilla/5.0"})
    r.raise_for_status()
    with open(path, "wb") as f:
        f.write(r.content)
    from faster_whisper import WhisperModel
    log("Transcribing with faster-whisper (base)…")
    model = WhisperModel("base", device="cpu", compute_type="int8")
    segments, _info = model.transcribe(path, vad_filter=True)
    text = " ".join(s.text.strip() for s in segments)
    log(f"Transcript: {len(text)} chars")
    return text


# ---------------------------------------------------------------- Claude extraction
def extract_recipe(caption, transcript, author, source_url, existing_ids):
    import anthropic
    client = anthropic.Anthropic()

    prompt = f"""You are the recipe writer for a personal recipe website. Extract ONE complete recipe from this Instagram post.

CAPTION:
{caption or "(no caption)"}

TRANSCRIPT OF THE VIDEO (may be empty; spoken by the creator):
{transcript or "(no transcript)"}

CREATOR: {author or "unknown"}
POST URL: {source_url}

Existing recipe ids (yours must be different): {json.dumps(existing_ids)}

Reply with ONLY a JSON object (no markdown fences, no commentary) with exactly these fields:
{{
  "id": "kebab-case-slug, short, unique",
  "title": "Recipe Name",
  "category": one of {json.dumps(CATEGORIES)},
  "time": one of {json.dumps(TIMES)} (quick <30min, medium 30-60min, long >1hr),
  "difficulty": one of {json.dumps(DIFFICULTIES)},
  "flavors": array from {json.dumps(FLAVORS)} (1-4 that genuinely apply),
  "servings": integer or null,
  "ingredients": ["1 cup ...", ...] (full list with quantities; infer sensible quantities only if truly stated nowhere, and say so in notes),
  "steps": ["Step one.", ...] (numbered-free, clear, complete),
  "pantry": ["canonical lowercase item names", ...] (one per distinct ingredient, e.g. "greek yogurt", "lime", "olive oil"),
  "notes": "short note crediting the creator, plus any caveats"
}}

If the post contains NO usable recipe (no ingredients stated or spoken), reply with ONLY: {{"error": "reason"}}"""

    msg = client.messages.create(
        model=CLAUDE_MODEL,
        max_tokens=3000,
        messages=[{"role": "user", "content": prompt}],
    )
    text = msg.content[0].text.strip()
    text = re.sub(r"^```(?:json)?\s*|\s*```$", "", text)
    try:
        data = json.loads(text)
    except json.JSONDecodeError:
        m = re.search(r"\{.*\}", text, re.S)
        if not m:
            fail("Claude didn't return valid JSON for the recipe.")
        data = json.loads(m.group(0))
    if data.get("error"):
        fail(f"No recipe found in the post: {data['error']}")

    # Validate / clamp
    if not data.get("title") or not data.get("ingredients") or not data.get("steps"):
        fail("Extracted recipe is missing title/ingredients/steps.")
    if data.get("category") not in CATEGORIES:
        data["category"] = "main"
    if data.get("time") not in TIMES:
        data["time"] = "medium"
    if data.get("difficulty") not in DIFFICULTIES:
        data["difficulty"] = "easy"
    data["flavors"] = [f for f in (data.get("flavors") or []) if isinstance(f, str)][:4]
    slug = re.sub(r"[^a-z0-9]+", "-", (data.get("id") or data["title"]).lower()).strip("-") or "recipe"
    base, n = slug, 2
    while slug in existing_ids:
        slug = f"{base}-{n}"
        n += 1
    data["id"] = slug
    return data


# ---------------------------------------------------------------- Image
def save_image(image_url, recipe_id):
    if not image_url:
        log("No cover image found — skipping image.")
        return None
    import requests
    from PIL import Image
    from io import BytesIO
    log("Downloading cover image…")
    r = requests.get(image_url, timeout=60, headers={"User-Agent": "Mozilla/5.0"})
    r.raise_for_status()
    img = Image.open(BytesIO(r.content)).convert("RGB")
    if img.width > 900:
        img = img.resize((900, int(img.height * 900 / img.width)))
    os.makedirs(IMAGES_DIR, exist_ok=True)
    path = f"{IMAGES_DIR}/{recipe_id}.jpg"
    img.save(path, "JPEG", quality=82, optimize=True)
    log(f"Saved {path}")
    return path


# ---------------------------------------------------------------- recipes.js
def existing_recipe_ids(content):
    lines = [l for l in content.splitlines() if not l.lstrip().startswith("//")]
    return re.findall(r"[\"']?id[\"']?\s*:\s*\"([^\"]+)\"", "\n".join(lines))


def insert_recipe(content, recipe):
    """Insert a recipe object before the final '];' of window.RECIPES."""
    marker = content.rindex("];")
    head = content[:marker].rstrip()
    obj = json.dumps(recipe, indent=2, ensure_ascii=False)
    obj = "\n".join("  " + line for line in obj.splitlines())
    sep = "\n" if head.endswith("[") else ",\n"
    return head + sep + obj + "\n];\n"


def main():
    title = os.environ.get("ISSUE_TITLE", "")
    body = os.environ.get("ISSUE_BODY", "")
    url = find_instagram_url(title + "\n" + body)
    if not url:
        fail("Couldn't find an Instagram link in the issue.")

    post = scrape_instagram(url, os.environ["APIFY_TOKEN"])
    log(f"Caption: {len(post['caption'])} chars · video: {bool(post['video_url'])}")

    transcript = ""
    if post["video_url"] and not caption_has_recipe(post["caption"]):
        try:
            transcript = transcribe_video(post["video_url"])
        except Exception as e:
            log(f"::warning::Transcription failed ({e}) — continuing with caption only.")

    with open(RECIPES_JS) as f:
        content = f.read()
    ids = existing_recipe_ids(content)

    recipe = extract_recipe(post["caption"], transcript, post["author"], url, ids)

    image_path = None
    try:
        image_path = save_image(post["image_url"], recipe["id"])
    except Exception as e:
        log(f"::warning::Image download failed ({e}) — recipe will use a placeholder.")

    ordered = {
        "id": recipe["id"],
        "title": recipe["title"],
    }
    if image_path:
        ordered["image"] = image_path
    ordered.update({
        "source": url,
        "category": recipe["category"],
        "time": recipe["time"],
        "difficulty": recipe["difficulty"],
        "flavors": recipe["flavors"],
    })
    if recipe.get("servings"):
        ordered["servings"] = recipe["servings"]
    ordered.update({
        "ingredients": recipe["ingredients"],
        "steps": recipe["steps"],
    })
    if recipe.get("pantry"):
        ordered["pantry"] = recipe["pantry"]
    if recipe.get("notes"):
        ordered["notes"] = recipe["notes"]
    ordered["dateAdded"] = datetime.date.today().isoformat()

    with open(RECIPES_JS, "w") as f:
        f.write(insert_recipe(content, ordered))
    log(f"Inserted '{ordered['title']}' into {RECIPES_JS}")

    out = os.environ.get("GITHUB_OUTPUT")
    if out:
        with open(out, "a") as f:
            f.write(f"title={ordered['title']}\n")
            f.write(f"id={ordered['id']}\n")


if __name__ == "__main__":
    main()
