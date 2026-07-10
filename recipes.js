// ============================================================
// RECIPE DATA — this is the only file that changes when adding
// recipes. index.html (and the QR code URL) never change.
//
// Recipe format:
// {
//   id: "unique-slug",                  // lowercase, hyphens, must be unique
//   title: "Recipe Name",
//   image: "https://...",               // optional photo URL
//   source: "https://instagram.com/p/", // optional original post link
//   category: "sauce",                  // one: sauce, meat, vegetable, seafood,
//                                       //   pasta, soup, salad, dessert, bread,
//                                       //   breakfast, side, main, drink
//   time: "quick",                      // quick (<30m) | medium (30-60m) | long (>1h)
//   difficulty: "easy",                 // easy | medium | hard
//   flavors: ["spicy", "sweet"],        // any of: spicy, sweet, savoury, sour,
//                                       //   smoky, fresh, rich, tangy, herby, garlicky
//   ingredients: ["1 cup ..."],
//   steps: ["Do this first.", "Then this."],
//   notes: ""                           // optional
// }
// ============================================================

window.RECIPES = [];
