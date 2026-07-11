# Archived Recipes — site guide

Live at **https://tyroofficial.github.io/recipes/** — the URL and QR code never change.

## What's in the repo

| File | What it is |
|---|---|
| `index.html` | The whole site (changes only when features are added) |
| `recipes.js` | Recipe data — the file that changes when recipes are added |
| `images/` | Recipe photos (Instagram links expire, so photos live here) |
| `sw.js`, `manifest.json`, `icon.svg` | Offline support / installable app |

## Features on the site

- **Search, filters, sort, favourites, surprise me**
- **🧊 My fridge** — tick what you have; rank recipes by what's makeable
- **🛒 Shopping list** — add recipes to it; it **automatically skips
  anything already in your fridge** (toggle on the list itself; skipped items
  show struck-through so nothing gets silently lost)
- Cook mode, step timers, scaling, metric conversion, print, share, offline

## Adding a recipe (through Claude) — the standing workflow

When Isaac pastes an Instagram link with this project selected, Claude does
ALL of the following automatically:

1. **Scrape** the post/reel via the Apify connector (caption, video, cover image).
2. **Extract the recipe** — from the caption; if the recipe is spoken in the
   video instead, transcribe the reel using an Apify transcription actor.
3. **Write it up** — a full ingredients list and numbered step-by-step instructions.
4. **Tag it** — type, time level, difficulty, flavours.
5. **Image** — save the finished-dish photo into the repo as
   `images/<recipe-id>.jpg` (Instagram CDN links expire, so images live in the
   repo). Set the recipe's `image` field to that relative path.
6. **Publish** — commit the image + updated `recipes.js` via the GitHub
   connector. `index.html` is never touched by recipe additions, so the URL
   and QR code always keep working.
7. **Confirm** with Isaac, showing the recipe as it will appear.

## Recipe format (`recipes.js`)

```js
{
  id: "unique-slug",            // lowercase, hyphens, unique
  title: "Recipe Name",
  image: "images/slug.jpg",     // stored in the repo
  source: "https://instagram…", // original post
  category: "sauce",            // sauce|chicken|beef|pork|lamb|vegetable|seafood|pasta|soup|salad|dessert|bread|breakfast|side|main|drink
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
