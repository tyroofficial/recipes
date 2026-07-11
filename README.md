# Isaac's Recipes — site guide

Live at **https://tyroofficial.github.io/recipes/** — the URL and QR code never change.

## What's in the repo

| File | What it is |
|---|---|
| `index.html` | The whole site (changes only when features are added) |
| `recipes.js` | Recipe data — the file that changes when recipes are added |
| `images/` | Recipe photos (Instagram links expire, so photos live here) |
| `sw.js`, `manifest.json`, `icon.svg` | Offline support / installable app |
| `setup/add-recipe.workflow.yml` | The ➕ Add recipe automation (needs a one-time move, see below) |
| `scripts/add_recipe.py` | Script the automation runs |
| `instacart-worker/worker.js` | Cloudflare Worker for the Instacart button |

## Features on the site

- **Search, filters, sort, favourites, surprise me**
- **🧊 My fridge** — tick what you have; rank recipes by what's makeable
- **🛒 Shopping list** — add recipes to it; it **automatically skips
  anything already in your fridge** (toggle on the list itself; skipped items
  show struck-through so nothing gets silently lost)
- **🥕 Order on Instacart** — one tap builds an Instacart cart from the
  unticked items (needs one-time setup, below)
- **➕ Add recipe** — paste an Instagram link on the site itself (needs
  one-time setup, below)
- Cook mode, step timers, scaling, metric conversion, print, share, offline

---

## One-time setup 1: ➕ Add recipe from the site

Paste an Instagram link into the site's ➕ Add recipe form → it opens a
pre-filled GitHub issue → pressing **Submit new issue** kicks off a robot that
scrapes the reel (Apify), transcribes the video if the recipe is spoken,
writes it up (Claude), saves the photo, and publishes it. ~3–5 minutes.

Setup, two steps:

**Step A — activate the workflow** (GitHub blocks bots from adding workflow
files, so this needs a human): open
[`setup/add-recipe.workflow.yml`](setup/add-recipe.workflow.yml), copy its
contents, then on the repo home: **Add file → Create new file**, name it
exactly `.github/workflows/add-recipe.yml`, paste, commit.

**Step B — add two secrets** (**Settings → Secrets and variables → Actions →
New repository secret**):

1. `APIFY_TOKEN` — from [console.apify.com](https://console.apify.com) →
   Settings → API & Integrations. (Free tier gives $5/month of credit;
   a scrape costs a few cents.)
2. `ANTHROPIC_API_KEY` — from
   [console.anthropic.com](https://console.anthropic.com/settings/keys).
   (A recipe extraction costs ~1–2 cents.)

Notes:
- Only issues opened by **the repo owner** trigger the robot — other people's
  issues are ignored.
- If it fails, it comments on the issue explaining why. Sending the link to
  Claude still works exactly as before.

## One-time setup 2: 🥕 Instacart button

The site can't hold the Instacart API key (public repo), so a free Cloudflare
Worker holds it instead. ~10 minutes:

1. **Get an API key**: sign up at the
   [Instacart Developer Platform](https://docs.instacart.com/developer_platform_api/)
   and create a **development** API key. (Development keys build carts on
   Instacart's test server; request a production key from Instacart when you
   want real ordering — then set `INSTACART_ENV` to `production` in step 3.)
2. **Create the Worker**: at [dash.cloudflare.com](https://dash.cloudflare.com)
   (free account) → Workers & Pages → Create Worker → replace the code with
   [`instacart-worker/worker.js`](instacart-worker/worker.js) → Deploy.
   Copy the Worker URL (`https://….workers.dev`).
3. **Configure it**: Worker → Settings → Variables and Secrets:
   - `INSTACART_API_KEY` (type **Secret**) = your key
   - `INSTACART_ENV` = `development` (or `production` once approved)
   - `ALLOWED_ORIGIN` = `https://tyroofficial.github.io`
   - `LINKBACK_URL` = `https://tyroofficial.github.io/recipes/`
4. **Point the site at it**: in `index.html`, near the top, set
   `window.INSTACART_PROXY_URL = "https://YOUR-WORKER.workers.dev";`
   and commit.

Tapping 🥕 Order on Instacart then opens a pre-filled cart — pick a store,
check out. (Instacart doesn't allow fully automatic order placement, which is
probably for the best.)

---

## Adding a recipe through Claude (manual workflow, still supported)

When Isaac pastes an Instagram link with this project selected, Claude:
scrapes the post (Apify), extracts/transcribes the recipe, writes it up,
tags it, saves the cover image to `images/<recipe-id>.jpg`, appends to
`recipes.js`, and commits via the GitHub connector. `index.html` is not
touched by recipe additions.

## Recipe format (`recipes.js`)

```js
{
  id: "unique-slug",            // lowercase, hyphens, unique
  title: "Recipe Name",
  image: "images/slug.jpg",     // stored in the repo
  source: "https://instagram…", // original post
  category: "sauce",            // sauce|meat|vegetable|seafood|pasta|soup|salad|dessert|bread|breakfast|side|main|drink
  time: "quick",                // quick (<30m) | medium (30–60m) | long (>1h)
  difficulty: "easy",           // easy | medium | hard
  flavors: ["fresh", "spicy"],  // spicy|sweet|savoury|sour|smoky|fresh|rich|tangy|herby|garlicky
  servings: 4,                  // optional
  ingredients: ["1 cup …"],
  steps: ["Do this.", "Then this."],
  pantry: ["greek yogurt"],     // optional canonical item names for the fridge
  notes: "",                    // optional
  dateAdded: "2026-07-10"       // ISO date, used for "New" badge + sorting
}
```
