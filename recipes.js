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
//   videoUrl: "https://...",            // optional — link to the reel/video
//   category: "sauce",                  // one: sauce, chicken, beef, pork, lamb,
//                                       //   vegetable, seafood, pasta, soup, salad,
//                                       //   dessert, bread, breakfast, side, main, drink
//   time: "quick",                      // quick (<30m) | medium (30-60m) | long (>1h)
//   difficulty: "easy",                 // easy | medium | hard
//   flavors: ["spicy", "sweet"],        // any of: spicy, sweet, savoury, sour,
//                                       //   smoky, fresh, rich, tangy, herby, garlicky
//   servings: 4,                        // optional — base servings, shown by the scaler
//   dateAdded: "2026-07-10",            // YYYY-MM-DD — powers "Newest first" + NEW badge
//   pantry: ["greek yogurt", "lemon"],  // canonical item names (lowercase, no quantities,
//                                       //   no prep words) — powers the My Fridge feature.
//                                       //   One entry per distinct item; skip water.
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
    dateAdded: "2026-07-10",
    pantry: ["mayonnaise", "greek yogurt", "cilantro", "basil", "mint", "jalapeños", "ají amarillo paste", "lime", "white wine vinegar", "honey", "dijon mustard", "olive oil", "salt"],
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
    dateAdded: "2026-07-10",
    pantry: ["greek yogurt", "parmesan cheese", "garlic", "garlic powder", "black pepper", "lemon", "salt"],
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
    dateAdded: "2026-07-10",
    pantry: ["greek yogurt", "chipotle powder", "paprika", "garlic powder", "honey", "lemon", "salt"],
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
    dateAdded: "2026-07-10",
    pantry: ["greek yogurt", "cajun seasoning", "garlic powder", "onion powder", "honey", "lemon", "salt"],
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
    dateAdded: "2026-07-10",
    pantry: ["greek yogurt", "roasted red peppers", "garlic powder", "paprika", "olive oil", "lemon", "salt"],
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
    dateAdded: "2026-07-10",
    pantry: ["greek yogurt", "peri peri seasoning", "garlic", "paprika", "honey", "lemon", "salt"],
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
    dateAdded: "2026-07-10",
    pantry: ["greek yogurt", "hot sauce", "garlic powder", "paprika", "honey", "lemon", "salt"],
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
    dateAdded: "2026-07-10",
    pantry: ["greek yogurt", "fresh dill", "garlic powder", "black pepper", "lemon", "salt"],
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
  },
  {
    id: "paris-steak-sauce",
    title: "Paris Steak Sauce (Café de Paris)",
    image: "images/paris-steak-sauce.jpg",
    source: "https://www.instagram.com/reel/DSMmoKdkpQf/",
    category: "sauce",
    time: "medium",
    difficulty: "medium",
    flavors: ["rich", "savoury", "herby"],
    servings: 4,
    dateAdded: "2026-07-10",
    pantry: ["butter", "shallot", "tarragon", "parsley", "sage", "basil", "anchovies", "nutmeg", "walnuts", "capers", "egg", "dijon mustard", "worcestershire sauce", "white vinegar", "salt", "black pepper"],
    ingredients: [
      "250 g (2 sticks + 2 tbsp) butter",
      "1 shallot, sliced",
      "1 tbsp fresh tarragon",
      "1 tbsp fresh parsley",
      "1 tsp fresh sage",
      "1 tbsp fresh basil",
      "2 anchovy fillets",
      "1/4 tsp ground nutmeg",
      "2 walnut halves",
      "1 tsp capers",
      "Salt and pepper",
      "1 egg yolk",
      "1 tsp Dijon mustard",
      "1 tsp Worcestershire sauce",
      "1 tsp white vinegar"
    ],
    steps: [
      "Slice the shallot and add it to a saucepan with the butter over low heat. Slowly poach until soft and the kitchen smells amazing — don't let it brown.",
      "Pour the shallot butter into a food processor with the tarragon, parsley, sage, basil, anchovies, nutmeg, walnuts, capers, salt, and pepper. Blend until smooth.",
      "Secure a bowl on a wet tea towel. Add the egg yolk, Dijon, Worcestershire, and white vinegar, and start whisking.",
      "Slowly drizzle in the warm herb butter while whisking constantly, like making a mayonnaise, until thick and emulsified.",
      "Transfer about two thirds of the sauce to a saucepan over low heat. When it just starts to turn grainy, cut the heat and whisk the remaining third back in until smooth.",
      "Blanket over steak and fries."
    ],
    notes: "From Alex Baka's reel on the famously 'leaked' L'Entrecôte-style sauce — people queue three hours for this. The reel names all 10 ingredients but not every amount; herb and seasoning quantities above are sensible starting points, taste and adjust."
  },
  {
    id: "roasted-red-pepper-tomato-pasta",
    title: "Roasted Red Pepper & Tomato Pasta",
    image: "images/roasted-red-pepper-tomato-pasta.jpg",
    source: "https://www.instagram.com/reel/DXxI22XhRGT/",
    category: "pasta",
    time: "medium",
    difficulty: "easy",
    flavors: ["rich", "smoky", "garlicky", "savoury"],
    servings: 4,
    dateAdded: "2026-07-10",
    pantry: ["red bell peppers", "cherry tomatoes", "shallots", "garlic", "olive oil", "garlic powder", "onion powder", "oregano", "thyme", "smoked paprika", "red pepper flakes", "cream cheese", "basil", "heavy cream", "pasta", "parmesan cheese", "salt", "black pepper"],
    ingredients: [
      "4 large red bell peppers, halved and seeded",
      "2 cups cherry tomatoes (about 1 pint)",
      "3 shallots, peeled and halved",
      "2 whole garlic heads, halved horizontally",
      "1/3 cup olive oil",
      "1 tsp kosher salt",
      "1/2 tsp black pepper",
      "1 tsp garlic powder",
      "1 tsp onion powder",
      "1 tsp dried oregano",
      "1/2 tsp dried thyme",
      "1 tsp smoked paprika",
      "1/2 tsp red pepper flakes (optional)",
      "4 oz cream cheese",
      "1/2 cup fresh basil leaves",
      "1/2 cup heavy cream",
      "12 oz pasta",
      "1 cup reserved pasta water",
      "Grated Parmesan and fresh basil, for topping"
    ],
    steps: [
      "Preheat oven to 425°F (218°C). Add peppers, tomatoes, shallots, and garlic to a sheet pan. Drizzle with olive oil, season with the spices, and roast for 30 minutes until soft and slightly charred.",
      "Cook pasta in salted water until al dente. Reserve 1 cup pasta water before draining.",
      "Squeeze the roasted garlic from the skins and add everything from the sheet pan to a blender with the cream cheese, basil, heavy cream, and 1/2 cup pasta water.",
      "Blend until smooth and creamy, adding more pasta water if needed.",
      "Pour the sauce into a large pan over medium heat, add the cooked pasta, and toss until fully coated.",
      "Top with Parmesan and fresh basil before serving."
    ],
    notes: "From Jeremy's (@thecontrarianmoney) reel — everything roasts on one sheet pan and blends into a restaurant-quality sauce for a fraction of the cost."
  },
  {
    id: "picanha-with-chimichurri",
    title: "Picanha with Chimichurri",
    image: "images/picanha-with-chimichurri.jpg",
    source: "https://www.instagram.com/reel/DXro30MDeFk/",
    category: "beef",
    time: "medium",
    difficulty: "medium",
    flavors: ["savoury", "smoky", "tangy", "fresh"],
    servings: 4,
    dateAdded: "2026-07-10",
    pantry: ["picanha", "coarse salt", "parsley", "cilantro", "garlic", "shallot", "jalapeños", "lemon", "olive oil", "red wine vinegar", "black pepper"],
    ingredients: [
      "1 whole picanha (2–3 lb), fat cap left on",
      "Coarse salt (plenty — two rounds of seasoning)",
      "1 cup fresh parsley",
      "1/2 cup fresh cilantro",
      "3 garlic cloves",
      "1 small shallot",
      "1 jalapeño",
      "Juice of 1/2 lemon",
      "1/2 cup olive oil",
      "2 tbsp red wine vinegar",
      "Salt and pepper"
    ],
    steps: [
      "Leave all the fat on the fat cap. Trim only the silver skin: start in a corner, slice a little flap, and cut slowly upward into the skin so you waste minimal meat.",
      "Salt the entire roast generously on every side — picanha is salt only.",
      "Sear the whole roast, rotating for an even char. Keep a close eye on it: once the fat starts rendering it will flare up quickly.",
      "Take it off and slice WITH the grain into 1.5–2 inch steaks.",
      "Give the steaks another round of salt and sear again, slowly building the crust. Rest on a wire rack.",
      "Blend the parsley, cilantro, garlic, shallot, jalapeño, lemon juice, olive oil, red wine vinegar, salt, and pepper into a chimichurri — blending activates the flavours more than chopping.",
      "Slice each steak against the grain and serve with the chimichurri — it's tangy, refreshing, and cuts the rich steak perfectly."
    ],
    notes: "From Jack Mancuso (@chefcuso), who calls picanha the best cut of steak — and cheaper per pound than filet, ribeye, or strip. He doesn't give chimichurri amounts on camera; quantities above are classic ratios, adjust to taste."
  },
  {
    id: "michelin-star-mashed-potatoes",
    title: "3-Michelin-Star Mashed Potatoes",
    image: "images/michelin-star-mashed-potatoes.jpg",
    source: "https://www.instagram.com/reel/DY7at0aNs4S/",
    category: "side",
    time: "medium",
    difficulty: "medium",
    flavors: ["rich", "savoury"],
    servings: 6,
    dateAdded: "2026-07-10",
    pantry: ["yukon gold potatoes", "butter", "milk", "salt"],
    ingredients: [
      "2 lb Yukon Gold potatoes",
      "1 lb cold butter, cubed",
      "1/2 cup warm milk",
      "Pinch of salt"
    ],
    steps: [
      "Boil the potatoes in salted water until fork tender.",
      "Peel them while still hot — use a clean kitchen towel to hold them if you don't have chef hands.",
      "Push through a food mill or fine strainer to break the potatoes into a smooth, super-fine texture.",
      "Place over low heat and add the cold butter a few cubes at a time, stirring until fully emulsified.",
      "Finish by drizzling in the warm milk with a pinch of salt, stirring until extra silky.",
      "Optional: pipe into a fancy swirl to plate it like Joël Robuchon — it probably tastes better that way."
    ],
    notes: "Nick DiGiovanni's take on Joël Robuchon's pommes purée — the mashed potatoes with more Michelin stars than any dish in history. Yes, that's a 2:1 potato-to-butter ratio."
  },
  {
    id: "hot-honey-ranch",
    title: "Viral Hot Honey Ranch",
    image: "images/hot-honey-ranch.jpg",
    source: "https://www.instagram.com/reel/DWJo9pdEeL4/",
    category: "sauce",
    time: "quick",
    difficulty: "easy",
    flavors: ["sweet", "spicy", "tangy"],
    servings: 8,
    dateAdded: "2026-07-10",
    pantry: ["sour cream", "hot honey", "garlic chili oil", "ranch seasoning", "dill", "red pepper flakes", "white vinegar", "garlic powder", "buttermilk", "salt"],
    ingredients: [
      "1 cup sour cream",
      "2/3 cup hot honey",
      "2 tbsp garlic chili oil",
      "4 tbsp ranch seasoning mix",
      "4 tbsp chopped fresh dill",
      "2 tsp red pepper flakes",
      "1 tsp white vinegar or fresh lemon juice",
      "1/2 tsp garlic powder",
      "1–2 tbsp buttermilk (or milk)",
      "Pinch of salt, to taste",
      "Optional: 1/4 tsp MSG"
    ],
    steps: [
      "Add the sour cream, hot honey, garlic chili oil, ranch seasoning, dill, and red pepper flakes to a jar or mixing bowl.",
      "Add the vinegar (or lemon juice), garlic powder, and buttermilk.",
      "Whisk until completely smooth. Taste and add a pinch of salt — and the MSG, if you want it restaurant-level addictive.",
      "Refrigerate at least 2–4 hours, preferably overnight, so the ranch seasoning and dill hydrate and the flavours blend.",
      "Stir again before serving, cold or slightly warmed. Keeps up to 10 days in an airtight container in the fridge."
    ],
    notes: "Christopher Smith's (@meatlicious) mega-viral sauce — sweet, spicy, creamy, and balanced. This is his upgraded sour-cream version from his public Substack (the reel's 'true ranch' base). Goes on chicken, fries, wraps, pizza — everything."
  },
  {
    id: "flour-tortillas",
    title: "Flour Tortillas",
    image: "images/flour-tortillas.jpg",
    source: "https://www.instagram.com/reel/DZatjIgSdvX/",
    category: "bread",
    time: "medium",
    difficulty: "easy",
    flavors: ["savoury", "rich"],
    servings: 12,
    dateAdded: "2026-07-10",
    pantry: ["flour", "salt", "butter", "neutral oil"],
    ingredients: [
      "About 5 cups (600 g) all-purpose flour (see notes)",
      "2 tsp salt",
      "8 tbsp (1 stick) butter, softened",
      "2 cups warm water",
      "Neutral oil, for coating"
    ],
    steps: [
      "Whisk the flour and salt in a large bowl. Work the butter in with your fingers until the mixture has a sandy texture.",
      "Add 1 cup of the water and mix until fully absorbed, then add the second cup and bring the dough together.",
      "Knead for about 10 minutes until smooth. Cover in the bowl and rest 10 minutes.",
      "Divide into 90 g balls, coat them lightly in oil, and rest another 10 minutes.",
      "Flour your surface and roll each ball out thin.",
      "Cook in a very hot, dry pan. When bubbles come through, flip — a few seconds more and you're left with a beauty."
    ],
    notes: "From Stefan Torres' reel ('you will never buy tortillas again'). He gives the salt, butter, and water amounts but never states the flour — about 5 cups is what 2 cups of water and 90 g balls work out to; adjust until the dough is soft but not sticky."
  },
  {
    id: "pickled-ginger",
    title: "Pickled Ginger (Gari)",
    image: "images/pickled-ginger.jpg",
    source: "https://www.instagram.com/reel/DQTLHkhETF9/",
    category: "side",
    time: "long",
    difficulty: "easy",
    flavors: ["tangy", "sour", "fresh"],
    dateAdded: "2026-07-10",
    pantry: ["ginger", "sea salt", "rice vinegar", "sugar"],
    ingredients: [
      "250 g fresh young ginger",
      "1 tsp sea salt (for sweating)",
      "1 cup rice vinegar (halal sushi rice vinegar works too)",
      "1/4 cup water",
      "1/4 cup sugar",
      "1 tsp salt (for the brine)"
    ],
    steps: [
      "Peel the ginger (a spoon works well) and slice it as thinly as you can.",
      "Toss with the sea salt, press down with another bowl on top, and leave for 30 minutes.",
      "Boil or blanch the ginger for only 2–3 minutes — no longer, so it stays fresh and crunchy. Drain and rinse with cold water, or leave it to dry.",
      "Make the brine: heat the water, sugar, salt, and rice vinegar in a pot until dissolved, then let it cool.",
      "Squeeze the excess water from the ginger and pack it into a sterilised jar.",
      "Add just enough brine to submerge the ginger. Keep in the fridge for at least a day before eating."
    ],
    notes: "From Anna Ayuda (@annawhatscooking) — about 20 minutes hands-on, then a day in the fridge. Brine amounts aren't given in the reel; these are standard gari ratios. Add a little beet or red shiso for the pink Japanese-restaurant colour. Keeps ~3 months refrigerated, and it's good for your gut."
  },
  {
    id: "honey-garlic-chicken-marinade",
    title: "Honey Garlic Chicken Marinade",
    image: "images/marinades-crowd-favorites.jpg",
    source: "https://www.instagram.com/p/DZy2OoAjVu1/",
    category: "chicken",
    time: "quick",
    difficulty: "easy",
    flavors: ["sweet", "garlicky", "savoury"],
    servings: 4,
    dateAdded: "2026-07-10",
    pantry: ["chicken", "honey", "soy sauce", "garlic", "lemon"],
    ingredients: [
      "2 tbsp honey",
      "1 tbsp soy sauce",
      "1 tsp minced garlic",
      "Splash of lemon juice",
      "About 1 lb (500 g) chicken"
    ],
    steps: [
      "Whisk the honey, soy sauce, garlic, and lemon juice together.",
      "Coat the chicken and marinate in the fridge — 30 minutes minimum, up to 24 hours for deeper flavour.",
      "Cook your preferred way (pan, grill, or oven) until cooked through (165°F / 74°C)."
    ],
    notes: "From @factsdailyy's 'Chicken Marinades Everyone Should Know' — Crowd Favourites. Sweet marinades caramelise deeper as they cook."
  },
  {
    id: "sweet-chili-chicken-marinade",
    title: "Sweet Chili Chicken Marinade",
    image: "images/marinades-crowd-favorites.jpg",
    source: "https://www.instagram.com/p/DZy2OoAjVu1/",
    category: "chicken",
    time: "quick",
    difficulty: "easy",
    flavors: ["sweet", "spicy"],
    servings: 4,
    dateAdded: "2026-07-10",
    pantry: ["chicken", "sweet chili sauce", "soy sauce", "garlic", "sesame oil"],
    ingredients: [
      "2 tbsp sweet chili sauce",
      "1 tbsp soy sauce",
      "1 tsp minced garlic",
      "1 tsp sesame oil",
      "About 1 lb (500 g) chicken"
    ],
    steps: [
      "Whisk the sweet chili sauce, soy sauce, garlic, and sesame oil together.",
      "Coat the chicken and marinate in the fridge — 30 minutes minimum, up to 24 hours for deeper flavour.",
      "Cook your preferred way (pan, grill, or oven) until cooked through (165°F / 74°C)."
    ],
    notes: "From @factsdailyy's 'Chicken Marinades Everyone Should Know' — Crowd Favourites."
  },
  {
    id: "garlic-parmesan-chicken-marinade",
    title: "Garlic Parmesan Chicken Marinade",
    image: "images/marinades-crowd-favorites.jpg",
    source: "https://www.instagram.com/p/DZy2OoAjVu1/",
    category: "chicken",
    time: "quick",
    difficulty: "easy",
    flavors: ["garlicky", "savoury", "rich"],
    servings: 4,
    dateAdded: "2026-07-10",
    pantry: ["chicken", "olive oil", "parmesan cheese", "garlic", "black pepper"],
    ingredients: [
      "2 tbsp olive oil",
      "2 tbsp grated Parmesan",
      "1 tsp minced garlic",
      "Black pepper",
      "About 1 lb (500 g) chicken"
    ],
    steps: [
      "Whisk the olive oil, Parmesan, garlic, and black pepper together.",
      "Coat the chicken and marinate in the fridge — 30 minutes minimum, up to 24 hours for deeper flavour.",
      "Cook your preferred way (pan, grill, or oven) until cooked through (165°F / 74°C)."
    ],
    notes: "From @factsdailyy's 'Chicken Marinades Everyone Should Know' — Crowd Favourites."
  },
  {
    id: "teriyaki-chicken-marinade",
    title: "Teriyaki Chicken Marinade",
    image: "images/marinades-crowd-favorites.jpg",
    source: "https://www.instagram.com/p/DZy2OoAjVu1/",
    category: "chicken",
    time: "quick",
    difficulty: "easy",
    flavors: ["sweet", "savoury"],
    servings: 4,
    dateAdded: "2026-07-10",
    pantry: ["chicken", "soy sauce", "brown sugar", "ginger", "garlic"],
    ingredients: [
      "2 tbsp soy sauce",
      "1 tbsp brown sugar",
      "1 tsp grated ginger",
      "1 tsp minced garlic",
      "About 1 lb (500 g) chicken"
    ],
    steps: [
      "Whisk the soy sauce, brown sugar, ginger, and garlic together.",
      "Coat the chicken and marinate in the fridge — 30 minutes minimum, up to 24 hours for deeper flavour.",
      "Cook your preferred way (pan, grill, or oven) until cooked through (165°F / 74°C)."
    ],
    notes: "From @factsdailyy's 'Chicken Marinades Everyone Should Know' — Crowd Favourites. The brown sugar gives extra caramelisation."
  },
  {
    id: "buffalo-ranch-chicken-marinade",
    title: "Buffalo Ranch Chicken Marinade",
    image: "images/marinades-spicy.jpg",
    source: "https://www.instagram.com/p/DZy2OoAjVu1/",
    category: "chicken",
    time: "quick",
    difficulty: "easy",
    flavors: ["spicy", "tangy"],
    servings: 4,
    dateAdded: "2026-07-10",
    pantry: ["chicken", "hot sauce", "ranch seasoning", "garlic", "olive oil"],
    ingredients: [
      "2 tbsp hot sauce",
      "1 tbsp ranch seasoning",
      "1 tsp minced garlic",
      "1 tbsp olive oil",
      "About 1 lb (500 g) chicken"
    ],
    steps: [
      "Whisk the hot sauce, ranch seasoning, garlic, and olive oil together.",
      "Coat the chicken and marinate in the fridge — 30 minutes minimum, up to 24 hours for deeper flavour.",
      "Cook your preferred way (pan, grill, or oven) until cooked through (165°F / 74°C)."
    ],
    notes: "From @factsdailyy's 'Chicken Marinades Everyone Should Know' — Spicy Marinades."
  },
  {
    id: "smoky-cajun-chicken-marinade",
    title: "Smoky Cajun Chicken Marinade",
    image: "images/marinades-spicy.jpg",
    source: "https://www.instagram.com/p/DZy2OoAjVu1/",
    category: "chicken",
    time: "quick",
    difficulty: "easy",
    flavors: ["smoky", "spicy"],
    servings: 4,
    dateAdded: "2026-07-10",
    pantry: ["chicken", "olive oil", "cajun seasoning", "paprika", "garlic powder"],
    ingredients: [
      "2 tbsp olive oil",
      "1 tsp Cajun seasoning",
      "1 tsp paprika",
      "1 tsp garlic powder",
      "About 1 lb (500 g) chicken"
    ],
    steps: [
      "Whisk the olive oil, Cajun seasoning, paprika, and garlic powder together.",
      "Coat the chicken and marinate in the fridge — 30 minutes minimum, up to 24 hours for deeper flavour.",
      "Cook your preferred way (pan, grill, or oven) until cooked through (165°F / 74°C)."
    ],
    notes: "From @factsdailyy's 'Chicken Marinades Everyone Should Know' — Spicy Marinades. Cajun blends vary in salt, so taste before adding more."
  },
  {
    id: "chipotle-lime-chicken-marinade",
    title: "Chipotle Lime Chicken Marinade",
    image: "images/marinades-spicy.jpg",
    source: "https://www.instagram.com/p/DZy2OoAjVu1/",
    category: "chicken",
    time: "quick",
    difficulty: "easy",
    flavors: ["smoky", "tangy", "spicy"],
    servings: 4,
    dateAdded: "2026-07-10",
    pantry: ["chicken", "lime", "chipotle powder", "garlic", "olive oil"],
    ingredients: [
      "2 tbsp lime juice",
      "1 tsp chipotle powder",
      "1 tsp minced garlic",
      "1 tbsp olive oil",
      "About 1 lb (500 g) chicken"
    ],
    steps: [
      "Whisk the lime juice, chipotle powder, garlic, and olive oil together.",
      "Coat the chicken and marinate in the fridge — 30 minutes minimum, up to 24 hours for deeper flavour.",
      "Cook your preferred way (pan, grill, or oven) until cooked through (165°F / 74°C)."
    ],
    notes: "From @factsdailyy's 'Chicken Marinades Everyone Should Know' — Spicy Marinades. The lime tenderises while it flavours."
  },
  {
    id: "peri-peri-chicken-marinade",
    title: "Peri Peri Chicken Marinade",
    image: "images/marinades-spicy.jpg",
    source: "https://www.instagram.com/p/DZy2OoAjVu1/",
    category: "chicken",
    time: "quick",
    difficulty: "easy",
    flavors: ["spicy", "tangy"],
    servings: 4,
    dateAdded: "2026-07-10",
    pantry: ["chicken", "chili paste", "lemon", "paprika", "garlic"],
    ingredients: [
      "2 tbsp chili paste",
      "1 tbsp lemon juice",
      "1 tsp paprika",
      "1 tsp minced garlic",
      "About 1 lb (500 g) chicken"
    ],
    steps: [
      "Whisk the chili paste, lemon juice, paprika, and garlic together.",
      "Coat the chicken and marinate in the fridge — 30 minutes minimum, up to 24 hours for deeper flavour.",
      "Cook your preferred way (pan, grill, or oven) until cooked through (165°F / 74°C)."
    ],
    notes: "From @factsdailyy's 'Chicken Marinades Everyone Should Know' — Spicy Marinades."
  },
  {
    id: "lemon-herb-chicken-marinade",
    title: "Lemon Herb Chicken Marinade",
    image: "images/marinades-fresh-zesty.jpg",
    source: "https://www.instagram.com/p/DZy2OoAjVu1/",
    category: "chicken",
    time: "quick",
    difficulty: "easy",
    flavors: ["fresh", "tangy", "herby"],
    servings: 4,
    dateAdded: "2026-07-10",
    pantry: ["chicken", "lemon", "olive oil", "parsley", "black pepper"],
    ingredients: [
      "2 tbsp lemon juice",
      "1 tbsp olive oil",
      "1 tsp parsley",
      "Black pepper",
      "About 1 lb (500 g) chicken"
    ],
    steps: [
      "Whisk the lemon juice, olive oil, parsley, and black pepper together.",
      "Coat the chicken and marinate in the fridge — 30 minutes minimum, up to 24 hours for deeper flavour.",
      "Cook your preferred way (pan, grill, or oven) until cooked through (165°F / 74°C)."
    ],
    notes: "From @factsdailyy's 'Chicken Marinades Everyone Should Know' — Fresh & Zesty. Citrus-based marinades bring freshness and brightness, and the acid tenderises."
  },
  {
    id: "greek-yogurt-herb-chicken-marinade",
    title: "Greek Yogurt Herb Chicken Marinade",
    image: "images/marinades-fresh-zesty.jpg",
    source: "https://www.instagram.com/p/DZy2OoAjVu1/",
    category: "chicken",
    time: "quick",
    difficulty: "easy",
    flavors: ["fresh", "tangy", "herby"],
    servings: 4,
    dateAdded: "2026-07-10",
    pantry: ["chicken", "greek yogurt", "lemon", "dill", "garlic"],
    ingredients: [
      "2 tbsp Greek yogurt",
      "1 tbsp lemon juice",
      "1 tsp dill",
      "1 tsp minced garlic",
      "About 1 lb (500 g) chicken"
    ],
    steps: [
      "Whisk the yogurt, lemon juice, dill, and garlic together.",
      "Coat the chicken and marinate in the fridge — 30 minutes minimum, up to 24 hours for deeper flavour.",
      "Cook your preferred way (pan, grill, or oven) until cooked through (165°F / 74°C)."
    ],
    notes: "From @factsdailyy's 'Chicken Marinades Everyone Should Know' — Fresh & Zesty. Yogurt is one of the best tenderisers for chicken."
  },
  {
    id: "mediterranean-garlic-chicken-marinade",
    title: "Mediterranean Garlic Chicken Marinade",
    image: "images/marinades-fresh-zesty.jpg",
    source: "https://www.instagram.com/p/DZy2OoAjVu1/",
    category: "chicken",
    time: "quick",
    difficulty: "easy",
    flavors: ["garlicky", "herby", "fresh"],
    servings: 4,
    dateAdded: "2026-07-10",
    pantry: ["chicken", "olive oil", "garlic", "oregano", "lemon"],
    ingredients: [
      "2 tbsp olive oil",
      "2 tsp minced garlic",
      "1 tsp oregano",
      "Splash of lemon juice",
      "About 1 lb (500 g) chicken"
    ],
    steps: [
      "Whisk the olive oil, garlic, oregano, and lemon juice together.",
      "Coat the chicken and marinate in the fridge — 30 minutes minimum, up to 24 hours for deeper flavour.",
      "Cook your preferred way (pan, grill, or oven) until cooked through (165°F / 74°C)."
    ],
    notes: "From @factsdailyy's 'Chicken Marinades Everyone Should Know' — Fresh & Zesty."
  },
  {
    id: "dijon-herb-chicken-marinade",
    title: "Dijon Herb Chicken Marinade",
    image: "images/marinades-fresh-zesty.jpg",
    source: "https://www.instagram.com/p/DZy2OoAjVu1/",
    category: "chicken",
    time: "quick",
    difficulty: "easy",
    flavors: ["tangy", "herby", "savoury"],
    servings: 4,
    dateAdded: "2026-07-10",
    pantry: ["chicken", "dijon mustard", "olive oil", "garlic", "thyme"],
    ingredients: [
      "1 tbsp Dijon mustard",
      "1 tbsp olive oil",
      "1 tsp minced garlic",
      "1 tsp thyme",
      "About 1 lb (500 g) chicken"
    ],
    steps: [
      "Whisk the Dijon, olive oil, garlic, and thyme together.",
      "Coat the chicken and marinate in the fridge — 30 minutes minimum, up to 24 hours for deeper flavour.",
      "Cook your preferred way (pan, grill, or oven) until cooked through (165°F / 74°C)."
    ],
    notes: "From @factsdailyy's 'Chicken Marinades Everyone Should Know' — Fresh & Zesty."
  }
];
