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

window.RECIPES = [
  {
    id: "everything-sauce",
    title: "Everything Sauce",
    image: "images/everything-sauce.jpg",
    source: "https://www.instagram.com/reel/DZISw_yNLQq/",
    category: "sauce",
    time: "quick",
    difficulty: "easy",
    flavors: ["fresh", "herby", "spicy", "tangy"],
    ingredients: [
      "1/3 cup mayonnaise",
      "1/3 cup Greek yogurt",
      "1 cup fresh cilantro",
      "1/2 cup fresh basil",
      "1/4 cup fresh mint",
      "1/4 cup fresh cilantro (swapped in for the parsley)",
      "2 jalapeños, seeds removed",
      "1 tbsp ají amarillo paste",
      "Zest and juice of 1 lime",
      "1 tsp white wine vinegar",
      "1 tsp honey",
      "1/4 tsp Dijon mustard",
      "Pinch of salt",
      "1/4 cup olive oil"
    ],
    steps: [
      "Add the mayonnaise, Greek yogurt, cilantro, basil, mint, jalapeños, ají amarillo paste, lime zest and juice, white wine vinegar, honey, Dijon mustard, and salt to a blender.",
      "Blend until smooth.",
      "While blending, slowly drizzle in the olive oil until the sauce is creamy and emulsified.",
      "Taste, adjust salt, and serve — it's great on literally everything."
    ],
    notes: "From Nick DiGiovanni's reel. Original recipe uses 1/4 cup parsley alongside the mint — swapped for extra cilantro."
  }
];
