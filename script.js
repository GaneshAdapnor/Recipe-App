// Recipe Database
const recipes = [
    {
        id: 1,
        name: "Spaghetti Carbonara",
        description: "A classic Italian pasta dish with eggs, cheese, pancetta, and black pepper.",
        time: "25 minutes",
        difficulty: "medium",
        servings: 4,
        ingredients: [
            "400g spaghetti",
            "200g pancetta or guanciale, cubed",
            "4 large eggs",
            "100g Pecorino Romano cheese, grated",
            "100g Parmigiano-Reggiano cheese, grated",
            "Black pepper, freshly ground",
            "Salt for pasta water"
        ],
        instructions: [
            "Bring a large pot of salted water to boil and cook spaghetti according to package directions until al dente.",
            "While pasta cooks, heat a large skillet over medium heat and cook pancetta until crispy, about 8-10 minutes.",
            "In a bowl, whisk together eggs, grated cheeses, and plenty of black pepper.",
            "Drain pasta, reserving 1 cup of pasta water.",
            "Add hot pasta to the skillet with pancetta, remove from heat.",
            "Quickly stir in the egg mixture, adding pasta water as needed to create a creamy sauce.",
            "Serve immediately with extra cheese and black pepper on top."
        ],
        category: "pasta"
    },
    {
        id: 2,
        name: "Chicken Tikka Masala",
        description: "A creamy and flavorful Indian curry with tender chicken pieces in a rich tomato-based sauce.",
        time: "45 minutes",
        difficulty: "medium",
        servings: 6,
        ingredients: [
            "800g chicken breast, cut into cubes",
            "2 cups plain yogurt",
            "2 tbsp garam masala",
            "1 tbsp turmeric",
            "2 tbsp ginger-garlic paste",
            "2 onions, finely chopped",
            "4 tomatoes, pureed",
            "1 cup heavy cream",
            "2 tbsp butter",
            "Fresh cilantro for garnish",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Marinate chicken in yogurt, garam masala, turmeric, and ginger-garlic paste for 30 minutes.",
            "Heat butter in a large pan and cook onions until golden brown.",
            "Add marinated chicken and cook until browned on all sides.",
            "Add tomato puree and cook for 10 minutes until oil separates.",
            "Add cream and simmer for 15-20 minutes until chicken is cooked through.",
            "Garnish with fresh cilantro and serve with rice or naan bread."
        ],
        category: "chicken"
    },
    {
        id: 3,
        name: "Chocolate Cake",
        description: "A moist and decadent chocolate cake perfect for any celebration.",
        time: "60 minutes",
        difficulty: "easy",
        servings: 12,
        ingredients: [
            "2 cups all-purpose flour",
            "2 cups sugar",
            "3/4 cup unsweetened cocoa powder",
            "2 tsp baking soda",
            "1 tsp baking powder",
            "1 tsp salt",
            "2 eggs",
            "1 cup milk",
            "1 cup vegetable oil",
            "1 cup hot water",
            "2 tsp vanilla extract"
        ],
        instructions: [
            "Preheat oven to 350°F (175°C) and grease two 9-inch round cake pans.",
            "In a large bowl, whisk together flour, sugar, cocoa, baking soda, baking powder, and salt.",
            "Add eggs, milk, oil, and vanilla to the dry ingredients and mix well.",
            "Stir in hot water (batter will be thin).",
            "Pour batter into prepared pans and bake for 30-35 minutes.",
            "Cool in pans for 10 minutes, then transfer to wire racks to cool completely.",
            "Frost with your favorite chocolate frosting."
        ],
        category: "cake"
    },
    {
        id: 4,
        name: "Caesar Salad",
        description: "A classic salad with crisp romaine lettuce, croutons, and creamy Caesar dressing.",
        time: "15 minutes",
        difficulty: "easy",
        servings: 4,
        ingredients: [
            "2 heads romaine lettuce, chopped",
            "1/2 cup croutons",
            "1/4 cup Parmesan cheese, grated",
            "2 tbsp lemon juice",
            "1 tbsp Dijon mustard",
            "2 cloves garlic, minced",
            "1/4 cup olive oil",
            "1 egg yolk",
            "Salt and pepper to taste",
            "Anchovy paste (optional)"
        ],
        instructions: [
            "Wash and chop romaine lettuce, then pat dry thoroughly.",
            "In a small bowl, whisk together lemon juice, Dijon mustard, garlic, and egg yolk.",
            "Slowly drizzle in olive oil while whisking to create an emulsion.",
            "Season with salt, pepper, and anchovy paste if using.",
            "Toss lettuce with dressing in a large bowl.",
            "Add croutons and Parmesan cheese, toss gently.",
            "Serve immediately while lettuce is crisp."
        ],
        category: "salad"
    },
    {
        id: 5,
        name: "Margherita Pizza",
        description: "A traditional Italian pizza with tomato sauce, mozzarella, and fresh basil.",
        time: "30 minutes",
        difficulty: "medium",
        servings: 4,
        ingredients: [
            "1 pizza dough (store-bought or homemade)",
            "1/2 cup tomato sauce",
            "200g fresh mozzarella, sliced",
            "Fresh basil leaves",
            "2 tbsp olive oil",
            "Salt and pepper to taste",
            "Cornmeal for dusting"
        ],
        instructions: [
            "Preheat oven to 500°F (260°C) with a pizza stone if available.",
            "Roll out pizza dough on a floured surface to desired thickness.",
            "Dust pizza peel or baking sheet with cornmeal.",
            "Spread tomato sauce evenly over dough, leaving a border for the crust.",
            "Arrange mozzarella slices over the sauce.",
            "Drizzle with olive oil and season with salt and pepper.",
            "Bake for 12-15 minutes until crust is golden and cheese is bubbly.",
            "Remove from oven and top with fresh basil leaves before serving."
        ],
        category: "pizza"
    },
    {
        id: 6,
        name: "Beef Stir Fry",
        description: "A quick and healthy stir fry with tender beef and colorful vegetables.",
        time: "20 minutes",
        difficulty: "easy",
        servings: 4,
        ingredients: [
            "500g beef sirloin, thinly sliced",
            "2 cups mixed vegetables (broccoli, bell peppers, carrots)",
            "3 tbsp soy sauce",
            "2 tbsp oyster sauce",
            "1 tbsp cornstarch",
            "2 cloves garlic, minced",
            "1 tbsp ginger, minced",
            "2 tbsp vegetable oil",
            "Sesame seeds for garnish"
        ],
        instructions: [
            "Slice beef thinly against the grain and marinate with soy sauce and cornstarch for 10 minutes.",
            "Heat oil in a wok or large skillet over high heat.",
            "Stir-fry beef in batches until browned, about 2-3 minutes per batch. Remove and set aside.",
            "Add garlic and ginger to the pan, stir-fry for 30 seconds.",
            "Add vegetables and stir-fry for 3-4 minutes until crisp-tender.",
            "Return beef to pan, add oyster sauce, and stir-fry for 1 minute.",
            "Garnish with sesame seeds and serve over rice."
        ],
        category: "beef"
    },
    {
        id: 7,
        name: "Fish Tacos",
        description: "Fresh and flavorful fish tacos with cabbage slaw and chipotle mayo.",
        time: "25 minutes",
        difficulty: "easy",
        servings: 4,
        ingredients: [
            "500g white fish fillets (cod, tilapia, or mahi-mahi)",
            "8 corn tortillas",
            "2 cups shredded cabbage",
            "1/4 cup mayonnaise",
            "1 tbsp chipotle in adobo",
            "1 lime, juiced",
            "2 tbsp olive oil",
            "1 tsp cumin",
            "1 tsp paprika",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Season fish with cumin, paprika, salt, and pepper.",
            "Heat oil in a skillet over medium-high heat and cook fish for 3-4 minutes per side until flaky.",
            "Warm tortillas in a dry skillet or microwave.",
            "Mix mayonnaise with chipotle and lime juice for the sauce.",
            "Toss cabbage with lime juice and salt for the slaw.",
            "Flake fish into pieces and assemble tacos with fish, slaw, and chipotle mayo.",
            "Serve with lime wedges and hot sauce on the side."
        ],
        category: "seafood"
    },
    {
        id: 8,
        name: "Vegetable Curry",
        description: "A hearty vegetarian curry with seasonal vegetables and aromatic spices.",
        time: "40 minutes",
        difficulty: "medium",
        servings: 6,
        ingredients: [
            "2 cups mixed vegetables (potatoes, carrots, peas, cauliflower)",
            "1 onion, chopped",
            "2 tomatoes, chopped",
            "2 tbsp curry powder",
            "1 tbsp turmeric",
            "1 tbsp ginger-garlic paste",
            "1 can coconut milk",
            "2 tbsp vegetable oil",
            "Fresh cilantro for garnish",
            "Salt to taste"
        ],
        instructions: [
            "Heat oil in a large pot and sauté onions until translucent.",
            "Add ginger-garlic paste and cook for 1 minute.",
            "Add curry powder and turmeric, cook for 30 seconds until fragrant.",
            "Add vegetables and tomatoes, cook for 5 minutes.",
            "Pour in coconut milk and bring to a simmer.",
            "Cook for 20-25 minutes until vegetables are tender.",
            "Season with salt and garnish with fresh cilantro.",
            "Serve with rice or naan bread."
        ],
        category: "vegetarian"
    },
    {
        id: 9,
        name: "Greek Moussaka",
        description: "A traditional Greek layered dish with eggplant, ground meat, and creamy béchamel sauce.",
        time: "90 minutes",
        difficulty: "hard",
        servings: 8,
        ingredients: [
            "3 large eggplants, sliced lengthwise",
            "500g ground lamb or beef",
            "1 onion, chopped",
            "3 cloves garlic, minced",
            "2 tbsp tomato paste",
            "1/2 cup red wine",
            "1 tsp cinnamon",
            "1/2 tsp nutmeg",
            "4 tbsp butter",
            "4 tbsp flour",
            "2 cups milk",
            "2 egg yolks",
            "1/2 cup breadcrumbs",
            "Olive oil for frying",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Salt eggplant slices and let sit for 30 minutes, then rinse and pat dry.",
            "Fry eggplant slices in olive oil until golden brown, set aside.",
            "Sauté onion and garlic, add ground meat and cook until browned.",
            "Add tomato paste, wine, cinnamon, and nutmeg. Simmer for 20 minutes.",
            "Make béchamel sauce: melt butter, add flour, whisk in milk until thickened.",
            "Remove from heat and whisk in egg yolks.",
            "Layer eggplant, meat mixture, and béchamel in a baking dish.",
            "Top with breadcrumbs and bake at 350°F for 45 minutes until golden."
        ],
        category: "mediterranean"
    },
    {
        id: 10,
        name: "Thai Green Curry",
        description: "A fragrant and spicy Thai curry with coconut milk, green curry paste, and fresh vegetables.",
        time: "35 minutes",
        difficulty: "medium",
        servings: 4,
        ingredients: [
            "400ml coconut milk",
            "2 tbsp green curry paste",
            "500g chicken breast, sliced",
            "1 cup bamboo shoots",
            "1 cup green beans",
            "1 red bell pepper, sliced",
            "2 tbsp fish sauce",
            "1 tbsp palm sugar",
            "Thai basil leaves",
            "2 kaffir lime leaves",
            "1 red chili, sliced",
            "Jasmine rice for serving"
        ],
        instructions: [
            "Heat half the coconut milk in a wok until it starts to separate.",
            "Add green curry paste and fry for 2-3 minutes until fragrant.",
            "Add chicken and cook until no longer pink.",
            "Pour in remaining coconut milk and bring to a simmer.",
            "Add vegetables and simmer for 8-10 minutes until tender.",
            "Season with fish sauce and palm sugar to taste.",
            "Add Thai basil and kaffir lime leaves, simmer for 2 minutes.",
            "Garnish with red chili and serve with jasmine rice."
        ],
        category: "thai"
    },
    {
        id: 11,
        name: "French Onion Soup",
        description: "A classic French soup with caramelized onions, rich beef broth, and melted cheese toast.",
        time: "75 minutes",
        difficulty: "medium",
        servings: 6,
        ingredients: [
            "1kg onions, thinly sliced",
            "4 tbsp butter",
            "2 tbsp olive oil",
            "1 tsp sugar",
            "2 tbsp flour",
            "1 cup dry white wine",
            "8 cups beef broth",
            "1 bay leaf",
            "1 tsp thyme",
            "6 slices French bread",
            "200g Gruyère cheese, grated",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Melt butter and oil in a large pot over medium heat.",
            "Add onions and sugar, cook slowly for 45 minutes until deeply caramelized.",
            "Add flour and cook for 1 minute, stirring constantly.",
            "Deglaze with wine and cook until reduced by half.",
            "Add beef broth, bay leaf, and thyme. Simmer for 30 minutes.",
            "Season with salt and pepper to taste.",
            "Toast bread slices and top with grated cheese.",
            "Place cheese toast on top of soup and broil until cheese is bubbly and golden."
        ],
        category: "soup"
    },
    {
        id: 12,
        name: "Japanese Ramen",
        description: "A comforting bowl of ramen with rich broth, tender pork, soft-boiled egg, and fresh vegetables.",
        time: "120 minutes",
        difficulty: "hard",
        servings: 4,
        ingredients: [
            "4 portions ramen noodles",
            "1kg pork belly",
            "4 soft-boiled eggs",
            "2 cups bean sprouts",
            "2 green onions, sliced",
            "4 sheets nori",
            "2 tbsp soy sauce",
            "2 tbsp mirin",
            "1 tbsp sake",
            "1 tsp sugar",
            "8 cups chicken broth",
            "2 cloves garlic, minced",
            "1 inch ginger, sliced"
        ],
        instructions: [
            "Marinate pork belly in soy sauce, mirin, sake, and sugar for 30 minutes.",
            "Cook pork belly in a pressure cooker or slow cooker until tender.",
            "Prepare broth by simmering chicken broth with garlic and ginger for 1 hour.",
            "Cook ramen noodles according to package directions.",
            "Soft-boil eggs for 6-7 minutes, then marinate in soy sauce.",
            "Assemble bowls with noodles, sliced pork, egg, vegetables, and nori.",
            "Pour hot broth over and serve immediately."
        ],
        category: "japanese"
    },
    {
        id: 13,
        name: "Mexican Enchiladas",
        description: "Corn tortillas filled with chicken, rolled and smothered in enchilada sauce and melted cheese.",
        time: "50 minutes",
        difficulty: "medium",
        servings: 6,
        ingredients: [
            "12 corn tortillas",
            "3 cups cooked chicken, shredded",
            "2 cups enchilada sauce",
            "2 cups Monterey Jack cheese, shredded",
            "1 onion, diced",
            "2 cloves garlic, minced",
            "1 tbsp chili powder",
            "1 tsp cumin",
            "1/2 cup sour cream",
            "Fresh cilantro for garnish",
            "Vegetable oil for frying"
        ],
        instructions: [
            "Preheat oven to 350°F and grease a 9x13 baking dish.",
            "Heat oil in a skillet and briefly fry tortillas until pliable.",
            "Mix chicken with onion, garlic, chili powder, and cumin.",
            "Dip each tortilla in enchilada sauce, fill with chicken mixture.",
            "Roll up and place seam-side down in baking dish.",
            "Pour remaining sauce over enchiladas and top with cheese.",
            "Bake for 25-30 minutes until cheese is melted and bubbly.",
            "Garnish with sour cream and cilantro before serving."
        ],
        category: "mexican"
    },
    {
        id: 14,
        name: "Italian Risotto",
        description: "Creamy Italian risotto with mushrooms, white wine, and Parmesan cheese.",
        time: "40 minutes",
        difficulty: "medium",
        servings: 4,
        ingredients: [
            "1 1/2 cups Arborio rice",
            "4 cups chicken broth",
            "1/2 cup white wine",
            "1 onion, finely chopped",
            "2 cups mushrooms, sliced",
            "1/2 cup Parmesan cheese, grated",
            "3 tbsp butter",
            "2 tbsp olive oil",
            "2 cloves garlic, minced",
            "1/4 cup fresh parsley, chopped",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Heat broth in a saucepan and keep warm over low heat.",
            "Sauté onion in butter and oil until translucent.",
            "Add mushrooms and garlic, cook until mushrooms are golden.",
            "Add rice and stir for 2 minutes until translucent around edges.",
            "Pour in wine and stir until absorbed.",
            "Add broth one ladle at a time, stirring constantly until absorbed.",
            "Continue until rice is creamy and al dente (about 20 minutes).",
            "Remove from heat, stir in Parmesan and parsley. Let rest for 2 minutes."
        ],
        category: "italian"
    },
    {
        id: 15,
        name: "Korean Bibimbap",
        description: "A colorful Korean rice bowl with vegetables, beef, and a fried egg, served with gochujang sauce.",
        time: "45 minutes",
        difficulty: "medium",
        servings: 4,
        ingredients: [
            "2 cups short-grain rice",
            "300g beef, thinly sliced",
            "2 carrots, julienned",
            "2 cups spinach",
            "1 cup bean sprouts",
            "4 eggs",
            "2 tbsp soy sauce",
            "1 tbsp sesame oil",
            "1 tbsp gochujang (Korean chili paste)",
            "1 tbsp honey",
            "2 cloves garlic, minced",
            "Sesame seeds for garnish"
        ],
        instructions: [
            "Cook rice according to package directions.",
            "Marinate beef in soy sauce, sesame oil, and garlic for 15 minutes.",
            "Sauté carrots, spinach, and bean sprouts separately with sesame oil.",
            "Cook beef in a hot skillet until browned.",
            "Fry eggs sunny-side up.",
            "Assemble bowls with rice, vegetables, beef, and egg.",
            "Mix gochujang with honey for sauce.",
            "Serve with sauce and garnish with sesame seeds."
        ],
        category: "korean"
    },
    {
        id: 16,
        name: "Indian Butter Chicken",
        description: "Tender chicken in a rich, creamy tomato-based sauce with aromatic Indian spices.",
        time: "60 minutes",
        difficulty: "medium",
        servings: 6,
        ingredients: [
            "800g chicken breast, cubed",
            "1 cup plain yogurt",
            "2 tbsp tandoori masala",
            "2 tbsp ginger-garlic paste",
            "1 cup tomato puree",
            "1/2 cup heavy cream",
            "2 tbsp butter",
            "1 tbsp kasoori methi (dried fenugreek)",
            "1 tsp garam masala",
            "1/2 tsp turmeric",
            "Fresh cilantro for garnish",
            "Naan bread for serving"
        ],
        instructions: [
            "Marinate chicken in yogurt, tandoori masala, and ginger-garlic paste for 30 minutes.",
            "Grill or bake chicken until charred and cooked through.",
            "Heat butter in a pan and add tomato puree, cook for 10 minutes.",
            "Add cream, kasoori methi, garam masala, and turmeric.",
            "Add cooked chicken and simmer for 15 minutes.",
            "Garnish with fresh cilantro and serve with naan bread."
        ],
        category: "indian"
    },
    {
        id: 17,
        name: "Biryani",
        description: "A fragrant rice dish with tender meat, aromatic spices, and caramelized onions.",
        time: "90 minutes",
        difficulty: "hard",
        servings: 8,
        ingredients: [
            "2 cups basmati rice",
            "1kg chicken or lamb, cubed",
            "2 onions, thinly sliced",
            "4 tomatoes, chopped",
            "1/2 cup yogurt",
            "2 tbsp ginger-garlic paste",
            "2 tbsp biryani masala",
            "1 tsp turmeric",
            "1 tsp red chili powder",
            "1/2 cup mint leaves",
            "1/2 cup cilantro",
            "4 tbsp ghee",
            "4 cardamom pods",
            "4 cloves",
            "2 cinnamon sticks",
            "Saffron strands soaked in milk",
            "Salt to taste"
        ],
        instructions: [
            "Marinate meat in yogurt, ginger-garlic paste, and spices for 2 hours.",
            "Cook rice with whole spices until 70% done, drain and set aside.",
            "Heat ghee and fry onions until golden brown, remove half for garnish.",
            "Add marinated meat and cook until tender and browned.",
            "Layer half the rice, then meat mixture, then remaining rice.",
            "Sprinkle fried onions, mint, cilantro, and saffron milk.",
            "Cover tightly and cook on low heat for 30 minutes.",
            "Let rest for 10 minutes before serving."
        ],
        category: "indian"
    },
    {
        id: 18,
        name: "Palak Paneer",
        description: "Fresh spinach curry with homemade cheese cubes in a creamy, spiced gravy.",
        time: "45 minutes",
        difficulty: "medium",
        servings: 4,
        ingredients: [
            "500g fresh spinach, washed",
            "200g paneer (Indian cottage cheese), cubed",
            "2 onions, chopped",
            "2 tomatoes, chopped",
            "2 tbsp ginger-garlic paste",
            "1 tsp cumin seeds",
            "1 tsp garam masala",
            "1/2 tsp turmeric",
            "1/2 tsp red chili powder",
            "1/2 cup heavy cream",
            "2 tbsp butter",
            "2 tbsp oil",
            "Salt to taste"
        ],
        instructions: [
            "Blanch spinach in boiling water for 2 minutes, then blend to a smooth paste.",
            "Heat oil and butter, add cumin seeds until they crackle.",
            "Sauté onions until golden, add ginger-garlic paste and cook for 2 minutes.",
            "Add tomatoes and spices, cook until tomatoes are soft.",
            "Add spinach puree and simmer for 10 minutes.",
            "Add cream and paneer cubes, simmer for 5 minutes.",
            "Garnish with cream and serve with naan or rice."
        ],
        category: "indian"
    },
    {
        id: 19,
        name: "Masala Dosa",
        description: "Crispy fermented rice crepes filled with spiced potato mixture, served with coconut chutney.",
        time: "24 hours (including fermentation)",
        difficulty: "hard",
        servings: 6,
        ingredients: [
            "2 cups rice",
            "1/2 cup urad dal (black lentils)",
            "1/4 cup poha (flattened rice)",
            "1/4 tsp fenugreek seeds",
            "4 potatoes, boiled and mashed",
            "1 onion, finely chopped",
            "2 green chilies, chopped",
            "1 tsp mustard seeds",
            "1 tsp turmeric",
            "Curry leaves",
            "Oil for cooking",
            "Salt to taste"
        ],
        instructions: [
            "Soak rice, dal, and fenugreek separately for 6 hours.",
            "Grind to smooth batter, add salt, and ferment overnight.",
            "For filling: heat oil, add mustard seeds and curry leaves.",
            "Add onions, chilies, and turmeric, cook until onions are soft.",
            "Add mashed potatoes and mix well.",
            "Spread thin layer of batter on hot griddle, cook until crispy.",
            "Place potato filling on one side and roll up.",
            "Serve with coconut chutney and sambar."
        ],
        category: "indian"
    },
    {
        id: 20,
        name: "Rogan Josh",
        description: "Aromatic Kashmiri lamb curry with tender meat in a rich, spiced gravy.",
        time: "120 minutes",
        difficulty: "hard",
        servings: 6,
        ingredients: [
            "1kg lamb shoulder, cubed",
            "2 onions, finely chopped",
            "2 tbsp ginger-garlic paste",
            "2 tbsp Kashmiri red chili powder",
            "1 tbsp fennel powder",
            "1 tbsp dry ginger powder",
            "1 tsp asafoetida",
            "4 cardamom pods",
            "4 cloves",
            "2 cinnamon sticks",
            "1 cup yogurt",
            "2 tbsp ghee",
            "Fresh cilantro for garnish",
            "Salt to taste"
        ],
        instructions: [
            "Marinate lamb in yogurt, ginger-garlic paste, and spices for 2 hours.",
            "Heat ghee and add whole spices until fragrant.",
            "Add onions and cook until golden brown.",
            "Add marinated lamb and cook on high heat until browned.",
            "Add water and simmer covered for 1.5 hours until meat is tender.",
            "Cook uncovered to reduce gravy to desired consistency.",
            "Garnish with fresh cilantro and serve with rice or naan."
        ],
        category: "indian"
    },
    {
        id: 21,
        name: "Chole Bhature",
        description: "Spicy chickpea curry served with fluffy deep-fried bread, a popular North Indian dish.",
        time: "60 minutes",
        difficulty: "medium",
        servings: 4,
        ingredients: [
            "2 cups chickpeas, soaked overnight",
            "2 onions, chopped",
            "2 tomatoes, chopped",
            "2 tbsp ginger-garlic paste",
            "2 tbsp chole masala",
            "1 tsp amchur (dry mango powder)",
            "1 tsp garam masala",
            "2 cups all-purpose flour",
            "1/2 cup semolina",
            "1/2 cup yogurt",
            "1 tsp baking powder",
            "Oil for frying",
            "Fresh onions and lemon for serving"
        ],
        instructions: [
            "Pressure cook chickpeas until tender.",
            "Heat oil and sauté onions until golden.",
            "Add ginger-garlic paste, tomatoes, and spices.",
            "Add cooked chickpeas and simmer for 20 minutes.",
            "For bhature: mix flour, semolina, yogurt, and baking powder.",
            "Knead into soft dough and let rest for 30 minutes.",
            "Roll into circles and deep fry until golden and puffed.",
            "Serve hot bhature with chole, onions, and lemon."
        ],
        category: "indian"
    },
    {
        id: 22,
        name: "Malai Kofta",
        description: "Vegetable dumplings in a rich, creamy gravy with nuts and aromatic spices.",
        time: "75 minutes",
        difficulty: "hard",
        servings: 6,
        ingredients: [
            "4 potatoes, boiled and mashed",
            "1 cup mixed vegetables (carrots, peas, beans)",
            "1/2 cup paneer, crumbled",
            "2 tbsp cornflour",
            "2 onions, chopped",
            "2 tomatoes, pureed",
            "1/2 cup cashews, soaked",
            "1/2 cup heavy cream",
            "2 tbsp ginger-garlic paste",
            "1 tsp garam masala",
            "1/2 tsp turmeric",
            "Oil for frying",
            "Fresh cilantro for garnish"
        ],
        instructions: [
            "Mix mashed potatoes, vegetables, paneer, and cornflour for koftas.",
            "Shape into balls and deep fry until golden brown.",
            "For gravy: sauté onions until golden, add ginger-garlic paste.",
            "Add tomato puree and cook until oil separates.",
            "Blend cashews with cream and add to gravy.",
            "Add spices and simmer for 10 minutes.",
            "Gently add koftas and simmer for 5 minutes.",
            "Garnish with cream and cilantro, serve with naan."
        ],
        category: "indian"
    },
    {
        id: 23,
        name: "Tandoori Chicken",
        description: "Marinated chicken roasted in a tandoor or oven with aromatic spices and yogurt.",
        time: "90 minutes",
        difficulty: "medium",
        servings: 6,
        ingredients: [
            "1kg chicken, cut into pieces",
            "1 cup yogurt",
            "2 tbsp ginger-garlic paste",
            "2 tbsp tandoori masala",
            "1 tbsp red chili powder",
            "1 tbsp garam masala",
            "1 tsp turmeric",
            "2 tbsp mustard oil",
            "1 lemon, juiced",
            "Salt to taste",
            "Fresh mint chutney for serving",
            "Onion rings and lemon wedges"
        ],
        instructions: [
            "Mix yogurt with all spices and ginger-garlic paste.",
            "Marinate chicken in this mixture for at least 4 hours.",
            "Preheat oven to 400°F (200°C) or prepare grill.",
            "Place marinated chicken on a baking tray.",
            "Bake for 45-50 minutes, turning halfway through.",
            "Brush with oil and broil for 5 minutes for charred effect.",
            "Serve hot with mint chutney, onion rings, and lemon wedges."
        ],
        category: "indian"
    },
    {
        id: 24,
        name: "Paneer Butter Masala",
        description: "Creamy and rich curry with soft paneer cubes in a tomato-based gravy with butter and cream.",
        time: "40 minutes",
        difficulty: "medium",
        servings: 4,
        ingredients: [
            "300g paneer, cubed",
            "2 onions, finely chopped",
            "3 tomatoes, pureed",
            "2 tbsp ginger-garlic paste",
            "1/2 cup heavy cream",
            "2 tbsp butter",
            "2 tbsp oil",
            "1 tsp garam masala",
            "1/2 tsp turmeric",
            "1/2 tsp red chili powder",
            "1 tsp kasoori methi (dried fenugreek leaves)",
            "Fresh cilantro for garnish",
            "Salt to taste"
        ],
        instructions: [
            "Heat oil and butter in a pan, add onions and cook until golden brown.",
            "Add ginger-garlic paste and cook for 2 minutes.",
            "Add tomato puree and cook until oil separates from the mixture.",
            "Add all spices and cook for 2-3 minutes.",
            "Add cream and simmer for 5 minutes.",
            "Gently add paneer cubes and simmer for 3-4 minutes.",
            "Add kasoori methi and garnish with fresh cilantro.",
            "Serve hot with naan bread or rice."
        ],
        category: "indian"
    },
    {
        id: 25,
        name: "Chole (Chickpea Curry)",
        description: "Spicy and tangy chickpea curry with aromatic spices, a popular North Indian dish.",
        time: "60 minutes",
        difficulty: "medium",
        servings: 6,
        ingredients: [
            "2 cups chickpeas, soaked overnight",
            "2 onions, finely chopped",
            "2 tomatoes, chopped",
            "2 tbsp ginger-garlic paste",
            "2 tbsp chole masala",
            "1 tsp amchur (dry mango powder)",
            "1 tsp garam masala",
            "1/2 tsp turmeric",
            "1/2 tsp red chili powder",
            "2 tbsp oil",
            "Fresh cilantro for garnish",
            "Ginger julienne for garnish",
            "Salt to taste"
        ],
        instructions: [
            "Pressure cook soaked chickpeas with salt until tender.",
            "Heat oil in a pan and add onions, cook until golden brown.",
            "Add ginger-garlic paste and cook for 2 minutes.",
            "Add tomatoes and cook until soft.",
            "Add all spices and cook for 2-3 minutes.",
            "Add cooked chickpeas and simmer for 15-20 minutes.",
            "Garnish with fresh cilantro and ginger julienne.",
            "Serve hot with bhature, naan, or rice."
        ],
        category: "indian"
    },
    {
        id: 26,
        name: "Rajma (Kidney Bean Curry)",
        description: "Creamy kidney bean curry in a rich tomato-onion gravy, a comforting North Indian dish.",
        time: "90 minutes",
        difficulty: "medium",
        servings: 6,
        ingredients: [
            "2 cups kidney beans, soaked overnight",
            "2 onions, finely chopped",
            "3 tomatoes, pureed",
            "2 tbsp ginger-garlic paste",
            "1 tsp garam masala",
            "1/2 tsp turmeric",
            "1/2 tsp red chili powder",
            "1 tsp coriander powder",
            "2 tbsp oil",
            "Fresh cilantro for garnish",
            "Salt to taste"
        ],
        instructions: [
            "Pressure cook soaked kidney beans with salt until tender.",
            "Heat oil and sauté onions until golden brown.",
            "Add ginger-garlic paste and cook for 2 minutes.",
            "Add tomato puree and cook until oil separates.",
            "Add all spices and cook for 2-3 minutes.",
            "Add cooked kidney beans and simmer for 20 minutes.",
            "Garnish with fresh cilantro.",
            "Serve hot with steamed rice."
        ],
        category: "indian"
    },
    {
        id: 27,
        name: "Aloo Gobi (Potato & Cauliflower)",
        description: "Simple and delicious dry curry with potatoes and cauliflower, seasoned with aromatic spices.",
        time: "35 minutes",
        difficulty: "easy",
        servings: 4,
        ingredients: [
            "4 potatoes, cubed",
            "1 medium cauliflower, cut into florets",
            "2 onions, finely chopped",
            "2 tomatoes, chopped",
            "2 tbsp ginger-garlic paste",
            "1 tsp cumin seeds",
            "1 tsp garam masala",
            "1/2 tsp turmeric",
            "1/2 tsp red chili powder",
            "2 tbsp oil",
            "Fresh cilantro for garnish",
            "Salt to taste"
        ],
        instructions: [
            "Heat oil and add cumin seeds until they crackle.",
            "Add onions and cook until golden brown.",
            "Add ginger-garlic paste and cook for 2 minutes.",
            "Add tomatoes and cook until soft.",
            "Add potatoes and cauliflower, mix well.",
            "Add all spices and salt, cook covered for 15-20 minutes.",
            "Cook uncovered for 5 minutes to remove excess moisture.",
            "Garnish with fresh cilantro and serve hot."
        ],
        category: "indian"
    },
    {
        id: 28,
        name: "Veg Biryani",
        description: "Aromatic rice dish with mixed vegetables, fragrant spices, and caramelized onions.",
        time: "75 minutes",
        difficulty: "hard",
        servings: 8,
        ingredients: [
            "2 cups basmati rice",
            "2 cups mixed vegetables (carrots, peas, beans, cauliflower)",
            "2 onions, thinly sliced",
            "2 tomatoes, chopped",
            "2 tbsp ginger-garlic paste",
            "2 tbsp biryani masala",
            "1 tsp turmeric",
            "1/2 cup mint leaves",
            "1/2 cup cilantro",
            "4 tbsp ghee",
            "4 cardamom pods",
            "4 cloves",
            "2 cinnamon sticks",
            "Saffron strands soaked in milk",
            "Salt to taste"
        ],
        instructions: [
            "Cook rice with whole spices until 70% done, drain and set aside.",
            "Heat ghee and fry onions until golden brown, remove half for garnish.",
            "Add ginger-garlic paste and cook for 2 minutes.",
            "Add vegetables and cook for 5 minutes.",
            "Add tomatoes and spices, cook until oil separates.",
            "Layer half the rice, then vegetable mixture, then remaining rice.",
            "Sprinkle fried onions, mint, cilantro, and saffron milk.",
            "Cover tightly and cook on low heat for 30 minutes.",
            "Let rest for 10 minutes before serving."
        ],
        category: "indian"
    },
    {
        id: 29,
        name: "Dal Tadka / Dal Fry",
        description: "Comforting yellow lentils tempered with aromatic spices and herbs.",
        time: "45 minutes",
        difficulty: "easy",
        servings: 4,
        ingredients: [
            "1 cup yellow lentils (toor dal)",
            "2 onions, finely chopped",
            "2 tomatoes, chopped",
            "2 tbsp ginger-garlic paste",
            "1 tsp cumin seeds",
            "1 tsp mustard seeds",
            "2 dried red chilies",
            "1 tsp turmeric",
            "1/2 tsp red chili powder",
            "2 tbsp oil",
            "Fresh cilantro for garnish",
            "Salt to taste"
        ],
        instructions: [
            "Pressure cook lentils with turmeric and salt until soft.",
            "Heat oil and add cumin seeds, mustard seeds, and red chilies.",
            "Add onions and cook until golden brown.",
            "Add ginger-garlic paste and cook for 2 minutes.",
            "Add tomatoes and cook until soft.",
            "Add cooked lentils and simmer for 10 minutes.",
            "Garnish with fresh cilantro.",
            "Serve hot with rice or roti."
        ],
        category: "indian"
    },
    {
        id: 30,
        name: "Baingan Bharta (Smoked Eggplant Curry)",
        description: "Smoky roasted eggplant mashed and cooked with onions, tomatoes, and aromatic spices.",
        time: "50 minutes",
        difficulty: "medium",
        servings: 4,
        ingredients: [
            "2 large eggplants",
            "2 onions, finely chopped",
            "2 tomatoes, chopped",
            "2 tbsp ginger-garlic paste",
            "1 tsp cumin seeds",
            "1 tsp garam masala",
            "1/2 tsp turmeric",
            "1/2 tsp red chili powder",
            "2 tbsp oil",
            "Fresh cilantro for garnish",
            "Salt to taste"
        ],
        instructions: [
            "Roast eggplants over open flame until charred and soft.",
            "Let cool, then peel and mash the flesh.",
            "Heat oil and add cumin seeds until they crackle.",
            "Add onions and cook until golden brown.",
            "Add ginger-garlic paste and cook for 2 minutes.",
            "Add tomatoes and cook until soft.",
            "Add mashed eggplant and all spices.",
            "Cook for 10-15 minutes until well combined.",
            "Garnish with fresh cilantro and serve hot."
        ],
        category: "indian"
    },
    {
        id: 31,
        name: "Idli Sambar",
        description: "Soft steamed rice cakes served with spicy lentil soup and coconut chutney.",
        time: "24 hours (including fermentation)",
        difficulty: "hard",
        servings: 6,
        ingredients: [
            "2 cups rice",
            "1/2 cup urad dal (black lentils)",
            "1/4 tsp fenugreek seeds",
            "1 cup toor dal",
            "2 onions, chopped",
            "2 tomatoes, chopped",
            "2 tbsp sambar powder",
            "1 tsp turmeric",
            "1 tsp mustard seeds",
            "Curry leaves",
            "Oil for tempering",
            "Salt to taste"
        ],
        instructions: [
            "Soak rice and dal separately for 6 hours.",
            "Grind to smooth batter, add salt, and ferment overnight.",
            "Pour batter into greased idli molds and steam for 10-12 minutes.",
            "For sambar: pressure cook toor dal with turmeric.",
            "Heat oil, add mustard seeds and curry leaves.",
            "Add onions and tomatoes, cook until soft.",
            "Add sambar powder and cooked dal.",
            "Simmer for 10 minutes and serve with idlis."
        ],
        category: "indian"
    },
    {
        id: 32,
        name: "Veg Pulao",
        description: "Fragrant rice cooked with mixed vegetables and aromatic whole spices.",
        time: "40 minutes",
        difficulty: "easy",
        servings: 6,
        ingredients: [
            "2 cups basmati rice",
            "2 cups mixed vegetables (carrots, peas, beans)",
            "2 onions, finely chopped",
            "2 tbsp ginger-garlic paste",
            "4 cardamom pods",
            "4 cloves",
            "2 cinnamon sticks",
            "2 bay leaves",
            "1 tsp garam masala",
            "1/2 tsp turmeric",
            "3 tbsp ghee",
            "Fresh cilantro for garnish",
            "Salt to taste"
        ],
        instructions: [
            "Wash and soak rice for 30 minutes.",
            "Heat ghee and add whole spices until fragrant.",
            "Add onions and cook until golden brown.",
            "Add ginger-garlic paste and cook for 2 minutes.",
            "Add vegetables and cook for 3-4 minutes.",
            "Add rice, garam masala, turmeric, and salt.",
            "Add 4 cups water and bring to boil.",
            "Cover and cook on low heat for 20 minutes.",
            "Let rest for 10 minutes, fluff with fork, and serve."
        ],
        category: "indian"
    },
    {
        id: 33,
        name: "Bhindi Masala (Okra Curry)",
        description: "Crispy okra cooked with onions, tomatoes, and aromatic spices.",
        time: "30 minutes",
        difficulty: "easy",
        servings: 4,
        ingredients: [
            "500g okra, cut into pieces",
            "2 onions, finely chopped",
            "2 tomatoes, chopped",
            "2 tbsp ginger-garlic paste",
            "1 tsp cumin seeds",
            "1 tsp garam masala",
            "1/2 tsp turmeric",
            "1/2 tsp red chili powder",
            "2 tbsp oil",
            "Fresh cilantro for garnish",
            "Salt to taste"
        ],
        instructions: [
            "Heat oil and add cumin seeds until they crackle.",
            "Add okra and cook on medium heat until crispy and golden.",
            "Remove okra and set aside.",
            "In the same pan, add onions and cook until golden brown.",
            "Add ginger-garlic paste and cook for 2 minutes.",
            "Add tomatoes and cook until soft.",
            "Add all spices and cook for 2-3 minutes.",
            "Add cooked okra and mix well.",
            "Cook for 5 minutes and garnish with fresh cilantro."
        ],
        category: "indian"
    },
    {
        id: 34,
        name: "Veg Manchurian",
        description: "Crispy vegetable dumplings in a spicy, tangy Chinese-style gravy.",
        time: "50 minutes",
        difficulty: "medium",
        servings: 4,
        ingredients: [
            "2 cups mixed vegetables (carrots, cabbage, beans), grated",
            "1/2 cup all-purpose flour",
            "2 tbsp cornflour",
            "2 onions, chopped",
            "2 tbsp ginger-garlic paste",
            "2 tbsp soy sauce",
            "1 tbsp vinegar",
            "1 tbsp red chili sauce",
            "1 tsp black pepper",
            "Oil for frying",
            "Spring onions for garnish",
            "Salt to taste"
        ],
        instructions: [
            "Mix grated vegetables, flour, cornflour, and salt.",
            "Shape into small balls and deep fry until golden brown.",
            "Heat oil and sauté onions until translucent.",
            "Add ginger-garlic paste and cook for 2 minutes.",
            "Add soy sauce, vinegar, and red chili sauce.",
            "Add fried vegetable balls and mix gently.",
            "Cook for 3-4 minutes until gravy thickens.",
            "Garnish with spring onions and serve hot."
        ],
        category: "indian"
    },
    {
        id: 35,
        name: "Stuffed Paratha (Aloo, Paneer, or Gobi)",
        description: "Whole wheat flatbreads stuffed with spiced potato, paneer, or cauliflower filling.",
        time: "60 minutes",
        difficulty: "medium",
        servings: 6,
        ingredients: [
            "3 cups whole wheat flour",
            "2 potatoes, boiled and mashed",
            "1/2 cup paneer, crumbled (or 1 cup cauliflower, grated)",
            "2 onions, finely chopped",
            "2 green chilies, chopped",
            "1 tsp garam masala",
            "1/2 tsp red chili powder",
            "1/2 tsp amchur (dry mango powder)",
            "2 tbsp oil",
            "Ghee for cooking",
            "Salt to taste"
        ],
        instructions: [
            "Mix flour with salt and water to make soft dough, rest for 30 minutes.",
            "For filling: mix mashed potatoes, paneer/cauliflower, onions, chilies, and spices.",
            "Divide dough into equal portions and roll into small circles.",
            "Place filling in center, bring edges together, and seal.",
            "Roll gently into flatbread, being careful not to break.",
            "Heat griddle and cook paratha with ghee until golden brown spots appear.",
            "Serve hot with yogurt, pickle, or chutney."
        ],
        category: "indian"
    },
    {
        id: 38,
        name: "Chicken 65",
        description: "South Indian deep-fried spicy chicken starter with curry leaves and aromatic spices.",
        time: "45 minutes",
        difficulty: "medium",
        servings: 4,
        ingredients: [
            "500g chicken, cut into small pieces",
            "2 tbsp ginger-garlic paste",
            "1 tbsp red chili powder",
            "1 tbsp garam masala",
            "1/2 cup yogurt",
            "2 tbsp cornflour",
            "2 tbsp all-purpose flour",
            "Curry leaves",
            "2 green chilies, chopped",
            "Oil for deep frying",
            "Salt to taste"
        ],
        instructions: [
            "Marinate chicken in yogurt, ginger-garlic paste, and spices for 30 minutes.",
            "Add cornflour and all-purpose flour to the marinated chicken.",
            "Heat oil for deep frying.",
            "Deep fry chicken pieces until golden brown and crispy.",
            "In a separate pan, heat oil and add curry leaves and green chilies.",
            "Add fried chicken and toss well for 2-3 minutes.",
            "Serve hot as a starter with mint chutney."
        ],
        category: "indian"
    },
    {
        id: 39,
        name: "Mutton Rogan Josh",
        description: "Rich Kashmiri lamb curry with tender meat in aromatic spices and yogurt gravy.",
        time: "120 minutes",
        difficulty: "hard",
        servings: 6,
        ingredients: [
            "1kg mutton, cut into pieces",
            "2 onions, finely chopped",
            "2 tbsp ginger-garlic paste",
            "2 tbsp Kashmiri red chili powder",
            "1 tbsp fennel powder",
            "1 tbsp dry ginger powder",
            "1 tsp asafoetida",
            "4 cardamom pods",
            "4 cloves",
            "2 cinnamon sticks",
            "1 cup yogurt",
            "2 tbsp ghee",
            "Fresh cilantro for garnish",
            "Salt to taste"
        ],
        instructions: [
            "Marinate mutton in yogurt, ginger-garlic paste, and spices for 2 hours.",
            "Heat ghee and add whole spices until fragrant.",
            "Add onions and cook until golden brown.",
            "Add marinated mutton and cook on high heat until browned.",
            "Add water and simmer covered for 1.5 hours until meat is tender.",
            "Cook uncovered to reduce gravy to desired consistency.",
            "Garnish with fresh cilantro and serve with rice or naan."
        ],
        category: "indian"
    },
    {
        id: 40,
        name: "Mutton Biryani",
        description: "Flavorful rice dish with tender mutton pieces, aromatic spices, and caramelized onions.",
        time: "120 minutes",
        difficulty: "hard",
        servings: 8,
        ingredients: [
            "2 cups basmati rice",
            "1kg mutton, cut into pieces",
            "2 onions, thinly sliced",
            "4 tomatoes, chopped",
            "1/2 cup yogurt",
            "2 tbsp ginger-garlic paste",
            "2 tbsp biryani masala",
            "1 tsp turmeric",
            "1 tsp red chili powder",
            "1/2 cup mint leaves",
            "1/2 cup cilantro",
            "4 tbsp ghee",
            "4 cardamom pods",
            "4 cloves",
            "2 cinnamon sticks",
            "Saffron strands soaked in milk",
            "Salt to taste"
        ],
        instructions: [
            "Marinate mutton in yogurt, ginger-garlic paste, and spices for 3 hours.",
            "Cook rice with whole spices until 70% done, drain and set aside.",
            "Heat ghee and fry onions until golden brown, remove half for garnish.",
            "Add marinated mutton and cook until tender and browned.",
            "Layer half the rice, then mutton mixture, then remaining rice.",
            "Sprinkle fried onions, mint, cilantro, and saffron milk.",
            "Cover tightly and cook on low heat for 45 minutes.",
            "Let rest for 15 minutes before serving."
        ],
        category: "indian"
    },
    {
        id: 41,
        name: "Mutton Korma",
        description: "Slow-cooked lamb in rich cashew and yogurt gravy with aromatic spices.",
        time: "150 minutes",
        difficulty: "hard",
        servings: 6,
        ingredients: [
            "1kg mutton, cut into pieces",
            "1/2 cup cashews, soaked",
            "1 cup yogurt",
            "2 onions, finely chopped",
            "2 tbsp ginger-garlic paste",
            "1 tsp garam masala",
            "1/2 tsp turmeric",
            "1/2 tsp red chili powder",
            "4 cardamom pods",
            "4 cloves",
            "2 cinnamon sticks",
            "2 tbsp ghee",
            "Fresh cilantro for garnish",
            "Salt to taste"
        ],
        instructions: [
            "Marinate mutton in yogurt, ginger-garlic paste, and spices for 2 hours.",
            "Grind soaked cashews to a smooth paste.",
            "Heat ghee and add whole spices until fragrant.",
            "Add onions and cook until golden brown.",
            "Add marinated mutton and cook on high heat until browned.",
            "Add cashew paste and water, simmer covered for 2 hours until meat is tender.",
            "Cook uncovered to reduce gravy to desired consistency.",
            "Garnish with fresh cilantro and serve with rice or naan."
        ],
        category: "indian"
    },
    {
        id: 42,
        name: "Keema Pav",
        description: "Spicy minced mutton served with buttered bread rolls, a popular street food.",
        time: "60 minutes",
        difficulty: "medium",
        servings: 4,
        ingredients: [
            "500g minced mutton",
            "2 onions, finely chopped",
            "2 tomatoes, chopped",
            "2 tbsp ginger-garlic paste",
            "1 tsp garam masala",
            "1/2 tsp turmeric",
            "1/2 tsp red chili powder",
            "1 tsp coriander powder",
            "2 tbsp oil",
            "8 pav (bread rolls)",
            "Butter for toasting",
            "Fresh cilantro for garnish",
            "Salt to taste"
        ],
        instructions: [
            "Heat oil and sauté onions until golden brown.",
            "Add ginger-garlic paste and cook for 2 minutes.",
            "Add minced mutton and cook until browned.",
            "Add tomatoes and all spices, cook until oil separates.",
            "Simmer for 20-25 minutes until keema is cooked through.",
            "Toast pav with butter until golden brown.",
            "Garnish keema with fresh cilantro.",
            "Serve hot keema with buttered pav."
        ],
        category: "indian"
    },
    {
        id: 43,
        name: "Fish Curry",
        description: "Tangy fish curry with coconut or mustard-based gravy and aromatic spices.",
        time: "40 minutes",
        difficulty: "medium",
        servings: 4,
        ingredients: [
            "500g fish fillets (any white fish)",
            "2 onions, finely chopped",
            "2 tomatoes, chopped",
            "2 tbsp ginger-garlic paste",
            "1 cup coconut milk",
            "1 tsp mustard seeds",
            "1 tsp cumin seeds",
            "1 tsp turmeric",
            "1/2 tsp red chili powder",
            "Curry leaves",
            "2 tbsp oil",
            "Fresh cilantro for garnish",
            "Salt to taste"
        ],
        instructions: [
            "Heat oil and add mustard seeds, cumin seeds, and curry leaves.",
            "Add onions and cook until golden brown.",
            "Add ginger-garlic paste and cook for 2 minutes.",
            "Add tomatoes and cook until soft.",
            "Add coconut milk and spices, simmer for 5 minutes.",
            "Gently add fish fillets and cook for 8-10 minutes.",
            "Garnish with fresh cilantro and serve with rice."
        ],
        category: "indian"
    },
    {
        id: 44,
        name: "Fish Fry",
        description: "Crispy shallow or deep-fried marinated fish with aromatic spices.",
        time: "35 minutes",
        difficulty: "easy",
        servings: 4,
        ingredients: [
            "500g fish fillets",
            "2 tbsp ginger-garlic paste",
            "1 tbsp red chili powder",
            "1 tsp turmeric",
            "1 tsp garam masala",
            "2 tbsp rice flour",
            "2 tbsp semolina",
            "Curry leaves",
            "Oil for frying",
            "Lemon wedges for serving",
            "Salt to taste"
        ],
        instructions: [
            "Marinate fish in ginger-garlic paste, spices, and salt for 30 minutes.",
            "Mix rice flour and semolina in a plate.",
            "Coat marinated fish with the flour mixture.",
            "Heat oil for frying.",
            "Fry fish pieces until golden brown and crispy.",
            "Garnish with curry leaves and serve with lemon wedges."
        ],
        category: "indian"
    },
    {
        id: 45,
        name: "Prawn Masala",
        description: "Spicy prawns in rich onion-tomato gravy with aromatic spices.",
        time: "45 minutes",
        difficulty: "medium",
        servings: 4,
        ingredients: [
            "500g prawns, cleaned and deveined",
            "2 onions, finely chopped",
            "3 tomatoes, pureed",
            "2 tbsp ginger-garlic paste",
            "1 tsp garam masala",
            "1/2 tsp turmeric",
            "1/2 tsp red chili powder",
            "1 tsp coriander powder",
            "2 tbsp oil",
            "Fresh cilantro for garnish",
            "Salt to taste"
        ],
        instructions: [
            "Heat oil and sauté onions until golden brown.",
            "Add ginger-garlic paste and cook for 2 minutes.",
            "Add tomato puree and cook until oil separates.",
            "Add all spices and cook for 2-3 minutes.",
            "Add prawns and cook for 5-7 minutes until they turn pink.",
            "Garnish with fresh cilantro and serve with rice or naan."
        ],
        category: "indian"
    },
    {
        id: 46,
        name: "Prawn Biryani",
        description: "Aromatic biryani layered with juicy prawns and fragrant spices.",
        time: "75 minutes",
        difficulty: "hard",
        servings: 6,
        ingredients: [
            "2 cups basmati rice",
            "500g prawns, cleaned and deveined",
            "2 onions, thinly sliced",
            "3 tomatoes, chopped",
            "1/2 cup yogurt",
            "2 tbsp ginger-garlic paste",
            "2 tbsp biryani masala",
            "1 tsp turmeric",
            "1/2 cup mint leaves",
            "1/2 cup cilantro",
            "4 tbsp ghee",
            "4 cardamom pods",
            "4 cloves",
            "2 cinnamon sticks",
            "Saffron strands soaked in milk",
            "Salt to taste"
        ],
        instructions: [
            "Marinate prawns in yogurt, ginger-garlic paste, and spices for 30 minutes.",
            "Cook rice with whole spices until 70% done, drain and set aside.",
            "Heat ghee and fry onions until golden brown, remove half for garnish.",
            "Add marinated prawns and cook for 3-4 minutes until pink.",
            "Layer half the rice, then prawn mixture, then remaining rice.",
            "Sprinkle fried onions, mint, cilantro, and saffron milk.",
            "Cover tightly and cook on low heat for 25 minutes.",
            "Let rest for 10 minutes before serving."
        ],
        category: "indian"
    },
    {
        id: 47,
        name: "Egg Curry",
        description: "Boiled eggs in spicy tomato-onion gravy with aromatic spices.",
        time: "35 minutes",
        difficulty: "easy",
        servings: 4,
        ingredients: [
            "6 eggs, hard-boiled and peeled",
            "2 onions, finely chopped",
            "2 tomatoes, pureed",
            "2 tbsp ginger-garlic paste",
            "1 tsp garam masala",
            "1/2 tsp turmeric",
            "1/2 tsp red chili powder",
            "1 tsp coriander powder",
            "2 tbsp oil",
            "Fresh cilantro for garnish",
            "Salt to taste"
        ],
        instructions: [
            "Heat oil and sauté onions until golden brown.",
            "Add ginger-garlic paste and cook for 2 minutes.",
            "Add tomato puree and cook until oil separates.",
            "Add all spices and cook for 2-3 minutes.",
            "Add boiled eggs and simmer for 5-7 minutes.",
            "Garnish with fresh cilantro and serve with rice or roti."
        ],
        category: "indian"
    },
    {
        id: 48,
        name: "Egg Bhurji",
        description: "Indian-style scrambled eggs with onions, tomatoes, and aromatic spices.",
        time: "20 minutes",
        difficulty: "easy",
        servings: 4,
        ingredients: [
            "6 eggs, beaten",
            "2 onions, finely chopped",
            "2 tomatoes, chopped",
            "2 green chilies, chopped",
            "1 tbsp ginger-garlic paste",
            "1 tsp garam masala",
            "1/2 tsp turmeric",
            "1/2 tsp red chili powder",
            "2 tbsp oil",
            "Fresh cilantro for garnish",
            "Salt to taste"
        ],
        instructions: [
            "Heat oil and sauté onions until translucent.",
            "Add green chilies and ginger-garlic paste, cook for 1 minute.",
            "Add tomatoes and cook until soft.",
            "Add all spices and cook for 1 minute.",
            "Add beaten eggs and scramble gently.",
            "Cook until eggs are set but still moist.",
            "Garnish with fresh cilantro and serve hot with bread or roti."
        ],
        category: "indian"
    },
    {
        id: 49,
        name: "Chicken Kebab",
        description: "Skewered and grilled chicken marinated in aromatic spices and yogurt.",
        time: "60 minutes",
        difficulty: "medium",
        servings: 4,
        ingredients: [
            "500g chicken breast, cut into cubes",
            "1 cup yogurt",
            "2 tbsp ginger-garlic paste",
            "1 tbsp garam masala",
            "1 tbsp red chili powder",
            "1 tsp turmeric",
            "1 tsp cumin powder",
            "1 tsp coriander powder",
            "2 tbsp oil",
            "Lemon juice",
            "Fresh mint chutney for serving",
            "Salt to taste"
        ],
        instructions: [
            "Marinate chicken in yogurt, ginger-garlic paste, and all spices for 2 hours.",
            "Thread marinated chicken onto skewers.",
            "Preheat grill or oven to 400°F (200°C).",
            "Brush kebabs with oil and grill for 15-20 minutes, turning occasionally.",
            "Brush with lemon juice and grill for 2 more minutes.",
            "Serve hot with mint chutney and onion rings."
        ],
        category: "indian"
    }
];

// Optional Google Image Search config (set to true and fill keys to enable)
const GOOGLE_CSE_ENABLED =👍 ; // set true to use Google Images
const GOOGLE_API_KEY = 😀; // provided API key
const GOOGLE_CX = "❓"; // provided Custom Search Engine ID

// Optional per-recipe image overrides (guaranteed hero images)
const RECIPE_IMAGE_OVERRIDES = {
    Biryani: 'https://wallpaperaccess.com/full/4622468.jpg',
    'Indian Butter Chicken': 'https://tse3.mm.bing.net/th/id/OIP.qPYL9PMR_QbzQMv9SXqtyAHaJr?rs=1&pid=ImgDetMain&o=7&rm=3',
    'Palak Paneer': 'https://tse4.mm.bing.net/th/id/OIP.hEfZBsmALqU0q7jfii5LyQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    'Malai Kofta': 'https://www.cookwithmanali.com/wp-content/uploads/2020/03/Malai-Kofta-676x1024.jpg',
    'Tandoori Chicken': 'https://tse2.mm.bing.net/th/id/OIP.TpBm-uyMAoFZ1Bp__yGw-gHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
    'Chocolate Cake': 'https://bing.com/th?id=OSK.bd53214816ada5e307a20977096d24ec',
    'Spaghetti Carbonara': 'https://bing.com/th?id=OSK.1ef0ff67be046806c5080f55c1124fb4',
    'Chicken Tikka Masala': 'https://tse3.mm.bing.net/th/id/OIP.-U0IntkoCRrWQ9ST8SceqwHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3',
    'Caesar Salad': 'https://bing.com/th?id=OSK.63308c0ef1c6816689f20e360e513e44',
    'Paneer Butter Masala': 'https://tse2.mm.bing.net/th/id/OIP.8QZQZQZQZQZQZQZQZQZQZQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    'Chole (Chickpea Curry)': 'https://tse1.mm.bing.net/th/id/OIP.9QZQZQZQZQZQZQZQZQZQZQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    'Rajma (Kidney Bean Curry)': 'https://tse3.mm.bing.net/th/id/OIP.0QZQZQZQZQZQZQZQZQZQZQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    'Aloo Gobi (Potato & Cauliflower)': 'https://tse4.mm.bing.net/th/id/OIP.1QZQZQZQZQZQZQZQZQZQZQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    'Veg Biryani': 'https://tse5.mm.bing.net/th/id/OIP.2QZQZQZQZQZQZQZQZQZQZQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    'Dal Tadka / Dal Fry': 'https://tse6.mm.bing.net/th/id/OIP.3QZQZQZQZQZQZQZQZQZQZQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    'Baingan Bharta (Smoked Eggplant Curry)': 'https://tse7.mm.bing.net/th/id/OIP.4QZQZQZQZQZQZQZQZQZQZQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    'Idli Sambar': 'https://tse8.mm.bing.net/th/id/OIP.5QZQZQZQZQZQZQZQZQZQZQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    'Veg Pulao': 'https://tse9.mm.bing.net/th/id/OIP.6QZQZQZQZQZQZQZQZQZQZQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    'Bhindi Masala (Okra Curry)': 'https://tse0.mm.bing.net/th/id/OIP.7QZQZQZQZQZQZQZQZQZQZQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    'Veg Manchurian': 'https://tse1.mm.bing.net/th/id/OIP.8QZQZQZQZQZQZQZQZQZQZQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    'Stuffed Paratha (Aloo, Paneer, or Gobi)': 'https://tse2.mm.bing.net/th/id/OIP.9QZQZQZQZQZQZQZQZQZQZQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    'Chicken 65': 'https://tse3.mm.bing.net/th/id/OIP.3QZQZQZQZQZQZQZQZQZQZQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    'Mutton Rogan Josh': 'https://tse4.mm.bing.net/th/id/OIP.4QZQZQZQZQZQZQZQZQZQZQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    'Mutton Biryani': 'https://tse5.mm.bing.net/th/id/OIP.5QZQZQZQZQZQZQZQZQZQZQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    'Mutton Korma': 'https://tse6.mm.bing.net/th/id/OIP.6QZQZQZQZQZQZQZQZQZQZQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    'Keema Pav': 'https://tse7.mm.bing.net/th/id/OIP.7QZQZQZQZQZQZQZQZQZQZQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    'Fish Curry': 'https://tse8.mm.bing.net/th/id/OIP.8QZQZQZQZQZQZQZQZQZQZQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    'Fish Fry': 'https://tse9.mm.bing.net/th/id/OIP.9QZQZQZQZQZQZQZQZQZQZQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    'Prawn Masala': 'https://tse0.mm.bing.net/th/id/OIP.0QZQZQZQZQZQZQZQZQZQZQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    'Prawn Biryani': 'https://tse1.mm.bing.net/th/id/OIP.1QZQZQZQZQZQZQZQZQZQZQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    'Egg Curry': 'https://tse2.mm.bing.net/th/id/OIP.2QZQZQZQZQZQZQZQZQZQZQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    'Egg Bhurji': 'https://tse3.mm.bing.net/th/id/OIP.3QZQZQZQZQZQZQZQZQZQZQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    'Chicken Kebab': 'https://tse4.mm.bing.net/th/id/OIP.4QZQZQZQZQZQZQZQZQZQZQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',

};

// Persisted user overrides for recipe image URLs
const USER_IMAGE_OVERRIDES_KEY = 'userRecipeImageUrls';
function loadUserImageOverrides() {
    try {
        const raw = localStorage.getItem(USER_IMAGE_OVERRIDES_KEY);
        if (!raw) return;
        const map = JSON.parse(raw);
        if (map && typeof map === 'object') {
            recipes.forEach(r => {
                const override = map[String(r.id)];
                if (typeof override === 'string' && override.trim() !== '') {
                    r.imageUrl = override;
                }
            });
        }
    } catch (_) { /* ignore */ }
}

function saveUserImageOverride(recipeId, url) {
    try {
        const raw = localStorage.getItem(USER_IMAGE_OVERRIDES_KEY);
        const map = raw ? JSON.parse(raw) : {};
        map[String(recipeId)] = url;
        localStorage.setItem(USER_IMAGE_OVERRIDES_KEY, JSON.stringify(map));
    } catch (_) { /* ignore */ }
}

function removeUserImageOverride(recipeId) {
    try {
        const raw = localStorage.getItem(USER_IMAGE_OVERRIDES_KEY);
        const map = raw ? JSON.parse(raw) : {};
        delete map[String(recipeId)];
        localStorage.setItem(USER_IMAGE_OVERRIDES_KEY, JSON.stringify(map));
    } catch (_) { /* ignore */ }
}

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const recipesContainer = document.getElementById('recipesContainer');
const recipeModal = document.getElementById('recipeModal');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.querySelector('.close');
const popularTags = document.querySelectorAll('.tag');

// Live region for announcing results
const resultsStatus = document.createElement('div');
resultsStatus.id = 'resultsStatus';
resultsStatus.setAttribute('role', 'status');
resultsStatus.setAttribute('aria-live', 'polite');
resultsStatus.style.cssText = 'position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;';
document.body.appendChild(resultsStatus);

// Keep track of focus for modal
let previouslyFocusedElement = null;

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    showSkeletons(6);
    setupEventListeners();
    // Load any user-provided image URL overrides before first render
    loadUserImageOverrides();
    setTimeout(() => {
        displayRecipes(recipes);
    }, 400);
    
    // Add admin keyboard shortcut (Ctrl+Shift+A)
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.shiftKey && e.key === 'A') {
            e.preventDefault();
            showAdminLogin();
        }
    });
    
    // Show admin indicator if user is admin
    if (isAdmin()) {
        showAdminIndicator();
    }
});

// Setup event listeners
function setupEventListeners() {
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
    // Debounced live search as you type
    searchInput.addEventListener('input', debounce(handleSearch, 250));
    
    popularTags.forEach(tag => {
        tag.setAttribute('role', 'button');
        tag.setAttribute('tabindex', '0');
        tag.addEventListener('click', function() {
            const category = this.getAttribute('data-recipe');
            searchInput.value = category;
            handleSearch();
        });
        tag.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    closeBtn.addEventListener('click', closeModal);
    recipeModal.addEventListener('click', function(e) {
        if (e.target === recipeModal) {
            closeModal();
        }
    });

    // Close on Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isModalOpen()) {
            e.preventDefault();
            closeModal();
        }
    });

    // Keyboard open for cards via event delegation
    recipesContainer.addEventListener('keydown', function(e) {
        const card = e.target.closest('.recipe-card');
        if (!card) return;
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const id = card.getAttribute('data-id');
            if (id) {
                showRecipeDetail(Number(id));
            }
        }
    });
}

// Handle search functionality
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    showSkeletons(6);
    
    setTimeout(() => {
        if (searchTerm === '') {
            displayRecipes(recipes);
            return;
        }
        const filteredRecipes = recipes.filter(recipe => 
            recipe.name.toLowerCase().includes(searchTerm) ||
            recipe.description.toLowerCase().includes(searchTerm) ||
            recipe.category.toLowerCase().includes(searchTerm) ||
            recipe.ingredients.some(ingredient => 
                ingredient.toLowerCase().includes(searchTerm)
            )
        );
        displayRecipes(filteredRecipes);
    }, 300);
}

// Display recipes in the grid
function displayRecipes(recipesToShow) {
    if (recipesToShow.length === 0) {
        recipesContainer.innerHTML = `
            <div class="loading">
                <h3>No recipes found</h3>
                <p>Try searching for something else!</p>
            </div>
        `;
        updateResultsStatus(0);
        return;
    }
    
    recipesContainer.innerHTML = recipesToShow.map(recipe => `
        <div class="recipe-card" role="button" tabindex="0" aria-label="Open ${recipe.name}, ${recipe.time}" data-id="${recipe.id}" onclick="showRecipeDetail(${recipe.id})">
            <div class="recipe-image" data-recipe-id="${recipe.id}" data-bg="${getRecipeImageUrl(recipe)}">
                <h3 class="recipe-title">${recipe.name}</h3>
            </div>
            <div class="recipe-content">
                <p class="recipe-description">${recipe.description}</p>
                <div class="recipe-meta">
                    <span class="recipe-time">
                        <i class="fas fa-clock"></i>
                        ${recipe.time}
                    </span>
                    <span class="recipe-difficulty difficulty-${recipe.difficulty}">
                        ${recipe.difficulty.charAt(0).toUpperCase() + recipe.difficulty.slice(1)}
                    </span>
                </div>
            </div>
        </div>
    `).join('');

    updateResultsStatus(recipesToShow.length);
    applyInitialCardBackgrounds();
    hydrateCardImages(recipesToShow);
}

// Show recipe detail in modal
function showRecipeDetail(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;
    
    modalContent.innerHTML = `
        <div id="modalHero" class="recipe-hero" data-bg="${getRecipeImageUrl(recipe)}">
            <h2 id="recipeTitle" class="recipe-hero-title">${recipe.name}</h2>
        </div>
        <div class="recipe-detail">
            <div class="recipe-detail-header">
                <div class="recipe-detail-meta">
                    <span><i class="fas fa-clock"></i> ${recipe.time}</span>
                    <span><i class="fas fa-users"></i> 
                        <span id="currentServings">${recipe.servings}</span> servings
                        <button id="adjustServingsBtn" class="btn-small btn-secondary" style="margin-left: 8px;">
                            <i class="fas fa-edit"></i> Adjust
                        </button>
                    </span>
                    <span><i class="fas fa-signal"></i> ${recipe.difficulty.charAt(0).toUpperCase() + recipe.difficulty.slice(1)}</span>
                </div>
                <div id="servingsAdjuster" class="servings-adjuster" style="display: none; margin: 15px 0; padding: 15px; background: #f8f9fa; border-radius: 8px;">
                    <label for="newServingsInput">Number of servings:</label>
                    <div style="display: flex; align-items: center; gap: 10px; margin-top: 8px;">
                        <input type="number" id="newServingsInput" min="1" max="20" value="${recipe.servings}" style="width: 80px; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
                        <button id="applyServingsBtn" class="btn-small">Apply</button>
                        <button id="cancelServingsBtn" class="btn-small btn-secondary">Cancel</button>
                    </div>
                </div>
                <p class="recipe-detail-description">${recipe.description}</p>
                <div class="image-url-controls" id="imageUrlControls" style="display: none;">
                    <label for="imageUrlInput"><i class="fas fa-image"></i> Image URL</label>
                    <div class="image-url-row">
                        <input type="url" id="imageUrlInput" placeholder="https://example.com/image.jpg" value="${(recipe.imageUrl || '').replace(/"/g, '&quot;')}">
                        <button id="saveImageUrlBtn" class="btn-small"><i class="fas fa-save"></i> Save</button>
                        <button id="resetImageUrlBtn" class="btn-small btn-secondary"><i class="fas fa-undo"></i> Reset</button>
                    </div>
                    <small class="helper-text">Paste a direct image link (jpg, png, webp). Saved per recipe.</small>
                </div>
            </div>
            
            <div class="recipe-detail-content">
                <div class="ingredients-section">
                    <h3><i class="fas fa-list"></i> Ingredients</h3>
                    <ul class="ingredients-list">
                        ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="instructions-section">
                    <h3><i class="fas fa-tasks"></i> Instructions</h3>
                    <ol class="instructions-list">
                        ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                    </ol>
                </div>
            </div>
        </div>
    `;

    previouslyFocusedElement = document.activeElement;
    recipeModal.classList.remove('hide');
    recipeModal.classList.add('show');
    recipeModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    setupFocusTrap();
    // Focus close button for accessibility
    closeBtn.setAttribute('tabindex', '0');
    closeBtn.focus();

    // Hydrate modal image from Google if enabled
    hydrateModalImage(recipe);
    // Apply initial hero background with preloading and fallback
    applyInitialHeroBackground();

    // Check if user is admin and show image controls accordingly
    const imageUrlControls = document.getElementById('imageUrlControls');
    if (isAdmin()) {
        imageUrlControls.style.display = 'block';
    }

    // Hook up image URL controls (only for admins)
    const imageInput = document.getElementById('imageUrlInput');
    const saveBtn = document.getElementById('saveImageUrlBtn');
    const resetBtn = document.getElementById('resetImageUrlBtn');

    if (saveBtn && imageInput) {
        saveBtn.addEventListener('click', async () => {
            const url = (imageInput.value || '').trim();
            if (!url) {
                showNotification('Please enter an image URL.');
                return;
            }
            if (!isValidHttpUrl(url)) {
                showNotification('Invalid URL. Make sure it starts with http or https.');
                return;
            }
            try {
                await preloadImage(url);
            } catch (_) {
                showNotification('Could not load image. Please check the URL.');
                return;
            }
            saveUserImageOverride(recipe.id, url);
            recipe.imageUrl = url;
            const hero = document.getElementById('modalHero');
            if (hero) hero.style.backgroundImage = `url('${url}')`;
            // Update corresponding card header background
            const header = recipesContainer.querySelector(`.recipe-image[data-recipe-id="${recipe.id}"]`);
            if (header) header.style.backgroundImage = `url('${url}')`;
            showNotification('Image saved for this recipe.');
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            removeUserImageOverride(recipe.id);
            delete recipe.imageUrl;
            const fallbackUrl = getRecipeImageUrl(recipe);
            const hero = document.getElementById('modalHero');
            if (hero) hero.style.backgroundImage = `url('${fallbackUrl}')`;
            const header = recipesContainer.querySelector(`.recipe-image[data-recipe-id="${recipe.id}"]`);
            if (header) header.style.backgroundImage = `url('${fallbackUrl}')`;
            if (imageInput) imageInput.value = '';
            showNotification('Reverted to default image.');
        });
    }

    // Hook up servings adjustment controls
    const adjustServingsBtn = document.getElementById('adjustServingsBtn');
    const servingsAdjuster = document.getElementById('servingsAdjuster');
    const newServingsInput = document.getElementById('newServingsInput');
    const applyServingsBtn = document.getElementById('applyServingsBtn');
    const cancelServingsBtn = document.getElementById('cancelServingsBtn');
    const currentServingsSpan = document.getElementById('currentServings');
    const ingredientsList = document.querySelector('.ingredients-list');

    if (adjustServingsBtn) {
        adjustServingsBtn.addEventListener('click', () => {
            servingsAdjuster.style.display = 'block';
            newServingsInput.focus();
        });
    }

    if (cancelServingsBtn) {
        cancelServingsBtn.addEventListener('click', () => {
            servingsAdjuster.style.display = 'none';
            newServingsInput.value = recipe.servings;
        });
    }

    if (applyServingsBtn && newServingsInput) {
        applyServingsBtn.addEventListener('click', () => {
            const newServings = parseInt(newServingsInput.value);
            if (newServings < 1 || newServings > 20) {
                showNotification('Please enter a number between 1 and 20.');
                return;
            }
            
            // Update servings display
            currentServingsSpan.textContent = newServings;
            
            // Update ingredients with adjusted quantities
            const adjustedIngredients = adjustIngredientsForServings(recipe.ingredients, recipe.servings, newServings);
            ingredientsList.innerHTML = adjustedIngredients.map(ingredient => `<li>${ingredient}</li>`).join('');
            
            // Update cooking time
            const adjustedTime = adjustTimeForServings(recipe.time, recipe.servings, newServings);
            const timeSpan = document.querySelector('.recipe-detail-meta span:first-child');
            if (timeSpan) {
                timeSpan.innerHTML = `<i class="fas fa-clock"></i> ${adjustedTime}`;
            }
            
            // Hide the adjuster
            servingsAdjuster.style.display = 'none';
            
            showNotification(`Adjusted recipe for ${newServings} servings!`);
        });
    }
}

// Close modal
function closeModal() {
    recipeModal.classList.remove('show');
    recipeModal.classList.add('hide');
    const onAnimEnd = () => {
        recipeModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        teardownFocusTrap();
        if (previouslyFocusedElement && previouslyFocusedElement.focus) {
            previouslyFocusedElement.focus();
        }
        recipeModal.removeEventListener('animationend', onAnimEnd);
    };
    recipeModal.addEventListener('animationend', onAnimEnd);
}

// Adjust cooking time based on servings
function adjustTimeForServings(originalTime, originalServings, newServings) {
    if (originalServings === newServings) return originalTime;
    
    const ratio = newServings / originalServings;
    
    // Handle different time formats
    const timePatterns = [
        // "X minutes" format
        /(\d+)\s+minutes?/i,
        // "X hours" format
        /(\d+)\s+hours?/i,
        // "X hours Y minutes" format
        /(\d+)\s+hours?\s+(\d+)\s+minutes?/i,
        // "X hours (including Y)" format
        /(\d+)\s+hours?\s*\(including\s+(\w+)\)/i,
        // "X minutes (including Y)" format
        /(\d+)\s+minutes?\s*\(including\s+(\w+)\)/i
    ];
    
    let adjustedTime = originalTime;
    
    // Handle "X hours Y minutes" format
    const hoursMinutesMatch = originalTime.match(/(\d+)\s+hours?\s+(\d+)\s+minutes?/i);
    if (hoursMinutesMatch) {
        const hours = parseInt(hoursMinutesMatch[1]);
        const minutes = parseInt(hoursMinutesMatch[2]);
        const totalMinutes = hours * 60 + minutes;
        const newTotalMinutes = Math.round(totalMinutes * ratio);
        const newHours = Math.floor(newTotalMinutes / 60);
        const newMinutes = newTotalMinutes % 60;
        
        if (newHours > 0 && newMinutes > 0) {
            adjustedTime = `${newHours} hour${newHours > 1 ? 's' : ''} ${newMinutes} minute${newMinutes > 1 ? 's' : ''}`;
        } else if (newHours > 0) {
            adjustedTime = `${newHours} hour${newHours > 1 ? 's' : ''}`;
        } else {
            adjustedTime = `${newMinutes} minute${newMinutes > 1 ? 's' : ''}`;
        }
        return adjustedTime;
    }
    
    // Handle "X hours (including Y)" format
    const hoursIncludingMatch = originalTime.match(/(\d+)\s+hours?\s*\(including\s+(\w+)\)/i);
    if (hoursIncludingMatch) {
        const hours = parseInt(hoursIncludingMatch[1]);
        const including = hoursIncludingMatch[2];
        const newHours = Math.round(hours * ratio);
        adjustedTime = `${newHours} hour${newHours > 1 ? 's' : ''} (including ${including})`;
        return adjustedTime;
    }
    
    // Handle "X minutes (including Y)" format
    const minutesIncludingMatch = originalTime.match(/(\d+)\s+minutes?\s*\(including\s+(\w+)\)/i);
    if (minutesIncludingMatch) {
        const minutes = parseInt(minutesIncludingMatch[1]);
        const including = minutesIncludingMatch[2];
        const newMinutes = Math.round(minutes * ratio);
        adjustedTime = `${newMinutes} minute${newMinutes > 1 ? 's' : ''} (including ${including})`;
        return adjustedTime;
    }
    
    // Handle simple "X minutes" format
    const minutesMatch = originalTime.match(/(\d+)\s+minutes?/i);
    if (minutesMatch) {
        const minutes = parseInt(minutesMatch[1]);
        const newMinutes = Math.round(minutes * ratio);
        adjustedTime = `${newMinutes} minute${newMinutes > 1 ? 's' : ''}`;
        return adjustedTime;
    }
    
    // Handle simple "X hours" format
    const hoursMatch = originalTime.match(/(\d+)\s+hours?/i);
    if (hoursMatch) {
        const hours = parseInt(hoursMatch[1]);
        const newHours = Math.round(hours * ratio);
        adjustedTime = `${newHours} hour${newHours > 1 ? 's' : ''}`;
        return adjustedTime;
    }
    
    // If no pattern matches, return original time
    return originalTime;
}

// Adjust ingredient quantities based on servings
function adjustIngredientsForServings(ingredients, originalServings, newServings) {
    if (originalServings === newServings) return ingredients;
    
    const ratio = newServings / originalServings;
    
    return ingredients.map(ingredient => {
        let adjustedIngredient = ingredient;
        
        // Handle fractions (1/2, 1/4, 3/4, etc.)
        adjustedIngredient = adjustedIngredient.replace(/(\d+)\/(\d+)/g, (match, numerator, denominator) => {
            const value = parseFloat(numerator) / parseFloat(denominator);
            const newValue = value * ratio;
            
            if (newValue < 1 && newValue > 0) {
                return decimalToFraction(newValue);
            } else {
                return Math.round(newValue * 10) / 10;
            }
        });
        
        // Handle decimals (0.5, 1.5, etc.)
        adjustedIngredient = adjustedIngredient.replace(/(\d+\.\d+)/g, (match, number) => {
            const value = parseFloat(number);
            const newValue = value * ratio;
            
            if (newValue < 1 && newValue > 0) {
                return decimalToFraction(newValue);
            } else {
                return Math.round(newValue * 10) / 10;
            }
        });
        
        // Handle whole numbers followed by units (2 cups, 3 tbsp, etc.)
        adjustedIngredient = adjustedIngredient.replace(/(\d+)\s+(cup|tbsp|tsp|g|kg|ml|l|oz|lb|pound|inch|cm|slice|piece|clove|pod|stick|fillet|breast|thigh|leg|wing|head|bunch|sprig|leaf|leaves|wedge|segment|dash|pinch|handful|can|jar|packet|sachet|envelope|cube|block|sheet|roll|loaf|bag|box|bottle|container|serving|portion|chunk|strip|ring|round|spear|floret|stalk|stem|branch|twig|bundle|cluster|group|set|pair|couple|dozen|half|quarter|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth)/gi, (match, number, unit) => {
            const value = parseFloat(number);
            const newValue = value * ratio;
            
            if (newValue < 1 && newValue > 0) {
                return decimalToFraction(newValue) + ' ' + unit;
            } else {
                return Math.round(newValue * 10) / 10 + ' ' + unit;
            }
        });
        
        // Handle whole numbers at the beginning of ingredient (2 onions, 3 tomatoes, etc.)
        adjustedIngredient = adjustedIngredient.replace(/^(\d+)\s+/, (match, number) => {
            const value = parseFloat(number);
            const newValue = value * ratio;
            
            if (newValue < 1 && newValue > 0) {
                return decimalToFraction(newValue) + ' ';
            } else {
                return Math.round(newValue * 10) / 10 + ' ';
            }
        });
        
        return adjustedIngredient;
    });
}

// Check if current user is admin
function isAdmin() {
    // You can implement different admin detection methods:
    
    // Method 1: Check for admin parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('admin') === 'true') {
        return true;
    }
    
    // Method 2: Check localStorage for admin flag
    if (localStorage.getItem('isAdmin') === 'true') {
        return true;
    }
    
    // Method 3: Check for specific admin password/key
    if (localStorage.getItem('adminKey') === 'recipeapp2024') {
        return true;
    }
    
    // Method 4: Check for admin cookie
    if (document.cookie.includes('admin=true')) {
        return true;
    }
    
    return false;
}

// Show admin indicator in header
function showAdminIndicator() {
    const header = document.querySelector('.header-content');
    if (header && !document.getElementById('adminIndicator')) {
        const adminIndicator = document.createElement('div');
        adminIndicator.id = 'adminIndicator';
        adminIndicator.innerHTML = '<i class="fas fa-shield-alt"></i> Admin Mode';
        adminIndicator.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            background: linear-gradient(45deg, #ef4444, #dc2626);
            color: white;
            padding: 5px 10px;
            border-radius: 15px;
            font-size: 0.75rem;
            font-weight: 600;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        `;
        header.style.position = 'relative';
        header.appendChild(adminIndicator);
    }
}

// Show admin login modal
function showAdminLogin() {
    const adminPassword = prompt('Enter admin password:');
    if (adminPassword === 'recipeapp2024') {
        localStorage.setItem('adminKey', adminPassword);
        showNotification('Admin access granted!');
        // Refresh the page to show admin controls
        setTimeout(() => {
            location.reload();
        }, 1000);
    } else if (adminPassword !== null) {
        showNotification('Invalid admin password!');
    }
}

// Convert decimal to fraction for better readability
function decimalToFraction(decimal) {
    const fractions = [
        { decimal: 0.125, fraction: '1/8' },
        { decimal: 0.25, fraction: '1/4' },
        { decimal: 0.33, fraction: '1/3' },
        { decimal: 0.375, fraction: '3/8' },
        { decimal: 0.5, fraction: '1/2' },
        { decimal: 0.625, fraction: '5/8' },
        { decimal: 0.67, fraction: '2/3' },
        { decimal: 0.75, fraction: '3/4' },
        { decimal: 0.875, fraction: '7/8' }
    ];
    
    for (const frac of fractions) {
        if (Math.abs(decimal - frac.decimal) < 0.05) {
            return frac.fraction;
        }
    }
    
    // If no close fraction found, return rounded decimal
    return Math.round(decimal * 10) / 10;
}

// Add some interactive features
function addRecipeToFavorites(recipeId) {
    let favorites = JSON.parse(localStorage.getItem('recipeFavorites') || '[]');
    if (!favorites.includes(recipeId)) {
        favorites.push(recipeId);
        localStorage.setItem('recipeFavorites', JSON.stringify(favorites));
        showNotification('Recipe added to favorites!');
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #ef4444, #38bdf8);
        color: #ffffff;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
        border: 1px solid rgba(255,255,255,0.25);
        box-shadow: 0 10px 30px rgba(239,68,68,0.35);
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add CSS animation for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    .servings-adjuster {
        border: 1px solid #e2e8f0;
        background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .servings-adjuster label {
        font-weight: 600;
        color: #374151;
        display: block;
        margin-bottom: 8px;
    }
    
    .servings-adjuster input[type="number"] {
        border: 2px solid #d1d5db;
        transition: border-color 0.2s ease;
    }
    
    .servings-adjuster input[type="number"]:focus {
        border-color: #3b82f6;
        outline: none;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
    
    .btn-small {
        padding: 6px 12px;
        font-size: 0.875rem;
        border-radius: 4px;
        border: 1px solid #d1d5db;
        background: #ffffff;
        color: #374151;
        cursor: pointer;
        transition: all 0.2s ease;
    }
    
    .btn-small:hover {
        background: #f3f4f6;
        border-color: #9ca3af;
    }
    
    .btn-small.btn-secondary {
        background: #f3f4f6;
        color: #6b7280;
    }
    
    .btn-small.btn-secondary:hover {
        background: #e5e7eb;
        color: #374151;
    }
`;
document.head.appendChild(style);

// ---------- Utilities & UI helpers ----------
function debounce(fn, delay) {
    let t;
    return function(...args) {
        clearTimeout(t);
        t = setTimeout(() => fn.apply(this, args), delay);
    };
}

function showSkeletons(count) {
    const skeletons = Array.from({ length: count }).map(() => `
        <div class="skeleton-card">
            <div class="skeleton-media"></div>
            <div class="skeleton-content">
                <div class="skeleton-line long"></div>
                <div class="skeleton-line medium"></div>
                <div class="skeleton-line short"></div>
            </div>
        </div>
    `).join('');
    recipesContainer.innerHTML = skeletons;
}

function updateResultsStatus(count) {
    resultsStatus.textContent = `Showing ${count} recipe${count === 1 ? '' : 's'}`;
}

function isModalOpen() {
    return recipeModal.style.display === 'block';
}

function getRecipeImageUrl(recipe) {
    // Prefer explicit per-recipe URL if provided (including user overrides)
    if (recipe && typeof recipe.imageUrl === 'string' && recipe.imageUrl.trim() !== '') {
        return recipe.imageUrl;
    }
    if (recipe && typeof recipe.image === 'string' && recipe.image.trim() !== '') {
        return recipe.image;
    }
    // Then check overrides map
    if (RECIPE_IMAGE_OVERRIDES[recipe.name]) {
        return RECIPE_IMAGE_OVERRIDES[recipe.name];
    }
    // Fallback to Unsplash
    const base = 'https://source.unsplash.com/featured/800x600';
    const query = encodeURIComponent(`${recipe.name},${recipe.category || ''},food,recipe,plate`);
    return `${base}?${query}`;
}

function preloadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(url);
        img.onerror = reject;
        img.src = url;
    });
}

function isValidHttpUrl(maybeUrl) {
    try {
        const u = new URL(maybeUrl);
        return u.protocol === 'http:' || u.protocol === 'https:';
    } catch (_) {
        return false;
    }
}

function applyInitialCardBackgrounds() {
    const headers = recipesContainer.querySelectorAll('.recipe-image[data-bg]');
    headers.forEach(async (el) => {
        const url = el.getAttribute('data-bg');
        try {
            await preloadImage(url);
            el.style.backgroundImage = `url('${url}')`;
        } catch (_) {
            el.style.backgroundImage = "url('https://source.unsplash.com/featured/800x600?food,plate')";
        }
    });
}

function applyInitialHeroBackground() {
    const hero = document.getElementById('modalHero');
    if (!hero) return;
    const url = hero.getAttribute('data-bg');
    preloadImage(url)
        .then(() => { hero.style.backgroundImage = `url('${url}')`; })
        .catch(() => { hero.style.backgroundImage = "url('https://source.unsplash.com/featured/1200x800?food,plate')"; });
}

async function fetchGoogleImageUrl(query) {
    if (!GOOGLE_CSE_ENABLED || !GOOGLE_API_KEY || !GOOGLE_CX) return null;
    const params = new URLSearchParams({
        q: query,
        searchType: 'image',
        num: '1',
        safe: 'active',
        imgSize: 'large',
        key: GOOGLE_API_KEY,
        cx: GOOGLE_CX
    });
    const endpoint = `https://www.googleapis.com/customsearch/v1?${params.toString()}`;
    try {
        const res = await fetch(endpoint);
        if (!res.ok) return null;
        const data = await res.json();
        const item = data.items && data.items[0];
        return item ? item.link : null;
    } catch (_) {
        return null;
    }
}

function hydrateCardImages(recipesToShow) {
    if (!GOOGLE_CSE_ENABLED || !GOOGLE_API_KEY || !GOOGLE_CX) return;
    recipesToShow.forEach(async (recipe) => {
        // Do not override explicit images or overrides
        if ((recipe && ((typeof recipe.imageUrl === 'string' && recipe.imageUrl.trim() !== '') || (typeof recipe.image === 'string' && recipe.image.trim() !== ''))) || RECIPE_IMAGE_OVERRIDES[recipe.name]) {
            return;
        }
        const query = recipe.name.toLowerCase() === 'biryani'
            ? 'biryani rice indian dish'
            : `${recipe.name} ${recipe.category || ''} dish`;
        const url = await fetchGoogleImageUrl(query);
        if (url) {
            const header = recipesContainer.querySelector(`.recipe-image[data-recipe-id="${recipe.id}"]`);
            if (header) header.style.backgroundImage = `url('${url}')`;
        }
    });
}

async function hydrateModalImage(recipe) {
    if (!GOOGLE_CSE_ENABLED || !GOOGLE_API_KEY || !GOOGLE_CX) return;
    // Do not override explicit images or overrides
    if ((recipe && ((typeof recipe.imageUrl === 'string' && recipe.imageUrl.trim() !== '') || (typeof recipe.image === 'string' && recipe.image.trim() !== ''))) || RECIPE_IMAGE_OVERRIDES[recipe.name]) {
        return;
    }
    const query = recipe.name.toLowerCase() === 'biryani'
        ? 'biryani rice indian dish'
        : `${recipe.name} ${recipe.category || ''} dish`;
    const url = await fetchGoogleImageUrl(query);
    if (url) {
        const hero = document.getElementById('modalHero');
        if (hero) hero.style.backgroundImage = `url('${url}')`;
    }
}

function setupFocusTrap() {
    const selectors = [
        'a[href]', 'area[href]', 'input:not([disabled])', 'select:not([disabled])',
        'textarea:not([disabled])', 'button:not([disabled])', '[tabindex]:not([tabindex="-1"])'
    ];
    const focusable = recipeModal.querySelectorAll(selectors.join(','));
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    function trap(e) {
        if (e.key !== 'Tab') return;
        if (e.shiftKey) {
            if (document.activeElement === first) {
                e.preventDefault();
                last.focus();
            }
        } else {
            if (document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        }
    }

    recipeModal.__trapHandler = trap;
    recipeModal.addEventListener('keydown', trap);
}

function teardownFocusTrap() {
    if (recipeModal.__trapHandler) {
        recipeModal.removeEventListener('keydown', recipeModal.__trapHandler);
        delete recipeModal.__trapHandler;
    }
}
