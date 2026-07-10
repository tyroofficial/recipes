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
    title: "Jalapeño Lime Sauce",
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
  },
  {
    id: "roasted-garlic-parmesan-protein-sauce",
    title: "Roasted Garlic Parmesan Protein Sauce",
    image: "images/roasted-garlic-parmesan-protein-sauce.jpg",
    source: "https://www.instagram.com/p/DZPhIwhGMZn/",
    category: "sauce",
    time: "quick",
    difficulty: "easy",
    flavors: ["garlicky", "savoury", "rich"],
    ingredients: [
      "1/2 cup Greek yogurt",
      "2 tbsp Parmesan cheese",
      "2 garlic cloves",
      "1/2 tsp garlic powder",
      "1/2 tsp black pepper",
      "1 tsp lemon juice",
      "1 tbsp water",
      "Pinch of salt"
    ],
    steps: [
      "Toast the garlic cloves in a dry pan over medium heat until soft and golden (5–8 minutes), then mash into a paste. In a hurry, finely grate them raw instead.",
      "In a bowl, whisk the Greek yogurt with the Parmesan, mashed garlic, garlic powder, black pepper, lemon juice, and salt.",
      "Whisk in the water to loosen the sauce to a creamy, drizzleable consistency.",
      "Taste, adjust salt and pepper, and serve over chicken, rice bowls, or salads."
    ],
    notes: "Creamy + high protein. From @i_sakethkrishna's 8 High-Protein Sauces post."
  },
  {
    id: "smoky-chipotle-protein-sauce",
    title: "Smoky Chipotle Protein Sauce",
    image: "images/smoky-chipotle-protein-sauce.jpg",
    source: "https://www.instagram.com/p/DZPhIwhGMZn/",
    category: "sauce",
    time: "quick",
    difficulty: "easy",
    flavors: ["smoky", "spicy"],
    ingredients: [
      "1/2 cup Greek yogurt",
      "1 tsp chipotle powder",
      "1/2 tsp paprika",
      "1/2 tsp garlic powder",
      "1 tsp honey",
      "1 tbsp lemon juice",
      "1 tbsp water",
      "Pinch of salt"
    ],
    steps: [
      "Add the Greek yogurt, chipotle powder, paprika, garlic powder, honey, lemon juice, and salt to a bowl.",
      "Whisk until smooth and evenly coloured.",
      "Whisk in the water to thin to your liking.",
      "Taste, adjust heat and salt, and serve on wraps, chicken, or rice bowls."
    ],
    notes: "Smoky + spicy. From @i_sakethkrishna's 8 High-Protein Sauces post."
  },
  {
    id: "creamy-cajun-yogurt-sauce",
    title: "Creamy Cajun Yogurt Sauce",
    image: "images/creamy-cajun-yogurt-sauce.jpg",
    source: "https://www.instagram.com/p/DZPhIwhGMZn/",
    category: "sauce",
    time: "quick",
    difficulty: "easy",
    flavors: ["spicy", "savoury", "rich"],
    ingredients: [
      "1/2 cup Greek yogurt",
      "1 tsp Cajun seasoning",
      "1/2 tsp garlic powder",
      "1/2 tsp onion powder",
      "1 tsp honey",
      "1 tbsp lemon juice",
      "1 tbsp water",
      "Pinch of salt"
    ],
    steps: [
      "Add the Greek yogurt, Cajun seasoning, garlic powder, onion powder, honey, lemon juice, and salt to a bowl.",
      "Whisk until smooth.",
      "Whisk in the water to loosen to a creamy consistency.",
      "Taste — Cajun blends vary in salt, so season carefully — and serve on sandwiches, chicken, or rice bowls."
    ],
    notes: "Bold + flavorful. From @i_sakethkrishna's 8 High-Protein Sauces post."
  },
  {
    id: "roasted-red-pepper-protein-sauce",
    title: "Roasted Red Pepper Protein Sauce",
    image: "images/roasted-red-pepper-protein-sauce.jpg",
    source: "https://www.instagram.com/p/DZPhIwhGMZn/",
    category: "sauce",
    time: "quick",
    difficulty: "easy",
    flavors: ["sweet", "smoky"],
    ingredients: [
      "1/2 cup Greek yogurt",
      "1/2 cup roasted red peppers (jarred work great)",
      "1/2 tsp garlic powder",
      "1 tsp paprika",
      "1 tsp olive oil",
      "1 tbsp lemon juice",
      "1 tbsp water",
      "Pinch of salt"
    ],
    steps: [
      "Pat the roasted red peppers dry and add them to a blender with the Greek yogurt, garlic powder, paprika, olive oil, lemon juice, and salt.",
      "Blend until completely smooth.",
      "Add the water and pulse to thin to your liking.",
      "Taste, adjust salt, and serve with chicken, wraps, or as a bowl sauce."
    ],
    notes: "Sweet + smoky. From @i_sakethkrishna's 8 High-Protein Sauces post."
  },
  {
    id: "peri-peri-garlic-yogurt-sauce",
    title: "Peri Peri Garlic Yogurt Sauce",
    image: "images/peri-peri-garlic-yogurt-sauce.jpg",
    source: "https://www.instagram.com/p/DZPhIwhGMZn/",
    category: "sauce",
    time: "quick",
    difficulty: "easy",
    flavors: ["spicy", "garlicky", "tangy"],
    ingredients: [
      "1/2 cup Greek yogurt",
      "1 tsp peri peri seasoning",
      "2 garlic cloves",
      "1/2 tsp paprika",
      "1 tsp honey",
      "1 tsp lemon juice",
      "1 tbsp water",
      "Pinch of salt"
    ],
    steps: [
      "Finely grate or mince the garlic cloves (or blend everything for the smoothest result).",
      "Whisk the Greek yogurt with the peri peri seasoning, garlic, paprika, honey, lemon juice, and salt.",
      "Whisk in the water to loosen to a creamy, pourable consistency.",
      "Taste, adjust heat and salt, and serve with grilled chicken, wraps, or fries."
    ],
    notes: "Fiery + creamy. From @i_sakethkrishna's 8 High-Protein Sauces post."
  },
  {
    id: "buffalo-protein-sauce",
    title: "Buffalo Protein Sauce",
    image: "images/buffalo-protein-sauce.jpg",
    source: "https://www.instagram.com/p/DZPhIwhGMZn/",
    category: "sauce",
    time: "quick",
    difficulty: "easy",
    flavors: ["spicy", "tangy"],
    ingredients: [
      "1/4 cup Greek yogurt",
      "1 tbsp hot sauce",
      "1/2 tsp garlic powder",
      "1/2 tsp paprika",
      "1 tsp honey",
      "1 tsp lemon juice",
      "1 tbsp water",
      "Pinch of salt"
    ],
    steps: [
      "Add the Greek yogurt, hot sauce, garlic powder, paprika, honey, lemon juice, and salt to a bowl.",
      "Whisk until smooth and evenly orange.",
      "Whisk in the water to thin to a coating consistency.",
      "Taste, add more hot sauce if you want it hotter, and serve with chicken, sandwiches, or salads."
    ],
    notes: "Spicy + tangy. From @i_sakethkrishna's 8 High-Protein Sauces post."
  },
  {
    id: "lemon-herb-dill-protein-sauce",
    title: "Lemon Herb Dill Protein Sauce",
    image: "images/lemon-herb-dill-protein-sauce.jpg",
    source: "https://www.instagram.com/p/DZPhIwhGMZn/",
    category: "sauce",
    time: "quick",
    difficulty: "easy",
    flavors: ["fresh", "herby", "tangy"],
    ingredients: [
      "1/4 cup Greek yogurt",
      "1 tbsp fresh dill, chopped",
      "1/2 tsp garlic powder",
      "1/2 tsp black pepper",
      "Zest of 1 lemon",
      "1 tbsp lemon juice",
      "1 tbsp water",
      "Pinch of salt"
    ],
    steps: [
      "Finely chop the dill.",
      "Whisk the Greek yogurt with the dill, garlic powder, black pepper, lemon zest, lemon juice, and salt.",
      "Whisk in the water to loosen to a light, spoonable consistency.",
      "Taste, adjust lemon and salt, and serve with seafood, salads, or grain bowls."
    ],
    notes: "Light + refreshing. From @i_sakethkrishna's 8 High-Protein Sauces post."
  }
];
