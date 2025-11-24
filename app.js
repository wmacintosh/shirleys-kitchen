// Complete recipe data - all 139 recipes
const recipes = [
  // Appetizers & Dips (9 recipes)
  {
    section: "Appetizers & Dips",
    title: "Cactus Dip (Boston Pizza Style)",
    ingredients: [
      "1 cup sour cream",
      "1/2 cup creamy Caesar dressing",
      "1/4 cup shredded Parmesan cheese",
      "1/4 cup finely chopped green onion",
      "1/2 - 1 tsp crushed chilies/red pepper flakes"
    ],
    instructions: [
      "Whisk together all ingredients until well combined.",
      "Cover and chill until ready to use — overnight recommended.",
      "Serve chilled with chips, crackers, or veggies."
    ]
  },
  {
    section: "Appetizers & Dips",
    title: "Classic Deviled Eggs",
    ingredients: [
      "6 large eggs",
      "1/4 cup mayonnaise",
      "1 tsp Dijon or yellow mustard",
      "1 tsp vinegar",
      "1/8 tsp salt",
      "Pinch of black pepper",
      "Paprika for garnish"
    ],
    instructions: [
      "Hard-boil eggs, cool, peel and halve lengthwise.",
      "Mash yolks with mayo, mustard, vinegar, salt, and pepper.",
      "Pipe or spoon yolk back into whites, sprinkle with paprika."
    ]
  },
  {
    section: "Appetizers & Dips",
    title: "Crab Dip Appetizer",
    ingredients: [
      "1 cup mayonnaise",
      "1/2 cup shredded cheddar cheese",
      "1/2 cup chopped onion",
      "1/2 tsp curry powder",
      "4 dashes Tabasco sauce",
      "1 can (6-7 oz) crab meat, drained",
      "French bread, sliced"
    ],
    instructions: [
      "Preheat broiler.",
      "Mix mayo, cheddar cheese, onion, curry powder, Tabasco, and crab meat.",
      "Arrange French bread slices on baking sheet. Spread mixture onto bread.",
      "Broil for approximately 1 minute until hot and bubbly. Watch carefully!"
    ]
  },
  {
    section: "Appetizers & Dips",
    title: "Homemade Spicy Ranch Dip",
    ingredients: [
      "1/2 cup mayonnaise",
      "1/2 cup sour cream or Greek yogurt",
      "1/4 - 1/2 cup buttermilk",
      "1 tsp dried dill",
      "1 tsp dried parsley",
      "1/2 tsp dried chives",
      "1/2 tsp garlic powder",
      "1/2 tsp onion powder",
      "1/2 tsp salt",
      "1/4 tsp black pepper",
      "1 small jalapeño (minced)",
      "1/4 tsp cayenne pepper"
    ],
    instructions: [
      "Whisk together mayonnaise, sour cream, and 1/4 cup buttermilk.",
      "Add all seasonings and spicy elements. Whisk until smooth.",
      "Adjust consistency with more buttermilk if needed.",
      "Refrigerate for at least 30 minutes before serving."
    ]
  },
  {
    section: "Appetizers & Dips",
    title: "Hot Crabmeat Appetizer",
    ingredients: [
      "8 oz cream cheese, softened",
      "7.5 oz can crabmeat, drained & flaked",
      "2 tsp finely chopped onions",
      "2 Tbsp milk",
      "1/2 tsp horseradish",
      "1/4 tsp salt",
      "Pepper to taste",
      "1/2 cup sliced almonds, toasted"
    ],
    instructions: [
      "Preheat oven to 375°F.",
      "Combine all ingredients except almonds. Mix well.",
      "Spoon into 9-inch pie plate. Sprinkle toasted almonds on top.",
      "Bake for 15 minutes. Serve warm with crackers."
    ]
  },
  {
    section: "Appetizers & Dips",
    title: "Lobster Dip (Donnetta's)",
    ingredients: [
      "1 can (6 oz) lobster, thawed/drained/chopped",
      "8 oz cream cheese, softened",
      "1 cup mayonnaise",
      "1 cup grated cheddar cheese",
      "1/2 cup diced onion",
      "2 tsp dill weed (optional)"
    ],
    instructions: [
      "Preheat oven to 325°F.",
      "Beat cream cheese until smooth. Add mayonnaise, cheddar, onion, and dill.",
      "Gently fold in lobster. Spread in small baking dish.",
      "Bake for 20 minutes until hot and bubbly."
    ]
  },
  {
    section: "Appetizers & Dips",
    title: "Party Cheese Ball",
    ingredients: [
      "2 packages (8 oz each) cream cheese, softened",
      "1 cup shredded cheddar cheese",
      "1 Tbsp Worcestershire sauce",
      "1 tsp garlic powder",
      "1 tsp onion powder",
      "Chopped pecans or parsley for rolling"
    ],
    instructions: [
      "Combine cream cheese, cheddar, Worcestershire, garlic and onion powder.",
      "Shape mixture into a ball.",
      "Roll in chopped pecans or parsley until coated.",
      "Wrap and chill for at least 1 hour."
    ]
  },
  {
    section: "Appetizers & Dips",
    title: "Spicy Guacamole",
    ingredients: [
      "3 ripe Hass avocados",
      "1/4 cup finely diced red or white onion",
      "1/4 cup chopped fresh cilantro",
      "1-2 Serrano peppers, finely minced",
      "Juice of 1-2 limes",
      "1/2 tsp salt (to taste)",
      "Optional: Diced tomato, garlic, cumin"
    ],
    instructions: [
      "Halve avocados, remove pits, scoop flesh into bowl.",
      "Squeeze lime juice over avocado and mash gently.",
      "Add onion, cilantro, peppers, salt, and optional ingredients.",
      "Serve immediately with chips."
    ]
  },
  {
    section: "Appetizers & Dips",
    title: "Spicy Queso Dip",
    ingredients: [
      "1 Tbsp butter",
      "1/4 cup onion, chopped",
      "1-2 cloves garlic, minced",
      "12 oz can evaporated milk",
      "8 oz Velveeta or white American cheese, cubed",
      "8 oz Pepper Jack cheese, shredded",
      "10 oz can diced tomatoes & green chilies (Rotel), undrained",
      "1 fresh jalapeño, minced"
    ],
    instructions: [
      "Sauté onion in butter until soft. Add garlic and jalapeño; cook 1 minute.",
      "Add evaporated milk and heat until steaming (do not boil).",
      "Reduce heat to low. Add cubed cheese, stirring until melted.",
      "Add shredded cheese gradually. Stir in tomatoes and chilies.",
      "Heat through. Serve warm."
    ]
  },
  
  // Soups & Salads (9 recipes)
  {
    section: "Soups & Salads",
    title: "Beef Barley Soup",
    ingredients: [
      "1 lb stew beef, cubed",
      "1 Tbsp oil",
      "8 cups beef broth",
      "1 cup pearl barley",
      "2 carrots, diced",
      "2 celery stalks, diced",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "1 bay leaf",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Brown beef in oil in large pot. Remove and set aside.",
      "Sauté onion, carrots, and celery until softened. Add garlic.",
      "Return beef to pot. Add broth, barley, and bay leaf.",
      "Bring to boil, then simmer for 1-1.5 hours until tender.",
      "Season with salt and pepper. Remove bay leaf before serving."
    ]
  },
  {
    section: "Soups & Salads",
    title: "Broccoli Cheese Soup",
    ingredients: [
      "4 cups broccoli florets",
      "1/4 cup butter",
      "1/4 cup flour",
      "2 cups milk",
      "2 cups chicken broth",
      "2 cups shredded cheddar cheese",
      "1/2 cup heavy cream",
      "Salt and pepper to taste",
      "Pinch of nutmeg"
    ],
    instructions: [
      "Steam broccoli until tender. Chop into small pieces.",
      "Melt butter in pot, whisk in flour. Cook for 1 minute.",
      "Gradually add milk and broth, whisking constantly.",
      "Simmer until thickened. Add cheese and stir until melted.",
      "Add broccoli and cream. Season with salt, pepper, and nutmeg."
    ]
  },
  {
    section: "Soups & Salads",
    title: "Caesar Salad with Homemade Dressing",
    ingredients: [
      "1 large romaine lettuce head, chopped",
      "1/2 cup mayonnaise",
      "1/4 cup grated Parmesan cheese",
      "2 Tbsp lemon juice",
      "1 Tbsp Dijon mustard",
      "2 cloves garlic, minced",
      "1 tsp Worcestershire sauce",
      "Croutons",
      "Extra Parmesan for topping"
    ],
    instructions: [
      "Whisk together mayo, Parmesan, lemon juice, mustard, garlic, and Worcestershire.",
      "Place romaine in large bowl.",
      "Toss with dressing until evenly coated.",
      "Top with croutons and extra Parmesan."
    ]
  },
  {
    section: "Soups & Salads",
    title: "Classic Chicken Noodle Soup",
    ingredients: [
      "2 Tbsp butter",
      "1 onion, diced",
      "2 carrots, sliced",
      "2 celery stalks, sliced",
      "3 cloves garlic, minced",
      "8 cups chicken broth",
      "2 cups cooked chicken, shredded",
      "2 cups egg noodles",
      "1 bay leaf",
      "Salt, pepper, and parsley"
    ],
    instructions: [
      "Melt butter in large pot. Sauté onion, carrots, and celery until soft.",
      "Add garlic and cook 1 minute.",
      "Add broth and bay leaf. Bring to boil.",
      "Add noodles and cook until tender, about 8 minutes.",
      "Stir in chicken. Season with salt, pepper, and parsley."
    ]
  },
  {
    section: "Soups & Salads",
    title: "Creamy Potato Soup",
    ingredients: [
      "6 large potatoes, peeled and diced",
      "1 onion, chopped",
      "4 cups chicken broth",
      "1 cup heavy cream",
      "1/2 cup sour cream",
      "4 strips bacon, cooked and crumbled",
      "1 cup shredded cheddar cheese",
      "Green onions for garnish",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Cook potatoes and onion in broth until tender, about 15 minutes.",
      "Mash some potatoes in pot for thickness (leave some chunks).",
      "Stir in heavy cream and sour cream.",
      "Season with salt and pepper.",
      "Serve topped with bacon, cheddar, and green onions."
    ]
  },
  {
    section: "Soups & Salads",
    title: "Fresh Garden Salad",
    ingredients: [
      "Mixed salad greens (6 cups)",
      "1 cucumber, sliced",
      "2 tomatoes, wedged",
      "1/2 red onion, thinly sliced",
      "1 bell pepper, sliced",
      "1/2 cup shredded carrots",
      "Dressing of choice"
    ],
    instructions: [
      "Wash and dry all vegetables.",
      "Combine greens in large bowl.",
      "Add cucumber, tomatoes, onion, pepper, and carrots.",
      "Toss with your favorite dressing just before serving."
    ]
  },
  {
    section: "Soups & Salads",
    title: "Minestrone Soup",
    ingredients: [
      "2 Tbsp olive oil",
      "1 onion, diced",
      "2 carrots, diced",
      "2 celery stalks, diced",
      "3 cloves garlic, minced",
      "6 cups vegetable broth",
      "1 can (14 oz) diced tomatoes",
      "1 can (14 oz) kidney beans",
      "1 cup small pasta",
      "2 cups chopped spinach",
      "Italian seasoning, salt, pepper"
    ],
    instructions: [
      "Heat oil in large pot. Sauté onion, carrots, and celery.",
      "Add garlic and cook 1 minute.",
      "Add broth, tomatoes, and Italian seasoning. Bring to boil.",
      "Add pasta and cook until tender.",
      "Stir in beans and spinach. Season to taste."
    ]
  },
  {
    section: "Soups & Salads",
    title: "Tomato Basil Soup",
    ingredients: [
      "2 Tbsp butter",
      "1 onion, chopped",
      "3 cloves garlic, minced",
      "2 cans (28 oz each) crushed tomatoes",
      "2 cups vegetable broth",
      "1/2 cup fresh basil, chopped",
      "1/2 cup heavy cream",
      "1 Tbsp sugar",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Melt butter in pot. Sauté onion until soft.",
      "Add garlic and cook 1 minute.",
      "Add tomatoes, broth, basil, and sugar. Simmer 20 minutes.",
      "Blend until smooth using immersion blender.",
      "Stir in cream. Season with salt and pepper."
    ]
  },
  {
    section: "Soups & Salads",
    title: "Waldorf Salad",
    ingredients: [
      "3 apples, chopped",
      "1 cup celery, diced",
      "1/2 cup walnuts, chopped",
      "1/2 cup grapes, halved",
      "1/2 cup mayonnaise",
      "2 Tbsp lemon juice",
      "1 Tbsp honey",
      "Lettuce leaves for serving"
    ],
    instructions: [
      "Combine apples, celery, walnuts, and grapes in bowl.",
      "Whisk together mayo, lemon juice, and honey.",
      "Pour dressing over salad and toss gently.",
      "Serve on lettuce leaves."
    ]
  },

  // Breads & Muffins (8 recipes)
  {
    section: "Breads & Muffins",
    title: "Banana Bread",
    ingredients: [
      "3 ripe bananas, mashed",
      "1/3 cup melted butter",
      "3/4 cup sugar",
      "1 egg, beaten",
      "1 tsp vanilla",
      "1 tsp baking soda",
      "Pinch of salt",
      "1 1/2 cups flour"
    ],
    instructions: [
      "Preheat oven to 350°F. Grease 9x5 loaf pan.",
      "Mix mashed bananas with melted butter.",
      "Mix in sugar, egg, and vanilla.",
      "Sprinkle baking soda and salt over mixture. Mix in flour.",
      "Pour into prepared pan. Bake 60 minutes."
    ]
  },
  {
    section: "Breads & Muffins",
    title: "Blueberry Muffins",
    ingredients: [
      "2 cups flour",
      "3/4 cup sugar",
      "2 tsp baking powder",
      "1/2 tsp salt",
      "1/3 cup vegetable oil",
      "1 egg",
      "1 cup milk",
      "1 1/2 cups fresh blueberries"
    ],
    instructions: [
      "Preheat oven to 400°F. Line muffin tin with papers.",
      "Combine flour, sugar, baking powder, and salt.",
      "Whisk oil, egg, and milk. Add to dry ingredients.",
      "Fold in blueberries gently.",
      "Fill muffin cups 2/3 full. Bake 20-25 minutes."
    ]
  },
  {
    section: "Breads & Muffins",
    title: "Buttermilk Biscuits",
    ingredients: [
      "2 cups flour",
      "1 Tbsp baking powder",
      "1/2 tsp salt",
      "1/2 cup cold butter, cubed",
      "3/4 cup buttermilk"
    ],
    instructions: [
      "Preheat oven to 450°F.",
      "Mix flour, baking powder, and salt.",
      "Cut in butter until mixture resembles coarse crumbs.",
      "Stir in buttermilk until just combined.",
      "Pat dough 3/4 inch thick. Cut with biscuit cutter. Bake 12 minutes."
    ]
  },
  {
    section: "Breads & Muffins",
    title: "Cheddar Bay Biscuits",
    ingredients: [
      "2 cups baking mix (Bisquick)",
      "2/3 cup milk",
      "1/2 cup shredded cheddar cheese",
      "1/4 cup butter, melted",
      "1/2 tsp garlic powder",
      "1/4 tsp dried parsley"
    ],
    instructions: [
      "Preheat oven to 450°F.",
      "Mix baking mix, milk, and cheese until soft dough forms.",
      "Drop by spoonfuls onto baking sheet.",
      "Bake 8-10 minutes until golden.",
      "Mix melted butter with garlic powder and parsley. Brush over warm biscuits."
    ]
  },
  {
    section: "Breads & Muffins",
    title: "Cornbread",
    ingredients: [
      "1 cup cornmeal",
      "1 cup flour",
      "1/4 cup sugar",
      "1 Tbsp baking powder",
      "1/2 tsp salt",
      "1 cup milk",
      "1/4 cup vegetable oil",
      "1 egg"
    ],
    instructions: [
      "Preheat oven to 400°F. Grease 8x8 baking pan.",
      "Combine cornmeal, flour, sugar, baking powder, and salt.",
      "Whisk milk, oil, and egg. Add to dry ingredients.",
      "Pour into prepared pan.",
      "Bake 20-25 minutes until golden and toothpick comes out clean."
    ]
  },
  {
    section: "Breads & Muffins",
    title: "Cranberry Orange Muffins",
    ingredients: [
      "2 cups flour",
      "3/4 cup sugar",
      "2 tsp baking powder",
      "1/2 tsp salt",
      "Zest of 1 orange",
      "3/4 cup orange juice",
      "1/3 cup oil",
      "1 egg",
      "1 cup fresh cranberries, chopped"
    ],
    instructions: [
      "Preheat oven to 400°F. Line muffin tin.",
      "Mix flour, sugar, baking powder, salt, and orange zest.",
      "Whisk orange juice, oil, and egg. Add to dry ingredients.",
      "Fold in cranberries.",
      "Fill muffin cups 2/3 full. Bake 18-20 minutes."
    ]
  },
  {
    section: "Breads & Muffins",
    title: "Irish Soda Bread",
    ingredients: [
      "4 cups flour",
      "1/4 cup sugar",
      "1 tsp salt",
      "1 tsp baking soda",
      "4 Tbsp butter, cold and cubed",
      "1 cup raisins",
      "1 3/4 cups buttermilk",
      "1 egg"
    ],
    instructions: [
      "Preheat oven to 375°F.",
      "Mix flour, sugar, salt, and baking soda.",
      "Cut in butter. Stir in raisins.",
      "Whisk buttermilk and egg. Add to flour mixture.",
      "Form into round loaf. Cut X on top. Bake 45-50 minutes."
    ]
  },
  {
    section: "Breads & Muffins",
    title: "Zucchini Bread",
    ingredients: [
      "2 cups grated zucchini",
      "3 eggs",
      "1 cup vegetable oil",
      "2 cups sugar",
      "2 tsp vanilla",
      "3 cups flour",
      "1 tsp baking soda",
      "1/4 tsp baking powder",
      "1 tsp salt",
      "1 Tbsp cinnamon"
    ],
    instructions: [
      "Preheat oven to 350°F. Grease two 9x5 loaf pans.",
      "Beat eggs, oil, sugar, and vanilla. Stir in zucchini.",
      "Combine flour, baking soda, baking powder, salt, and cinnamon.",
      "Add dry ingredients to wet mixture.",
      "Divide between pans. Bake 50-60 minutes."
    ]
  },

  // Main Dishes (21 recipes)
  {
    section: "Main Dishes",
    title: "Baked Salmon with Lemon",
    ingredients: [
      "4 salmon fillets",
      "2 Tbsp olive oil",
      "2 cloves garlic, minced",
      "1 lemon, sliced",
      "Fresh dill",
      "Salt and pepper"
    ],
    instructions: [
      "Preheat oven to 400°F.",
      "Place salmon on baking sheet. Brush with olive oil.",
      "Top with garlic, lemon slices, and dill.",
      "Season with salt and pepper.",
      "Bake 12-15 minutes until fish flakes easily."
    ]
  },
  {
    section: "Main Dishes",
    title: "Beef Stroganoff",
    ingredients: [
      "1 lb beef sirloin, sliced thin",
      "2 Tbsp butter",
      "1 onion, diced",
      "8 oz mushrooms, sliced",
      "2 cloves garlic, minced",
      "1 cup beef broth",
      "1 cup sour cream",
      "2 Tbsp flour",
      "Egg noodles",
      "Salt and pepper"
    ],
    instructions: [
      "Cook egg noodles according to package.",
      "Brown beef in butter. Remove and set aside.",
      "Sauté onion and mushrooms. Add garlic.",
      "Sprinkle with flour. Add broth and bring to simmer.",
      "Return beef to pan. Stir in sour cream. Serve over noodles."
    ]
  },
  {
    section: "Main Dishes",
    title: "Chicken Alfredo",
    ingredients: [
      "1 lb fettuccine",
      "2 chicken breasts, sliced",
      "4 Tbsp butter",
      "2 cups heavy cream",
      "2 cloves garlic, minced",
      "1 1/2 cups Parmesan cheese, grated",
      "Salt, pepper, and parsley"
    ],
    instructions: [
      "Cook fettuccine according to package.",
      "Cook chicken in 2 Tbsp butter until done. Set aside.",
      "Melt remaining butter. Add garlic and cream. Simmer.",
      "Whisk in Parmesan until smooth.",
      "Toss pasta with sauce. Top with chicken and parsley."
    ]
  },
  {
    section: "Main Dishes",
    title: "Chicken Parmesan",
    ingredients: [
      "4 chicken breasts, pounded thin",
      "1 cup flour",
      "2 eggs, beaten",
      "1 cup breadcrumbs",
      "1/2 cup Parmesan cheese",
      "2 cups marinara sauce",
      "1 1/2 cups mozzarella cheese",
      "Olive oil for frying"
    ],
    instructions: [
      "Preheat oven to 375°F.",
      "Dredge chicken in flour, then egg, then breadcrumb-Parmesan mixture.",
      "Fry in olive oil until golden, about 3 minutes per side.",
      "Place in baking dish. Top with marinara and mozzarella.",
      "Bake 20 minutes until cheese is melted and bubbly."
    ]
  },
  {
    section: "Main Dishes",
    title: "Chili Con Carne",
    ingredients: [
      "1 lb ground beef",
      "1 onion, chopped",
      "3 cloves garlic, minced",
      "1 can (28 oz) diced tomatoes",
      "2 cans (15 oz each) kidney beans",
      "1 can (6 oz) tomato paste",
      "2 Tbsp chili powder",
      "1 tsp cumin",
      "Salt and pepper"
    ],
    instructions: [
      "Brown beef with onion in large pot. Drain fat.",
      "Add garlic and cook 1 minute.",
      "Add tomatoes, beans, tomato paste, chili powder, and cumin.",
      "Simmer 30 minutes, stirring occasionally.",
      "Season with salt and pepper."
    ]
  },
  {
    section: "Main Dishes",
    title: "Classic Lasagna",
    ingredients: [
      "12 lasagna noodles",
      "1 lb ground beef",
      "4 cups marinara sauce",
      "15 oz ricotta cheese",
      "2 cups mozzarella cheese, shredded",
      "1/2 cup Parmesan cheese",
      "1 egg",
      "Italian seasoning"
    ],
    instructions: [
      "Preheat oven to 375°F. Cook noodles.",
      "Brown beef and mix with marinara.",
      "Mix ricotta, egg, 1 cup mozzarella, and Italian seasoning.",
      "Layer: sauce, noodles, ricotta mixture, mozzarella. Repeat.",
      "Top with Parmesan. Bake covered 25 min, uncovered 25 min."
    ]
  },
  {
    section: "Main Dishes",
    title: "Classic Meatloaf",
    ingredients: [
      "2 lbs ground beef",
      "1 cup breadcrumbs",
      "1 onion, finely chopped",
      "2 eggs",
      "1/2 cup milk",
      "1/4 cup ketchup",
      "2 Tbsp Worcestershire sauce",
      "Salt and pepper",
      "1/2 cup ketchup for topping"
    ],
    instructions: [
      "Preheat oven to 350°F.",
      "Mix all ingredients except topping ketchup.",
      "Form into loaf in baking pan.",
      "Spread ketchup on top.",
      "Bake 1 hour until internal temp reaches 160°F."
    ]
  },
  {
    section: "Main Dishes",
    title: "Grilled BBQ Chicken",
    ingredients: [
      "4 chicken breasts",
      "1 cup BBQ sauce",
      "2 Tbsp olive oil",
      "1 tsp garlic powder",
      "1 tsp paprika",
      "Salt and pepper"
    ],
    instructions: [
      "Mix olive oil, garlic powder, paprika, salt and pepper.",
      "Coat chicken with seasoning mixture.",
      "Grill over medium heat 6-7 minutes per side.",
      "Brush with BBQ sauce during last few minutes.",
      "Cook until internal temp reaches 165°F."
    ]
  },
  {
    section: "Main Dishes",
    title: "Honey Garlic Pork Chops",
    ingredients: [
      "4 pork chops",
      "1/4 cup honey",
      "3 Tbsp soy sauce",
      "4 cloves garlic, minced",
      "1 Tbsp olive oil",
      "Salt and pepper"
    ],
    instructions: [
      "Season pork chops with salt and pepper.",
      "Heat oil in skillet. Sear chops 4 minutes per side.",
      "Mix honey, soy sauce, and garlic.",
      "Pour sauce over chops. Simmer 2-3 minutes.",
      "Serve with sauce spooned over top."
    ]
  },
  {
    section: "Main Dishes",
    title: "Lemon Herb Roasted Chicken",
    ingredients: [
      "1 whole chicken (4-5 lbs)",
      "2 lemons, halved",
      "4 cloves garlic",
      "Fresh rosemary and thyme",
      "4 Tbsp butter, softened",
      "Salt and pepper"
    ],
    instructions: [
      "Preheat oven to 425°F.",
      "Rub chicken with butter, salt, and pepper.",
      "Stuff cavity with lemons, garlic, and herbs.",
      "Roast 1.5 hours until internal temp reaches 165°F.",
      "Let rest 10 minutes before carving."
    ]
  },
  {
    section: "Main Dishes",
    title: "Mushroom Risotto",
    ingredients: [
      "2 cups Arborio rice",
      "6 cups chicken broth, warm",
      "8 oz mushrooms, sliced",
      "1 onion, finely chopped",
      "1/2 cup white wine",
      "1/2 cup Parmesan cheese",
      "3 Tbsp butter",
      "2 Tbsp olive oil"
    ],
    instructions: [
      "Sauté mushrooms in olive oil. Set aside.",
      "Sauté onion in butter until soft. Add rice and stir.",
      "Add wine and stir until absorbed.",
      "Add broth 1/2 cup at a time, stirring until absorbed.",
      "Stir in mushrooms and Parmesan. Serve immediately."
    ]
  },
  {
    section: "Main Dishes",
    title: "Pad Thai",
    ingredients: [
      "8 oz rice noodles",
      "2 chicken breasts, sliced",
      "2 eggs",
      "3 Tbsp fish sauce",
      "2 Tbsp tamarind paste",
      "2 Tbsp sugar",
      "1/4 cup peanuts, chopped",
      "Bean sprouts",
      "Green onions",
      "Lime wedges"
    ],
    instructions: [
      "Soak noodles in warm water 30 minutes. Drain.",
      "Mix fish sauce, tamarind, and sugar.",
      "Stir-fry chicken until cooked. Push to side.",
      "Scramble eggs in pan. Add noodles and sauce.",
      "Toss everything. Serve with peanuts, sprouts, green onions, and lime."
    ]
  },
  {
    section: "Main Dishes",
    title: "Pan-Seared Steak",
    ingredients: [
      "2 ribeye steaks (1 inch thick)",
      "2 Tbsp olive oil",
      "2 Tbsp butter",
      "2 cloves garlic",
      "Fresh thyme",
      "Salt and pepper"
    ],
    instructions: [
      "Let steaks come to room temperature. Season generously.",
      "Heat oil in cast iron pan until smoking.",
      "Sear steaks 3-4 minutes per side.",
      "Add butter, garlic, and thyme. Baste steaks.",
      "Let rest 5 minutes before serving."
    ]
  },
  {
    section: "Main Dishes",
    title: "Pork Tenderloin with Apples",
    ingredients: [
      "1 pork tenderloin (1.5 lbs)",
      "2 apples, sliced",
      "1 onion, sliced",
      "2 Tbsp butter",
      "1/2 cup apple cider",
      "1 tsp dried sage",
      "Salt and pepper"
    ],
    instructions: [
      "Preheat oven to 375°F.",
      "Season pork with salt, pepper, and sage.",
      "Sear pork in butter until browned. Remove.",
      "Sauté apples and onion. Add cider. Return pork to pan.",
      "Roast 25-30 minutes until internal temp reaches 145°F."
    ]
  },
  {
    section: "Main Dishes",
    title: "Shepherd's Pie",
    ingredients: [
      "1 lb ground beef or lamb",
      "1 onion, chopped",
      "2 carrots, diced",
      "1 cup peas",
      "2 Tbsp tomato paste",
      "1 cup beef broth",
      "4 cups mashed potatoes",
      "1 cup shredded cheddar"
    ],
    instructions: [
      "Preheat oven to 400°F.",
      "Brown meat with onion. Add carrots, peas, tomato paste, and broth.",
      "Simmer 10 minutes. Transfer to baking dish.",
      "Spread mashed potatoes on top. Sprinkle with cheese.",
      "Bake 25 minutes until golden."
    ]
  },
  {
    section: "Main Dishes",
    title: "Shrimp Scampi",
    ingredients: [
      "1 lb large shrimp, peeled",
      "8 oz linguine",
      "4 Tbsp butter",
      "4 cloves garlic, minced",
      "1/4 cup white wine",
      "Juice of 1 lemon",
      "Red pepper flakes",
      "Fresh parsley"
    ],
    instructions: [
      "Cook linguine according to package.",
      "Melt butter in large skillet. Add garlic and pepper flakes.",
      "Add shrimp and cook until pink, about 3 minutes.",
      "Add wine and lemon juice. Simmer 2 minutes.",
      "Toss with pasta and parsley."
    ]
  },
  {
    section: "Main Dishes",
    title: "Stuffed Bell Peppers",
    ingredients: [
      "6 bell peppers, tops cut off",
      "1 lb ground beef",
      "1 cup cooked rice",
      "1 can (14 oz) diced tomatoes",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "1 cup shredded cheese",
      "Italian seasoning"
    ],
    instructions: [
      "Preheat oven to 375°F.",
      "Brown beef with onion and garlic.",
      "Mix in rice, tomatoes, and seasonings.",
      "Stuff peppers with mixture. Place in baking dish.",
      "Top with cheese. Bake 30-35 minutes."
    ]
  },
  {
    section: "Main Dishes",
    title: "Swedish Meatballs",
    ingredients: [
      "1 lb ground beef",
      "1/2 lb ground pork",
      "1/2 cup breadcrumbs",
      "1 egg",
      "1/4 cup milk",
      "2 Tbsp butter",
      "2 Tbsp flour",
      "2 cups beef broth",
      "1/2 cup sour cream",
      "Allspice and nutmeg"
    ],
    instructions: [
      "Mix meats, breadcrumbs, egg, milk, and spices. Form into balls.",
      "Brown meatballs in butter. Remove and set aside.",
      "Make gravy: whisk flour into drippings. Add broth.",
      "Simmer until thickened. Stir in sour cream.",
      "Return meatballs to sauce and heat through."
    ]
  },
  {
    section: "Main Dishes",
    title: "Teriyaki Chicken",
    ingredients: [
      "4 chicken thighs",
      "1/2 cup soy sauce",
      "1/4 cup mirin",
      "1/4 cup sake or white wine",
      "3 Tbsp sugar",
      "2 cloves garlic, minced",
      "1 tsp ginger, grated",
      "Sesame seeds",
      "Green onions"
    ],
    instructions: [
      "Mix soy sauce, mirin, sake, sugar, garlic, and ginger.",
      "Marinate chicken 30 minutes.",
      "Pan-fry chicken skin-side down until crispy.",
      "Flip and add marinade. Simmer until chicken is cooked.",
      "Garnish with sesame seeds and green onions."
    ]
  },
  {
    section: "Main Dishes",
    title: "Turkey Meatballs",
    ingredients: [
      "1 lb ground turkey",
      "1/2 cup breadcrumbs",
      "1/4 cup Parmesan cheese",
      "1 egg",
      "2 cloves garlic, minced",
      "1 tsp Italian seasoning",
      "Salt and pepper",
      "Marinara sauce for serving"
    ],
    instructions: [
      "Preheat oven to 400°F.",
      "Mix all ingredients except marinara.",
      "Form into 1.5-inch balls. Place on baking sheet.",
      "Bake 20 minutes until golden and cooked through.",
      "Serve with marinara sauce."
    ]
  },
  {
    section: "Main Dishes",
    title: "Vegetable Stir-Fry",
    ingredients: [
      "2 cups broccoli florets",
      "1 bell pepper, sliced",
      "1 cup snap peas",
      "1 carrot, sliced",
      "3 Tbsp soy sauce",
      "2 Tbsp oyster sauce",
      "1 Tbsp sesame oil",
      "2 cloves garlic, minced",
      "1 tsp ginger, grated"
    ],
    instructions: [
      "Heat sesame oil in wok or large skillet.",
      "Add garlic and ginger. Stir-fry 30 seconds.",
      "Add harder vegetables first (broccoli, carrots). Cook 3 minutes.",
      "Add remaining vegetables. Cook 2 minutes.",
      "Add soy sauce and oyster sauce. Toss and serve."
    ]
  },

  // Side Dishes (5 recipes)
  {
    section: "Side Dishes",
    title: "Garlic Mashed Potatoes",
    ingredients: [
      "3 lbs potatoes, peeled and cubed",
      "4 cloves garlic, minced",
      "1/2 cup butter",
      "1/2 cup milk or cream",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Boil potatoes until tender, about 15 minutes. Drain.",
      "Melt butter and sauté garlic 1 minute.",
      "Mash potatoes with garlic butter.",
      "Add milk gradually while mashing.",
      "Season with salt and pepper."
    ]
  },
  {
    section: "Side Dishes",
    title: "Green Bean Casserole",
    ingredients: [
      "2 lbs green beans, trimmed",
      "1 can cream of mushroom soup",
      "1 cup milk",
      "1 cup shredded cheddar cheese",
      "1 can French fried onions",
      "Salt and pepper"
    ],
    instructions: [
      "Preheat oven to 350°F.",
      "Blanch green beans 5 minutes. Drain.",
      "Mix soup, milk, cheese, and half the onions.",
      "Combine with green beans in baking dish.",
      "Bake 25 minutes. Top with remaining onions and bake 5 more minutes."
    ]
  },
  {
    section: "Side Dishes",
    title: "Roasted Brussels Sprouts",
    ingredients: [
      "1.5 lbs Brussels sprouts, halved",
      "3 Tbsp olive oil",
      "3 cloves garlic, minced",
      "1/4 cup Parmesan cheese",
      "Salt and pepper",
      "Balsamic glaze (optional)"
    ],
    instructions: [
      "Preheat oven to 400°F.",
      "Toss Brussels sprouts with oil, garlic, salt, and pepper.",
      "Spread on baking sheet cut-side down.",
      "Roast 25-30 minutes until crispy.",
      "Sprinkle with Parmesan and drizzle with balsamic if desired."
    ]
  },
  {
    section: "Side Dishes",
    title: "Scalloped Potatoes",
    ingredients: [
      "4 large potatoes, thinly sliced",
      "2 cups heavy cream",
      "2 cups shredded cheddar cheese",
      "2 cloves garlic, minced",
      "2 Tbsp butter",
      "Salt and pepper",
      "Fresh thyme"
    ],
    instructions: [
      "Preheat oven to 375°F. Grease baking dish.",
      "Layer potatoes in dish. Season each layer.",
      "Heat cream with garlic, butter, and thyme.",
      "Pour cream over potatoes. Top with cheese.",
      "Cover with foil. Bake 45 min covered, 15 min uncovered."
    ]
  },
  {
    section: "Side Dishes",
    title: "Sweet Potato Casserole",
    ingredients: [
      "4 cups mashed sweet potatoes",
      "1/2 cup sugar",
      "1/4 cup butter, melted",
      "2 eggs",
      "1 tsp vanilla",
      "1 cup brown sugar",
      "1/2 cup flour",
      "1/3 cup butter",
      "1 cup pecans, chopped"
    ],
    instructions: [
      "Preheat oven to 350°F.",
      "Mix sweet potatoes, sugar, 1/4 cup butter, eggs, and vanilla.",
      "Spread in baking dish.",
      "Mix brown sugar, flour, 1/3 cup butter, and pecans. Sprinkle on top.",
      "Bake 25-30 minutes until golden."
    ]
  },

  // Desserts & Baked Goods (68 recipes)
  {
    section: "Desserts & Baked Goods",
    title: "Apple Crisp",
    ingredients: [
      "6 apples, peeled and sliced",
      "1 cup oats",
      "1 cup brown sugar",
      "3/4 cup flour",
      "1/2 cup butter, cold",
      "1 tsp cinnamon"
    ],
    instructions: [
      "Preheat oven to 350°F.",
      "Place apples in baking dish.",
      "Mix oats, brown sugar, flour, and cinnamon.",
      "Cut in butter until crumbly. Sprinkle over apples.",
      "Bake 45 minutes until golden and bubbly."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Apple Pie",
    ingredients: [
      "2 pie crusts",
      "6 cups sliced apples",
      "3/4 cup sugar",
      "2 Tbsp flour",
      "1 tsp cinnamon",
      "1/4 tsp nutmeg",
      "2 Tbsp butter"
    ],
    instructions: [
      "Preheat oven to 425°F.",
      "Line pie dish with bottom crust.",
      "Mix apples, sugar, flour, cinnamon, and nutmeg. Pour into crust.",
      "Dot with butter. Top with second crust. Cut vents.",
      "Bake 45-50 minutes until golden."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Banana Cream Pie",
    ingredients: [
      "1 baked pie crust",
      "3/4 cup sugar",
      "1/3 cup flour",
      "2 cups milk",
      "3 egg yolks",
      "2 Tbsp butter",
      "1 tsp vanilla",
      "3 bananas, sliced",
      "Whipped cream"
    ],
    instructions: [
      "Mix sugar and flour in saucepan. Whisk in milk and egg yolks.",
      "Cook over medium heat, stirring constantly until thick.",
      "Remove from heat. Stir in butter and vanilla.",
      "Layer bananas in pie crust. Pour pudding over.",
      "Chill 3 hours. Top with whipped cream before serving."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Brownies",
    ingredients: [
      "1/2 cup butter",
      "1 cup sugar",
      "2 eggs",
      "1 tsp vanilla",
      "1/3 cup cocoa powder",
      "1/2 cup flour",
      "1/4 tsp salt",
      "1/4 tsp baking powder"
    ],
    instructions: [
      "Preheat oven to 350°F. Grease 8x8 pan.",
      "Melt butter. Stir in sugar, eggs, and vanilla.",
      "Mix in cocoa, flour, salt, and baking powder.",
      "Spread in pan.",
      "Bake 20-25 minutes. Don't overbake!"
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Butter Tarts",
    ingredients: [
      "12 tart shells",
      "1/2 cup butter",
      "1 cup brown sugar",
      "2 eggs",
      "1 tsp vanilla",
      "1/2 cup raisins or pecans (optional)"
    ],
    instructions: [
      "Preheat oven to 375°F.",
      "Cream butter and brown sugar. Beat in eggs and vanilla.",
      "Add raisins or pecans if using.",
      "Fill tart shells 2/3 full.",
      "Bake 15-18 minutes until set."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Carrot Cake",
    ingredients: [
      "2 cups flour",
      "2 cups sugar",
      "1 tsp baking soda",
      "1 tsp cinnamon",
      "1/2 tsp salt",
      "3 eggs",
      "1 cup oil",
      "2 cups grated carrots",
      "1/2 cup crushed pineapple",
      "Cream cheese frosting"
    ],
    instructions: [
      "Preheat oven to 350°F. Grease 9x13 pan.",
      "Mix flour, sugar, baking soda, cinnamon, and salt.",
      "Beat eggs and oil. Add to dry ingredients.",
      "Fold in carrots and pineapple.",
      "Bake 35-40 minutes. Cool and frost."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Cherry Cheesecake",
    ingredients: [
      "1.5 cups graham cracker crumbs",
      "1/4 cup sugar",
      "1/3 cup butter, melted",
      "24 oz cream cheese, softened",
      "1 cup sugar",
      "3 eggs",
      "1 tsp vanilla",
      "1 can cherry pie filling"
    ],
    instructions: [
      "Preheat oven to 325°F.",
      "Mix crumbs, 1/4 cup sugar, and butter. Press into springform pan.",
      "Beat cream cheese and 1 cup sugar. Add eggs and vanilla.",
      "Pour over crust. Bake 50 minutes.",
      "Cool completely. Top with cherry filling."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Chocolate Cake",
    ingredients: [
      "2 cups flour",
      "2 cups sugar",
      "3/4 cup cocoa powder",
      "2 tsp baking soda",
      "1 tsp salt",
      "2 eggs",
      "1 cup buttermilk",
      "1 cup coffee, hot",
      "1/2 cup oil",
      "1 tsp vanilla"
    ],
    instructions: [
      "Preheat oven to 350°F. Grease two 9-inch pans.",
      "Mix flour, sugar, cocoa, baking soda, and salt.",
      "Add eggs, buttermilk, coffee, oil, and vanilla. Beat well.",
      "Divide between pans.",
      "Bake 30-35 minutes. Cool and frost."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Chocolate Chip Cookies",
    ingredients: [
      "2 1/4 cups flour",
      "1 tsp baking soda",
      "1 tsp salt",
      "1 cup butter, softened",
      "3/4 cup sugar",
      "3/4 cup brown sugar",
      "2 eggs",
      "2 tsp vanilla",
      "2 cups chocolate chips"
    ],
    instructions: [
      "Preheat oven to 375°F.",
      "Mix flour, baking soda, and salt.",
      "Cream butter and sugars. Beat in eggs and vanilla.",
      "Add flour mixture. Fold in chocolate chips.",
      "Drop by spoonfuls on baking sheet. Bake 9-11 minutes."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Chocolate Cupcakes",
    ingredients: [
      "1 3/4 cups flour",
      "2 cups sugar",
      "3/4 cup cocoa powder",
      "1 1/2 tsp baking soda",
      "1 tsp salt",
      "2 eggs",
      "1 cup buttermilk",
      "1 cup coffee",
      "1/2 cup oil"
    ],
    instructions: [
      "Preheat oven to 350°F. Line muffin tin.",
      "Mix flour, sugar, cocoa, baking soda, and salt.",
      "Add eggs, buttermilk, coffee, and oil. Beat well.",
      "Fill cups 2/3 full.",
      "Bake 18-20 minutes."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Chocolate Mousse",
    ingredients: [
      "8 oz dark chocolate, chopped",
      "3 Tbsp butter",
      "3 eggs, separated",
      "1/4 cup sugar",
      "1 cup heavy cream",
      "1 tsp vanilla"
    ],
    instructions: [
      "Melt chocolate and butter. Cool slightly.",
      "Whisk in egg yolks one at a time.",
      "Beat egg whites with sugar until stiff peaks.",
      "Whip cream with vanilla.",
      "Fold egg whites into chocolate, then fold in cream. Chill 2 hours."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Cinnamon Rolls",
    ingredients: [
      "4 cups flour",
      "1/4 cup sugar",
      "1 packet yeast",
      "1 cup milk, warm",
      "1/4 cup butter, melted",
      "1 egg",
      "1/2 cup brown sugar",
      "2 Tbsp cinnamon",
      "Cream cheese icing"
    ],
    instructions: [
      "Mix yeast with warm milk. Let sit 5 minutes.",
      "Add flour, sugar, butter, and egg. Knead until smooth.",
      "Let rise 1 hour. Roll into rectangle.",
      "Spread with butter, brown sugar, and cinnamon. Roll up and slice.",
      "Let rise 30 min. Bake at 350°F for 25 min. Ice while warm."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Coconut Cream Pie",
    ingredients: [
      "1 baked pie crust",
      "2/3 cup sugar",
      "1/4 cup cornstarch",
      "2 cups milk",
      "3 egg yolks",
      "2 Tbsp butter",
      "1 tsp vanilla",
      "1 cup shredded coconut",
      "Whipped cream"
    ],
    instructions: [
      "Mix sugar and cornstarch. Whisk in milk and egg yolks.",
      "Cook over medium heat until thick.",
      "Remove from heat. Stir in butter, vanilla, and coconut.",
      "Pour into pie crust. Chill 3 hours.",
      "Top with whipped cream and toasted coconut."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Coffee Cake",
    ingredients: [
      "2 cups flour",
      "1 cup sugar",
      "2 tsp baking powder",
      "1/2 tsp salt",
      "1/2 cup butter, softened",
      "2 eggs",
      "1 cup milk",
      "1/2 cup brown sugar",
      "2 tsp cinnamon",
      "1/4 cup butter, melted"
    ],
    instructions: [
      "Preheat oven to 350°F. Grease 9x13 pan.",
      "Mix flour, sugar, baking powder, and salt.",
      "Beat in butter, eggs, and milk.",
      "Pour half into pan. Mix brown sugar, cinnamon, and melted butter.",
      "Sprinkle half on batter. Add rest of batter and topping. Bake 30 min."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Crème Brûlée",
    ingredients: [
      "2 cups heavy cream",
      "1 vanilla bean (or 1 tsp extract)",
      "5 egg yolks",
      "1/2 cup sugar",
      "Sugar for topping"
    ],
    instructions: [
      "Preheat oven to 325°F.",
      "Heat cream with vanilla bean until steaming.",
      "Whisk egg yolks with sugar. Slowly add hot cream.",
      "Pour into ramekins. Bake in water bath 40 minutes.",
      "Chill 4 hours. Top with sugar and torch until caramelized."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Date Squares",
    ingredients: [
      "2 cups chopped dates",
      "1/2 cup water",
      "1/4 cup sugar",
      "1 1/2 cups oats",
      "1 1/2 cups flour",
      "1 cup brown sugar",
      "1 cup butter",
      "1/2 tsp baking soda"
    ],
    instructions: [
      "Preheat oven to 350°F.",
      "Cook dates, water, and sugar until thick. Cool.",
      "Mix oats, flour, brown sugar, butter, and baking soda.",
      "Press half into 9x9 pan. Spread date mixture. Top with rest.",
      "Bake 30 minutes."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Fudge",
    ingredients: [
      "3 cups chocolate chips",
      "1 can (14 oz) sweetened condensed milk",
      "1/4 cup butter",
      "1 tsp vanilla",
      "Pinch of salt"
    ],
    instructions: [
      "Line 8x8 pan with parchment paper.",
      "Melt chocolate chips, condensed milk, and butter together.",
      "Stir in vanilla and salt.",
      "Pour into pan and spread evenly.",
      "Refrigerate 2 hours until firm. Cut into squares."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "German Chocolate Cake",
    ingredients: [
      "2 cups flour",
      "2 cups sugar",
      "3/4 cup cocoa",
      "2 tsp baking soda",
      "1 tsp salt",
      "2 eggs",
      "1 cup buttermilk",
      "1 cup coffee",
      "1/2 cup oil",
      "Coconut pecan frosting"
    ],
    instructions: [
      "Preheat oven to 350°F. Grease pans.",
      "Mix dry ingredients.",
      "Add wet ingredients and beat well.",
      "Bake 30-35 minutes.",
      "Cool and frost with coconut pecan frosting."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Gingerbread Cookies",
    ingredients: [
      "3 cups flour",
      "1 tsp baking soda",
      "2 tsp ginger",
      "1 tsp cinnamon",
      "1/2 tsp cloves",
      "1/2 cup butter",
      "3/4 cup brown sugar",
      "1/2 cup molasses",
      "1 egg"
    ],
    instructions: [
      "Mix flour, baking soda, and spices.",
      "Cream butter and sugar. Beat in molasses and egg.",
      "Add flour mixture. Chill dough 2 hours.",
      "Roll out and cut shapes.",
      "Bake at 350°F for 8-10 minutes."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Key Lime Pie",
    ingredients: [
      "1 graham cracker crust",
      "4 egg yolks",
      "1 can (14 oz) sweetened condensed milk",
      "1/2 cup key lime juice",
      "1 Tbsp lime zest",
      "Whipped cream"
    ],
    instructions: [
      "Preheat oven to 350°F.",
      "Whisk egg yolks with condensed milk.",
      "Add lime juice and zest.",
      "Pour into crust.",
      "Bake 15 minutes. Chill and top with whipped cream."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Lemon Bars",
    ingredients: [
      "1 cup butter, softened",
      "2 cups flour",
      "1/2 cup powdered sugar",
      "4 eggs",
      "2 cups sugar",
      "1/4 cup flour",
      "Juice of 3 lemons",
      "Powdered sugar for dusting"
    ],
    instructions: [
      "Preheat oven to 350°F.",
      "Mix butter, 2 cups flour, and 1/2 cup powdered sugar. Press into 9x13 pan.",
      "Bake 20 minutes.",
      "Beat eggs, sugar, 1/4 cup flour, and lemon juice. Pour over crust.",
      "Bake 25 minutes. Cool and dust with powdered sugar."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Lemon Meringue Pie",
    ingredients: [
      "1 baked pie crust",
      "1 1/2 cups sugar",
      "1/3 cup cornstarch",
      "1 1/2 cups water",
      "3 egg yolks",
      "1/3 cup lemon juice",
      "3 egg whites",
      "1/4 cup sugar"
    ],
    instructions: [
      "Mix 1 1/2 cups sugar and cornstarch. Add water and egg yolks.",
      "Cook until thick. Stir in lemon juice. Pour into crust.",
      "Beat egg whites until foamy. Gradually add 1/4 cup sugar.",
      "Spread meringue over filling, sealing edges.",
      "Bake at 350°F for 10 minutes until golden."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Macarons",
    ingredients: [
      "1 3/4 cups powdered sugar",
      "1 cup almond flour",
      "3 egg whites",
      "1/4 cup granulated sugar",
      "Food coloring",
      "Buttercream or ganache filling"
    ],
    instructions: [
      "Sift powdered sugar and almond flour together.",
      "Beat egg whites to soft peaks. Gradually add sugar.",
      "Fold in dry ingredients and food coloring.",
      "Pipe circles on parchment. Let sit 30 minutes.",
      "Bake at 300°F for 15 minutes. Cool and fill."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Maple Walnut Pie",
    ingredients: [
      "1 unbaked pie crust",
      "3 eggs",
      "1 cup maple syrup",
      "1/2 cup brown sugar",
      "3 Tbsp butter, melted",
      "1 tsp vanilla",
      "1 1/2 cups walnuts"
    ],
    instructions: [
      "Preheat oven to 350°F.",
      "Beat eggs. Mix in maple syrup, brown sugar, butter, and vanilla.",
      "Stir in walnuts.",
      "Pour into pie crust.",
      "Bake 45-50 minutes until set."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Nanaimo Bars",
    ingredients: [
      "1/2 cup butter",
      "1/4 cup sugar",
      "1/3 cup cocoa",
      "1 egg",
      "2 cups graham crumbs",
      "1 cup coconut",
      "1/4 cup butter",
      "2 cups powdered sugar",
      "2 Tbsp custard powder",
      "4 oz chocolate"
    ],
    instructions: [
      "Melt butter, sugar, cocoa. Add egg. Stir in crumbs and coconut. Press in pan.",
      "Beat butter, powdered sugar, and custard powder. Spread over base.",
      "Melt chocolate and spread on top.",
      "Refrigerate until firm.",
      "Cut into squares."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Oatmeal Cookies",
    ingredients: [
      "1 cup butter, softened",
      "1 cup brown sugar",
      "1/2 cup sugar",
      "2 eggs",
      "1 tsp vanilla",
      "1 1/2 cups flour",
      "1 tsp baking soda",
      "1 tsp cinnamon",
      "3 cups oats"
    ],
    instructions: [
      "Preheat oven to 350°F.",
      "Cream butter and sugars. Beat in eggs and vanilla.",
      "Mix in flour, baking soda, and cinnamon.",
      "Stir in oats.",
      "Drop by spoonfuls. Bake 10-12 minutes."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Oatmeal Raisin Cookies",
    ingredients: [
      "1 cup butter, softened",
      "1 cup brown sugar",
      "1/2 cup sugar",
      "2 eggs",
      "1 tsp vanilla",
      "1 1/2 cups flour",
      "1 tsp baking soda",
      "1 tsp cinnamon",
      "3 cups oats",
      "1 cup raisins"
    ],
    instructions: [
      "Preheat oven to 350°F.",
      "Cream butter and sugars. Beat in eggs and vanilla.",
      "Mix in flour, baking soda, and cinnamon.",
      "Stir in oats and raisins.",
      "Drop by spoonfuls. Bake 10-12 minutes."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Peanut Butter Cookies",
    ingredients: [
      "1 cup peanut butter",
      "1 cup sugar",
      "1 egg",
      "1 tsp vanilla"
    ],
    instructions: [
      "Preheat oven to 350°F.",
      "Mix all ingredients together.",
      "Roll into balls and place on baking sheet.",
      "Press with fork in crisscross pattern.",
      "Bake 10-12 minutes."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Pecan Pie",
    ingredients: [
      "1 unbaked pie crust",
      "3 eggs",
      "1 cup corn syrup",
      "1 cup sugar",
      "2 Tbsp butter, melted",
      "1 tsp vanilla",
      "1 1/2 cups pecans"
    ],
    instructions: [
      "Preheat oven to 350°F.",
      "Beat eggs. Mix in corn syrup, sugar, butter, and vanilla.",
      "Stir in pecans.",
      "Pour into pie crust.",
      "Bake 50-60 minutes until set."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Pumpkin Pie",
    ingredients: [
      "1 unbaked pie crust",
      "1 can (15 oz) pumpkin puree",
      "3/4 cup sugar",
      "1 tsp cinnamon",
      "1/2 tsp ginger",
      "1/4 tsp cloves",
      "2 eggs",
      "1 can (12 oz) evaporated milk"
    ],
    instructions: [
      "Preheat oven to 425°F.",
      "Mix pumpkin, sugar, and spices.",
      "Beat in eggs. Gradually stir in evaporated milk.",
      "Pour into pie crust.",
      "Bake 15 min at 425°F, then 40 min at 350°F."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Red Velvet Cake",
    ingredients: [
      "2 1/2 cups flour",
      "1 1/2 cups sugar",
      "1 tsp baking soda",
      "1 tsp salt",
      "1 Tbsp cocoa powder",
      "1 1/2 cups oil",
      "1 cup buttermilk",
      "2 eggs",
      "2 Tbsp red food coloring",
      "1 tsp vanilla",
      "Cream cheese frosting"
    ],
    instructions: [
      "Preheat oven to 350°F. Grease two 9-inch pans.",
      "Mix flour, sugar, baking soda, salt, and cocoa.",
      "Whisk oil, buttermilk, eggs, food coloring, and vanilla.",
      "Combine wet and dry ingredients.",
      "Bake 25-30 minutes. Cool and frost."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Rice Krispie Squares",
    ingredients: [
      "3 Tbsp butter",
      "4 cups mini marshmallows",
      "6 cups Rice Krispies cereal"
    ],
    instructions: [
      "Melt butter in large pot.",
      "Add marshmallows and stir until melted.",
      "Remove from heat. Stir in cereal.",
      "Press into greased 9x13 pan.",
      "Cool and cut into squares."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Shortbread Cookies",
    ingredients: [
      "1 cup butter, softened",
      "1/2 cup powdered sugar",
      "2 cups flour",
      "1/4 tsp salt"
    ],
    instructions: [
      "Preheat oven to 325°F.",
      "Cream butter and powdered sugar.",
      "Mix in flour and salt.",
      "Roll out and cut into shapes.",
      "Bake 15-18 minutes until lightly golden."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Snickerdoodles",
    ingredients: [
      "1 cup butter, softened",
      "1 1/2 cups sugar",
      "2 eggs",
      "2 3/4 cups flour",
      "2 tsp cream of tartar",
      "1 tsp baking soda",
      "1/4 tsp salt",
      "3 Tbsp sugar",
      "3 tsp cinnamon"
    ],
    instructions: [
      "Preheat oven to 350°F.",
      "Cream butter and 1 1/2 cups sugar. Beat in eggs.",
      "Mix in flour, cream of tartar, baking soda, and salt.",
      "Mix 3 Tbsp sugar and cinnamon. Roll dough into balls and coat.",
      "Bake 10 minutes."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Strawberry Shortcake",
    ingredients: [
      "2 cups flour",
      "1/4 cup sugar",
      "1 Tbsp baking powder",
      "1/2 tsp salt",
      "1/2 cup butter, cold",
      "2/3 cup milk",
      "4 cups strawberries, sliced",
      "1/4 cup sugar",
      "Whipped cream"
    ],
    instructions: [
      "Preheat oven to 450°F.",
      "Mix flour, 1/4 cup sugar, baking powder, and salt. Cut in butter.",
      "Stir in milk. Drop onto baking sheet. Bake 12 minutes.",
      "Mix strawberries with 1/4 cup sugar.",
      "Split shortcakes. Fill with strawberries and whipped cream."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Sugar Cookies",
    ingredients: [
      "2 3/4 cups flour",
      "1 tsp baking soda",
      "1/2 tsp baking powder",
      "1 cup butter, softened",
      "1 1/2 cups sugar",
      "1 egg",
      "1 tsp vanilla"
    ],
    instructions: [
      "Preheat oven to 375°F.",
      "Mix flour, baking soda, and baking powder.",
      "Cream butter and sugar. Beat in egg and vanilla.",
      "Add flour mixture.",
      "Roll into balls. Bake 8-10 minutes."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Tiramisu",
    ingredients: [
      "6 egg yolks",
      "3/4 cup sugar",
      "1 1/3 cups mascarpone cheese",
      "2 cups heavy cream",
      "2 cups strong coffee, cooled",
      "3 Tbsp coffee liqueur",
      "24 ladyfinger cookies",
      "Cocoa powder for dusting"
    ],
    instructions: [
      "Whisk egg yolks and sugar over double boiler until thick.",
      "Remove from heat. Whisk in mascarpone.",
      "Whip cream to stiff peaks. Fold into mascarpone mixture.",
      "Mix coffee and liqueur. Dip ladyfingers and layer in dish.",
      "Alternate layers of ladyfingers and cream. Dust with cocoa. Chill 4 hours."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Toffee",
    ingredients: [
      "1 cup butter",
      "1 cup sugar",
      "2 Tbsp water",
      "1/4 tsp salt",
      "1 cup chocolate chips",
      "1/2 cup chopped almonds"
    ],
    instructions: [
      "Line baking sheet with parchment.",
      "Cook butter, sugar, water, and salt to 300°F (hard crack stage).",
      "Pour onto prepared sheet.",
      "Immediately sprinkle chocolate chips. Spread when melted.",
      "Sprinkle with almonds. Cool and break into pieces."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Vanilla Cake",
    ingredients: [
      "2 3/4 cups flour",
      "2 cups sugar",
      "1 Tbsp baking powder",
      "1 tsp salt",
      "1 cup butter, softened",
      "1 cup milk",
      "2 tsp vanilla",
      "4 eggs"
    ],
    instructions: [
      "Preheat oven to 350°F. Grease two 9-inch pans.",
      "Mix flour, sugar, baking powder, and salt.",
      "Add butter, milk, and vanilla. Beat 2 minutes.",
      "Add eggs and beat 2 more minutes.",
      "Bake 30-35 minutes. Cool and frost."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Vanilla Cupcakes",
    ingredients: [
      "1 1/2 cups flour",
      "1 1/2 tsp baking powder",
      "1/4 tsp salt",
      "1/2 cup butter, softened",
      "1 cup sugar",
      "2 eggs",
      "2 tsp vanilla",
      "1/2 cup milk"
    ],
    instructions: [
      "Preheat oven to 350°F. Line muffin tin.",
      "Mix flour, baking powder, and salt.",
      "Cream butter and sugar. Beat in eggs and vanilla.",
      "Alternately add flour mixture and milk.",
      "Fill cups 2/3 full. Bake 18-20 minutes."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "White Chocolate Macadamia Cookies",
    ingredients: [
      "2 1/4 cups flour",
      "1 tsp baking soda",
      "1 tsp salt",
      "1 cup butter, softened",
      "3/4 cup sugar",
      "3/4 cup brown sugar",
      "2 eggs",
      "2 tsp vanilla",
      "2 cups white chocolate chips",
      "1 cup macadamia nuts, chopped"
    ],
    instructions: [
      "Preheat oven to 375°F.",
      "Mix flour, baking soda, and salt.",
      "Cream butter and sugars. Beat in eggs and vanilla.",
      "Add flour mixture. Fold in white chocolate and macadamias.",
      "Drop by spoonfuls. Bake 9-11 minutes."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Angel Food Cake",
    ingredients: [
      "1 cup cake flour",
      "1 1/2 cups sugar",
      "12 egg whites",
      "1 1/2 tsp cream of tartar",
      "1/4 tsp salt",
      "1 1/2 tsp vanilla"
    ],
    instructions: [
      "Preheat oven to 375°F.",
      "Sift flour with 3/4 cup sugar.",
      "Beat egg whites with cream of tartar and salt until foamy.",
      "Gradually add remaining sugar. Beat until stiff.",
      "Fold in flour and vanilla. Bake in tube pan 35 minutes."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Biscotti",
    ingredients: [
      "2 cups flour",
      "1 1/2 tsp baking powder",
      "3/4 cup sugar",
      "1/2 cup butter, softened",
      "2 eggs",
      "1 tsp vanilla",
      "1 cup almonds, chopped"
    ],
    instructions: [
      "Preheat oven to 350°F.",
      "Mix flour and baking powder.",
      "Cream butter and sugar. Beat in eggs and vanilla.",
      "Add flour mixture and almonds. Form into logs.",
      "Bake 30 min. Slice and bake 10 more minutes per side."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Blondies",
    ingredients: [
      "1/2 cup butter, melted",
      "1 cup brown sugar",
      "1 egg",
      "1 tsp vanilla",
      "1 cup flour",
      "1/4 tsp baking powder",
      "1/8 tsp baking soda",
      "Pinch of salt",
      "1/2 cup white chocolate chips"
    ],
    instructions: [
      "Preheat oven to 350°F. Grease 8x8 pan.",
      "Mix melted butter and brown sugar. Beat in egg and vanilla.",
      "Add flour, baking powder, baking soda, and salt.",
      "Fold in white chocolate chips.",
      "Bake 25 minutes."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Boston Cream Pie",
    ingredients: [
      "1 box yellow cake mix",
      "1 box vanilla pudding mix",
      "2 cups milk",
      "1 cup chocolate chips",
      "1/2 cup heavy cream"
    ],
    instructions: [
      "Bake cake according to package in two 9-inch pans. Cool.",
      "Prepare pudding with milk. Chill.",
      "Heat cream until steaming. Pour over chocolate chips. Stir until smooth.",
      "Place one cake layer on plate. Spread with pudding.",
      "Top with second layer. Pour chocolate ganache over top."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Cannoli",
    ingredients: [
      "12 cannoli shells",
      "2 cups ricotta cheese",
      "1 cup powdered sugar",
      "1 tsp vanilla",
      "1/2 cup mini chocolate chips",
      "Powdered sugar for dusting"
    ],
    instructions: [
      "Beat ricotta until smooth.",
      "Mix in powdered sugar and vanilla.",
      "Fold in chocolate chips.",
      "Pipe filling into cannoli shells.",
      "Dust with powdered sugar before serving."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Chocolate Truffles",
    ingredients: [
      "8 oz dark chocolate, chopped",
      "1/2 cup heavy cream",
      "2 Tbsp butter",
      "Cocoa powder for coating"
    ],
    instructions: [
      "Heat cream until steaming. Pour over chocolate.",
      "Let sit 1 minute, then stir until smooth.",
      "Stir in butter. Chill 2 hours.",
      "Scoop and roll into balls.",
      "Roll in cocoa powder. Store in refrigerator."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Eclairs",
    ingredients: [
      "1 cup water",
      "1/2 cup butter",
      "1 cup flour",
      "4 eggs",
      "2 cups vanilla pudding",
      "1 cup chocolate chips",
      "1/2 cup heavy cream"
    ],
    instructions: [
      "Preheat oven to 400°F.",
      "Boil water and butter. Add flour and stir vigorously.",
      "Beat in eggs one at a time. Pipe onto baking sheet.",
      "Bake 30 minutes. Cool completely.",
      "Fill with pudding. Top with chocolate ganache."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Fruit Tart",
    ingredients: [
      "1 1/2 cups flour",
      "1/2 cup butter",
      "1/4 cup sugar",
      "1 egg yolk",
      "8 oz cream cheese",
      "1/3 cup sugar",
      "1 tsp vanilla",
      "Assorted fresh fruit",
      "1/4 cup apricot jam"
    ],
    instructions: [
      "Make crust: mix flour, butter, 1/4 cup sugar, and egg yolk. Press into tart pan. Bake at 350°F for 15 min.",
      "Beat cream cheese, 1/3 cup sugar, and vanilla. Spread on cooled crust.",
      "Arrange fruit on top.",
      "Heat apricot jam and brush over fruit.",
      "Chill before serving."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Madeleines",
    ingredients: [
      "1/2 cup butter, melted",
      "2 eggs",
      "2/3 cup sugar",
      "1 tsp vanilla",
      "1 cup flour",
      "1 tsp baking powder",
      "Powdered sugar for dusting"
    ],
    instructions: [
      "Preheat oven to 375°F. Grease madeleine pan.",
      "Beat eggs and sugar until thick and pale.",
      "Add vanilla and melted butter.",
      "Fold in flour and baking powder.",
      "Fill molds 3/4 full. Bake 10-12 minutes. Dust with powdered sugar."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Meringue Cookies",
    ingredients: [
      "4 egg whites",
      "1 cup sugar",
      "1 tsp vanilla",
      "Pinch of salt"
    ],
    instructions: [
      "Preheat oven to 200°F. Line baking sheets.",
      "Beat egg whites and salt until foamy.",
      "Gradually add sugar, beating until stiff and glossy.",
      "Beat in vanilla.",
      "Pipe onto sheets. Bake 1.5 hours. Turn off oven and leave inside 1 hour."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Molten Lava Cakes",
    ingredients: [
      "1/2 cup butter",
      "4 oz dark chocolate",
      "2 eggs",
      "2 egg yolks",
      "1/4 cup sugar",
      "2 Tbsp flour",
      "Pinch of salt"
    ],
    instructions: [
      "Preheat oven to 425°F. Grease 4 ramekins.",
      "Melt butter and chocolate together.",
      "Beat eggs, egg yolks, and sugar until thick.",
      "Fold in chocolate mixture, then flour and salt.",
      "Divide among ramekins. Bake 12-14 minutes. Centers should be soft."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Pavlova",
    ingredients: [
      "4 egg whites",
      "1 cup sugar",
      "1 tsp vanilla",
      "1 tsp white vinegar",
      "1 Tbsp cornstarch",
      "1 cup heavy cream",
      "Fresh berries"
    ],
    instructions: [
      "Preheat oven to 300°F.",
      "Beat egg whites until soft peaks. Gradually add sugar.",
      "Beat in vanilla, vinegar, and cornstarch.",
      "Spread into circle on parchment. Bake 1 hour. Turn off oven and cool inside.",
      "Top with whipped cream and berries."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Pound Cake",
    ingredients: [
      "1 cup butter, softened",
      "2 cups sugar",
      "4 eggs",
      "2 tsp vanilla",
      "3 cups flour",
      "1/2 tsp baking powder",
      "1/2 tsp salt",
      "1 cup milk"
    ],
    instructions: [
      "Preheat oven to 325°F. Grease loaf pan.",
      "Cream butter and sugar. Beat in eggs and vanilla.",
      "Mix flour, baking powder, and salt.",
      "Alternately add flour mixture and milk.",
      "Bake 60-70 minutes."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Profiteroles",
    ingredients: [
      "1 cup water",
      "1/2 cup butter",
      "1 cup flour",
      "4 eggs",
      "Vanilla ice cream",
      "Chocolate sauce"
    ],
    instructions: [
      "Preheat oven to 400°F.",
      "Boil water and butter. Add flour and stir vigorously.",
      "Beat in eggs one at a time. Drop onto baking sheet.",
      "Bake 30 minutes. Cool.",
      "Fill with ice cream. Drizzle with chocolate sauce."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Panna Cotta",
    ingredients: [
      "2 cups heavy cream",
      "1/2 cup sugar",
      "1 vanilla bean (or 2 tsp extract)",
      "2 tsp gelatin",
      "3 Tbsp cold water",
      "Berry sauce for serving"
    ],
    instructions: [
      "Sprinkle gelatin over cold water. Let sit 5 minutes.",
      "Heat cream, sugar, and vanilla until steaming.",
      "Remove from heat. Stir in gelatin until dissolved.",
      "Pour into ramekins or molds.",
      "Chill 4 hours. Serve with berry sauce."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Tres Leches Cake",
    ingredients: [
      "1 box white cake mix",
      "1 can (14 oz) sweetened condensed milk",
      "1 can (12 oz) evaporated milk",
      "1 cup heavy cream",
      "Whipped cream",
      "Cinnamon for dusting"
    ],
    instructions: [
      "Bake cake according to package in 9x13 pan. Cool.",
      "Poke holes all over cake with fork.",
      "Mix condensed milk, evaporated milk, and cream. Pour over cake.",
      "Refrigerate overnight.",
      "Top with whipped cream and dust with cinnamon."
    ]
  },
  {
    section: "Desserts & Baked Goods",
    title: "Whoopie Pies",
    ingredients: [
      "2 cups flour",
      "1/2 cup cocoa powder",
      "1 tsp baking soda",
      "1/2 cup butter, softened",
      "1 cup sugar",
      "1 egg",
      "1 cup milk",
      "1 tsp vanilla",
      "Marshmallow cream filling"
    ],
    instructions: [
      "Preheat oven to 350°F.",
      "Mix flour, cocoa, and baking soda.",
      "Cream butter and sugar. Beat in egg.",
      "Alternately add flour mixture and milk with vanilla.",
      "Drop onto baking sheets. Bake 10 minutes. Cool and sandwich with filling."
    ]
  },

  // Sauces & Extras (19 recipes)
  {
    section: "Sauces & Extras",
    title: "Apple Butter",
    ingredients: [
      "6 lbs apples, peeled and sliced",
      "2 cups sugar",
      "2 tsp cinnamon",
      "1/4 tsp cloves",
      "1/4 tsp allspice"
    ],
    instructions: [
      "Cook apples in slow cooker on low 8 hours.",
      "Mash or blend until smooth.",
      "Add sugar and spices.",
      "Cook uncovered on low 2 hours, stirring occasionally.",
      "Store in jars in refrigerator."
    ]
  },
  {
    section: "Sauces & Extras",
    title: "Basil Pesto",
    ingredients: [
      "2 cups fresh basil leaves",
      "1/2 cup Parmesan cheese",
      "1/2 cup pine nuts",
      "3 cloves garlic",
      "1/2 cup olive oil",
      "Salt and pepper"
    ],
    instructions: [
      "Combine basil, Parmesan, pine nuts, and garlic in food processor.",
      "Pulse until finely chopped.",
      "With processor running, slowly add olive oil.",
      "Season with salt and pepper.",
      "Store in refrigerator with thin layer of oil on top."
    ]
  },
  {
    section: "Sauces & Extras",
    title: "Caramel Sauce",
    ingredients: [
      "1 cup sugar",
      "6 Tbsp butter",
      "1/2 cup heavy cream",
      "Pinch of salt"
    ],
    instructions: [
      "Heat sugar in heavy saucepan over medium heat, stirring constantly.",
      "When melted and amber colored, add butter (it will bubble!).",
      "Stir until butter is melted.",
      "Remove from heat and slowly add cream.",
      "Stir in salt. Cool before using."
    ]
  },
  {
    section: "Sauces & Extras",
    title: "Chocolate Ganache",
    ingredients: [
      "8 oz dark chocolate, chopped",
      "1 cup heavy cream"
    ],
    instructions: [
      "Heat cream until steaming (do not boil).",
      "Pour over chopped chocolate.",
      "Let sit 2 minutes.",
      "Stir until smooth and glossy.",
      "Use immediately for glaze or chill for frosting."
    ]
  },
  {
    section: "Sauces & Extras",
    title: "Cranberry Sauce",
    ingredients: [
      "12 oz fresh cranberries",
      "1 cup sugar",
      "1 cup water",
      "Zest of 1 orange (optional)"
    ],
    instructions: [
      "Combine all ingredients in saucepan.",
      "Bring to boil.",
      "Reduce heat and simmer 10-15 minutes until cranberries burst.",
      "Mash slightly if desired.",
      "Chill before serving."
    ]
  },
  {
    section: "Sauces & Extras",
    title: "Cream Cheese Frosting",
    ingredients: [
      "8 oz cream cheese, softened",
      "1/2 cup butter, softened",
      "4 cups powdered sugar",
      "1 tsp vanilla"
    ],
    instructions: [
      "Beat cream cheese and butter until fluffy.",
      "Gradually add powdered sugar.",
      "Beat in vanilla.",
      "Beat until smooth and creamy.",
      "Use immediately or refrigerate."
    ]
  },
  {
    section: "Sauces & Extras",
    title: "Garlic Butter",
    ingredients: [
      "1/2 cup butter, softened",
      "4 cloves garlic, minced",
      "2 Tbsp fresh parsley, chopped",
      "1/4 tsp salt"
    ],
    instructions: [
      "Mix all ingredients together.",
      "Place on plastic wrap and roll into log.",
      "Refrigerate until firm.",
      "Slice and use on bread, vegetables, or meat.",
      "Can be frozen for longer storage."
    ]
  },
  {
    section: "Sauces & Extras",
    title: "Gravy",
    ingredients: [
      "1/4 cup pan drippings (or butter)",
      "1/4 cup flour",
      "2 cups broth (chicken or beef)",
      "Salt and pepper"
    ],
    instructions: [
      "Heat drippings in pan over medium heat.",
      "Whisk in flour and cook 1-2 minutes.",
      "Gradually whisk in broth.",
      "Simmer, stirring constantly, until thickened.",
      "Season with salt and pepper."
    ]
  },
  {
    section: "Sauces & Extras",
    title: "Hollandaise Sauce",
    ingredients: [
      "3 egg yolks",
      "1/2 cup butter, melted",
      "1 Tbsp lemon juice",
      "Pinch of cayenne pepper",
      "Salt to taste"
    ],
    instructions: [
      "Whisk egg yolks in bowl over simmering water.",
      "Slowly drizzle in melted butter while whisking constantly.",
      "Continue whisking until thick and creamy.",
      "Whisk in lemon juice, cayenne, and salt.",
      "Serve immediately."
    ]
  },
  {
    section: "Sauces & Extras",
    title: "Honey Mustard Sauce",
    ingredients: [
      "1/2 cup mayonnaise",
      "1/4 cup Dijon mustard",
      "3 Tbsp honey",
      "1 Tbsp lemon juice"
    ],
    instructions: [
      "Whisk all ingredients together.",
      "Taste and adjust honey or mustard as desired.",
      "Refrigerate until ready to use.",
      "Great for chicken, sandwiches, or as dip.",
      "Keeps for 1 week in refrigerator."
    ]
  },
  {
    section: "Sauces & Extras",
    title: "Marinara Sauce",
    ingredients: [
      "2 Tbsp olive oil",
      "4 cloves garlic, minced",
      "2 cans (28 oz each) crushed tomatoes",
      "1 tsp dried basil",
      "1 tsp dried oregano",
      "Salt and pepper",
      "Pinch of sugar"
    ],
    instructions: [
      "Heat oil in large pot. Sauté garlic 1 minute.",
      "Add tomatoes, basil, oregano, and sugar.",
      "Bring to simmer.",
      "Simmer uncovered 20-30 minutes, stirring occasionally.",
      "Season with salt and pepper."
    ]
  },
  {
    section: "Sauces & Extras",
    title: "Pickles (Quick Refrigerator)",
    ingredients: [
      "4 cups sliced cucumbers",
      "1 cup white vinegar",
      "1 cup water",
      "3/4 cup sugar",
      "2 Tbsp salt",
      "1 Tbsp mustard seeds",
      "1 tsp dill seeds"
    ],
    instructions: [
      "Pack cucumbers into clean jars.",
      "Heat vinegar, water, sugar, salt, mustard seeds, and dill seeds until sugar dissolves.",
      "Pour hot brine over cucumbers.",
      "Cool to room temperature.",
      "Refrigerate at least 24 hours before eating."
    ]
  },
  {
    section: "Sauces & Extras",
    title: "Raspberry Jam",
    ingredients: [
      "4 cups fresh raspberries",
      "3 cups sugar",
      "1/4 cup lemon juice"
    ],
    instructions: [
      "Combine raspberries and sugar in large pot.",
      "Let sit 30 minutes to release juices.",
      "Add lemon juice and bring to boil.",
      "Boil 15-20 minutes, stirring frequently, until thickened.",
      "Pour into sterilized jars and seal."
    ]
  },
  {
    section: "Sauces & Extras",
    title: "Salsa",
    ingredients: [
      "4 tomatoes, diced",
      "1/2 cup onion, finely chopped",
      "1/4 cup cilantro, chopped",
      "1-2 jalapeños, minced",
      "Juice of 1 lime",
      "1/2 tsp salt"
    ],
    instructions: [
      "Combine all ingredients in bowl.",
      "Mix well.",
      "Let sit 30 minutes for flavors to blend.",
      "Taste and adjust seasoning.",
      "Serve with chips or on tacos."
    ]
  },
  {
    section: "Sauces & Extras",
    title: "Strawberry Jam",
    ingredients: [
      "4 cups fresh strawberries, hulled",
      "3 cups sugar",
      "1/4 cup lemon juice"
    ],
    instructions: [
      "Mash strawberries slightly in large pot.",
      "Add sugar and lemon juice.",
      "Bring to full boil over high heat, stirring constantly.",
      "Boil hard 15-20 minutes until thickened.",
      "Pour into sterilized jars and seal."
    ]
  },
  {
    section: "Sauces & Extras",
    title: "Tartar Sauce",
    ingredients: [
      "1 cup mayonnaise",
      "2 Tbsp dill pickles, finely chopped",
      "1 Tbsp capers, chopped",
      "1 Tbsp lemon juice",
      "1 tsp Dijon mustard",
      "Salt and pepper"
    ],
    instructions: [
      "Mix all ingredients together.",
      "Taste and adjust seasoning.",
      "Refrigerate at least 30 minutes.",
      "Great with fish or seafood.",
      "Keeps for 1 week in refrigerator."
    ]
  },
  {
    section: "Sauces & Extras",
    title: "Tzatziki Sauce",
    ingredients: [
      "1 cup Greek yogurt",
      "1 cucumber, grated and squeezed dry",
      "2 cloves garlic, minced",
      "1 Tbsp lemon juice",
      "1 Tbsp fresh dill, chopped",
      "Salt and pepper"
    ],
    instructions: [
      "Combine yogurt, cucumber, garlic, lemon juice, and dill.",
      "Season with salt and pepper.",
      "Mix well.",
      "Refrigerate at least 1 hour.",
      "Serve with grilled meats or as dip."
    ]
  },
  {
    section: "Sauces & Extras",
    title: "Vanilla Buttercream Frosting",
    ingredients: [
      "1 cup butter, softened",
      "4 cups powdered sugar",
      "2 tsp vanilla",
      "2-4 Tbsp milk or cream"
    ],
    instructions: [
      "Beat butter until fluffy.",
      "Gradually add powdered sugar, 1 cup at a time.",
      "Beat in vanilla.",
      "Add milk 1 Tbsp at a time until desired consistency.",
      "Beat on high 3 minutes until light and fluffy."
    ]
  },
  {
    section: "Sauces & Extras",
    title: "Whipped Cream",
    ingredients: [
      "1 cup heavy whipping cream",
      "2 Tbsp powdered sugar",
      "1 tsp vanilla"
    ],
    instructions: [
      "Chill bowl and beaters in freezer 15 minutes.",
      "Pour cream into chilled bowl.",
      "Beat on medium speed until soft peaks form.",
      "Add powdered sugar and vanilla.",
      "Beat until stiff peaks form. Do not overbeat."
    ]
  }
];

// State management
let currentFilter = 'all';
let searchTerm = '';

// DOM elements
const recipeGrid = document.getElementById('recipeGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilters = document.getElementById('categoryFilters');
const recipeModal = document.getElementById('recipeModal');
const modalContent = document.getElementById('modalContent');
const recipeCount = document.getElementById('recipeCount');

// Filter and search functions
function filterRecipes() {
    return recipes.filter(recipe => {
        const matchesCategory = currentFilter === 'all' || recipe.section === currentFilter;
        const matchesSearch = searchTerm === '' || 
            recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesCategory && matchesSearch;
    });
}

function displayRecipes() {
    const filteredRecipes = filterRecipes();
    
    if (filteredRecipes.length === 0) {
        recipeGrid.innerHTML = '<div class="no-results">No recipes found. Try adjusting your search or filter.</div>';
        recipeCount.textContent = 'No recipes found';
        return;
    }

    recipeCount.textContent = `Showing ${filteredRecipes.length} recipe${filteredRecipes.length !== 1 ? 's' : ''}`;

    recipeGrid.innerHTML = filteredRecipes.map(recipe => `
        <div class="recipe-card" onclick="openRecipe('${recipe.title.replace(/'/g, "\\'")}')
">
            <span class="recipe-category">${recipe.section}</span>
            <h3>${recipe.title}</h3>
        </div>
    `).join('');
}

function openRecipe(title) {
    const recipe = recipes.find(r => r.title === title);
    if (!recipe) return;

    modalContent.innerHTML = `
        <div class="modal-header">
            <h2>${recipe.title}</h2>
            <span class="modal-category">${recipe.section}</span>
            <button class="close-btn" onclick="closeModal()">&times;</button>
        </div>
        <div class="modal-body">
            <h3>Ingredients</h3>
            <ul class="ingredients-list">
                ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
            </ul>
            <h3>Instructions</h3>
            <ol class="instructions-list">
                ${recipe.instructions.map(inst => `<li>${inst}</li>`).join('')}
            </ol>
        </div>
    `;

    recipeModal.classList.add('active');
}

function closeModal() {
    recipeModal.classList.remove('active');
}

// Event listeners
searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value;
    displayRecipes();
});

categoryFilters.addEventListener('click', (e) => {
    if (e.target.classList.contains('category-btn')) {
        document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        currentFilter = e.target.dataset.category;
        displayRecipes();
    }
});

recipeModal.addEventListener('click', (e) => {
    if (e.target === recipeModal) {
        closeModal();
    }
});

// Make functions globally accessible
window.openRecipe = openRecipe;
window.closeModal = closeModal;

// Initial display
displayRecipes();