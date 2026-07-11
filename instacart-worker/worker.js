// Instacart proxy — Cloudflare Worker
// ------------------------------------
// The recipe site can't call Instacart directly because the API key must
// stay secret (the site is a public GitHub repo). This tiny Worker holds
// the key and does one thing: turn a list of ingredients into an Instacart
// shopping-list URL.
//
// Setup (one time, ~5 min) — see README.md in the repo root.
//
// Environment variables (set in the Worker's Settings → Variables):
//   INSTACART_API_KEY  (secret)  — from Instacart Developer Platform
//   INSTACART_ENV      (plain)   — "development" (default) or "production"
//   ALLOWED_ORIGIN     (plain)   — e.g. "https://tyroofficial.github.io"
//   LINKBACK_URL       (plain)   — e.g. "https://tyroofficial.github.io/recipes/"

export default {
  async fetch(request, env) {
    const cors = {
      "Access-Control-Allow-Origin": env.ALLOWED_ORIGIN || "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };
    const json = (obj, status) =>
      new Response(JSON.stringify(obj), {
        status: status || 200,
        headers: { "Content-Type": "application/json", ...cors },
      });

    if (request.method === "OPTIONS") return new Response(null, { headers: cors });
    if (request.method !== "POST") return json({ error: "POST only" }, 405);
    if (!env.INSTACART_API_KEY) return json({ error: "INSTACART_API_KEY not configured" }, 500);

    let body;
    try {
      body = await request.json();
    } catch (e) {
      return json({ error: "Invalid JSON body" }, 400);
    }

    const items = (Array.isArray(body.items) ? body.items : [])
      .filter((i) => i && typeof i.name === "string" && i.name.trim())
      .slice(0, 100);
    if (!items.length) return json({ error: "No items" }, 400);

    const apiBase =
      env.INSTACART_ENV === "production"
        ? "https://connect.instacart.com"
        : "https://connect.dev.instacart.tools";

    const payload = {
      title: (typeof body.title === "string" && body.title.slice(0, 100)) || "Shopping list",
      link_type: "shopping_list",
      expires_in: 30,
      line_items: items.map((i) => ({
        name: i.name.trim().slice(0, 200),
        display_text: (typeof i.display_text === "string" && i.display_text.slice(0, 300)) || undefined,
      })),
    };
    if (env.LINKBACK_URL) {
      payload.landing_page_configuration = { partner_linkback_url: env.LINKBACK_URL };
    }

    const res = await fetch(apiBase + "/idp/v1/products/products_link", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + env.INSTACART_API_KEY,
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) return json({ error: "Instacart error", details: data }, res.status);
    return json({ url: data.products_link_url });
  },
};
