import { CategoryItemProps } from "@/types/category-type";
import { MealItemProps } from "@/types/meal-type";

export const categoriesData: CategoryItemProps[] = [
  {
    id: "c1",
    title: "Italian",
    color: "#f5428d",
    imageUrl:
      "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "c2",
    title: "Quick & Easy",
    color: "#f54242",
    imageUrl:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "c3",
    title: "Hamburgers",
    color: "#f5a442",
    imageUrl:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "c4",
    title: "German",
    color: "#f5d142",
    imageUrl:
      "https://images.unsplash.com/photo-1548781365-20c85526b3a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdlcm1hbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "c5",
    title: "Light & Lovely",
    color: "#368dff",
    imageUrl:
      "https://images.unsplash.com/photo-1421622548261-c45bfe178854?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "c6",
    title: "Exotic",
    color: "#41d95d",
    imageUrl:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "c7",
    title: "Breakfast",
    color: "#9eecff",
    imageUrl:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "c8",
    title: "Asian",
    color: "#b9ffb0",
    imageUrl:
      "https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "c9",
    title: "French",
    color: "#ffc7ff",
    imageUrl:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "c10",
    title: "Summer",
    color: "#47fced",
    imageUrl:
      "https://images.unsplash.com/photo-1530062845289-9109b2c9c868?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VtbWVyJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "c11",
    title: "Mexican",
    color: "#ff6b6b",
    imageUrl:
      "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "c12",
    title: "Indian",
    color: "#ff9f1c",
    imageUrl:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "c13",
    title: "Mediterranean",
    color: "#2ec4b6",
    imageUrl:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=900&auto=format&fit=crop&q=60",
  },
  {
    id: "c14",
    title: "Seafood",
    color: "#4ea8de",
    imageUrl:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "c15",
    title: "Desserts",
    color: "#ff70a6",
    imageUrl:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "c16",
    title: "Vegetarian",
    color: "#7bd389",
    imageUrl:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "c17",
    title: "BBQ & Grill",
    color: "#c8553d",
    imageUrl:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=900&auto=format&fit=crop&q=60",
  },
  {
    id: "c18",
    title: "Soups & Stews",
    color: "#8d99ae",
    imageUrl:
      "https://images.unsplash.com/photo-1543353071-087092ec393a?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "c19",
    title: "Salads",
    color: "#70d6ff",
    imageUrl:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&auto=format&fit=crop&q=60",
  },
  {
    id: "c20",
    title: "Drinks",
    color: "#a78bfa",
    imageUrl:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&auto=format&fit=crop&q=60",
  },
];

export const mealsData: MealItemProps[] = [
  // ✅ c1 Italian, c2 Quick & Easy
  {
    id: "m1",
    categoryIds: ["c1", "c2"],
    title: "Spaghetti with Tomato Sauce",
    affordability: "affordable",
    complexity: "simple",
    imageUrl:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&auto=format&fit=crop&q=60",
    duration: 20,
    ingredients: [
      { name: "Spaghetti", amount: 250, unit: "g" },
      { name: "Tomatoes", amount: 4, unit: "" },
      { name: "Olive Oil", amount: 1, unit: "tbsp" },
      { name: "Onion", amount: 1, unit: "" },
      { name: "Garlic", amount: 2, unit: "cloves" },
      { name: "Salt", amount: 0, unit: "to taste" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1722686442288-11822840ead5?w=800&auto=format&fit=crop&q=60",
        description: "Boil water and cook spaghetti.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1604909053196-0f148bdff3e7?w=800&auto=format&fit=crop&q=60",
        description: "Chop onion and garlic.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=800&auto=format&fit=crop&q=60",
        description: "Simmer tomatoes and combine with pasta.",
      },
    ],
    isGlutenFree: false,
    isVegan: true,
    isVegetarian: true,
    isLactoseFree: true,
  },

  // ✅ c2 Quick & Easy
  {
    id: "m2",
    categoryIds: ["c2"],
    title: "Grilled Chicken Breast",
    affordability: "pricey",
    complexity: "simple",
    imageUrl:
      "https://images.unsplash.com/photo-1604908177522-42944e6b8b1d?w=800&auto=format&fit=crop&q=60",
    duration: 30,
    ingredients: [
      { name: "Chicken Breast", amount: 2, unit: "" },
      { name: "Olive Oil", amount: 1, unit: "tbsp" },
      { name: "Salt", amount: 0, unit: "to taste" },
      { name: "Pepper", amount: 0, unit: "to taste" },
      { name: "Paprika", amount: 1, unit: "tsp" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1604908177522-42944e6b8b1d?w=800&auto=format&fit=crop&q=60",
        description: "Season the chicken.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&auto=format&fit=crop&q=60",
        description: "Preheat a grill pan.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop&q=60",
        description: "Grill both sides until cooked through.",
      },
    ],
    isGlutenFree: true,
    isVegan: false,
    isVegetarian: false,
    isLactoseFree: true,
  },

  // ✅ c3 Hamburgers
  {
    id: "m3",
    categoryIds: ["c3"],
    title: "Classic Beef Burger",
    affordability: "pricey",
    complexity: "challenging",
    imageUrl:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop&q=60",
    duration: 45,
    ingredients: [
      { name: "Beef Patty", amount: 2, unit: "" },
      { name: "Burger Buns", amount: 2, unit: "" },
      { name: "Cheese", amount: 2, unit: "slices" },
      { name: "Lettuce", amount: 0, unit: "a few leaves" },
      { name: "Tomato", amount: 1, unit: "" },
      { name: "Onion", amount: 0.5, unit: "" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop&q=60",
        description: "Form patties and season.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1550317138-10000687a72b?w=800&auto=format&fit=crop&q=60",
        description: "Toast the buns lightly.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=60",
        description: "Assemble with toppings and serve.",
      },
    ],
    isGlutenFree: false,
    isVegan: false,
    isVegetarian: false,
    isLactoseFree: false,
  },

  // ✅ c16 Vegetarian, c5 Light & Lovely
  {
    id: "m4",
    categoryIds: ["c16", "c5"],
    title: "Vegan Buddha Bowl",
    affordability: "affordable",
    complexity: "simple",
    imageUrl:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60",
    duration: 25,
    ingredients: [
      { name: "Quinoa", amount: 1, unit: "cup" },
      { name: "Chickpeas", amount: 1, unit: "can" },
      { name: "Avocado", amount: 1, unit: "" },
      { name: "Spinach", amount: 2, unit: "cups" },
      { name: "Carrots", amount: 2, unit: "" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=60",
        description: "Cook quinoa and prep vegetables.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=60",
        description: "Toast chickpeas with seasoning.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60",
        description: "Assemble and drizzle dressing.",
      },
    ],
    isGlutenFree: true,
    isVegan: true,
    isVegetarian: true,
    isLactoseFree: true,
  },

  // ✅ c1 Italian, c13 Mediterranean
  {
    id: "m5",
    categoryIds: ["c1", "c13"],
    title: "Creamy Mushroom Risotto",
    affordability: "luxurious",
    complexity: "hard",
    imageUrl:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=60",
    duration: 60,
    ingredients: [
      { name: "Arborio Rice", amount: 1.5, unit: "cups" },
      { name: "Mushrooms", amount: 250, unit: "g" },
      { name: "Vegetable Stock", amount: 4, unit: "cups" },
      { name: "Butter", amount: 2, unit: "tbsp" },
      { name: "Parmesan Cheese", amount: 0.5, unit: "cup" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&auto=format&fit=crop&q=60",
        description: "Warm stock and sauté mushrooms.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=60",
        description: "Add rice and stir while adding stock gradually.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&auto=format&fit=crop&q=60",
        description: "Finish with butter and parmesan.",
      },
    ],
    isGlutenFree: true,
    isVegan: false,
    isVegetarian: true,
    isLactoseFree: false,
  },

  // ✅ c4 German
  {
    id: "m6",
    categoryIds: ["c4"],
    title: "Bratwurst with Sauerkraut",
    affordability: "affordable",
    complexity: "simple",
    imageUrl:
      "https://images.unsplash.com/photo-1548781365-20c85526b3a8?w=800&auto=format&fit=crop&q=60",
    duration: 35,
    ingredients: [
      { name: "Bratwurst", amount: 3, unit: "" },
      { name: "Sauerkraut", amount: 250, unit: "g" },
      { name: "Mustard", amount: 2, unit: "tbsp" },
      { name: "Potatoes", amount: 3, unit: "" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1548781365-20c85526b3a8?w=800&auto=format&fit=crop&q=60",
        description: "Pan-sear bratwurst until browned.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1604909053196-0f148bdff3e7?w=800&auto=format&fit=crop&q=60",
        description: "Warm sauerkraut and boil potatoes.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&auto=format&fit=crop&q=60",
        description: "Serve with mustard on the side.",
      },
    ],
    isGlutenFree: true,
    isVegan: false,
    isVegetarian: false,
    isLactoseFree: true,
  },

  // ✅ c6 Exotic
  {
    id: "m7",
    categoryIds: ["c6"],
    title: "Thai Green Curry",
    affordability: "pricey",
    complexity: "challenging",
    imageUrl:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&auto=format&fit=crop&q=60",
    duration: 40,
    ingredients: [
      { name: "Coconut Milk", amount: 1, unit: "can" },
      { name: "Green Curry Paste", amount: 2, unit: "tbsp" },
      { name: "Chicken or Tofu", amount: 300, unit: "g" },
      { name: "Basil", amount: 0, unit: "a handful" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&auto=format&fit=crop&q=60",
        description: "Fry curry paste briefly.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1604909053196-0f148bdff3e7?w=800&auto=format&fit=crop&q=60",
        description: "Add coconut milk and simmer.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?w=800&auto=format&fit=crop&q=60",
        description: "Add protein + basil, cook until done.",
      },
    ],
    isGlutenFree: true,
    isVegan: false,
    isVegetarian: false,
    isLactoseFree: true,
  },

  // ✅ c7 Breakfast
  {
    id: "m8",
    categoryIds: ["c7"],
    title: "Fluffy Pancakes",
    affordability: "affordable",
    complexity: "simple",
    imageUrl:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&auto=format&fit=crop&q=60",
    duration: 20,
    ingredients: [
      { name: "Flour", amount: 1, unit: "cup" },
      { name: "Milk", amount: 1, unit: "cup" },
      { name: "Egg", amount: 1, unit: "" },
      { name: "Baking Powder", amount: 1, unit: "tsp" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&auto=format&fit=crop&q=60",
        description: "Mix dry and wet ingredients.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?w=800&auto=format&fit=crop&q=60",
        description: "Cook on a pan until bubbles form.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&auto=format&fit=crop&q=60",
        description: "Serve with fruit or syrup.",
      },
    ],
    isGlutenFree: false,
    isVegan: false,
    isVegetarian: true,
    isLactoseFree: false,
  },

  // ✅ c8 Asian
  {
    id: "m9",
    categoryIds: ["c8"],
    title: "Salmon Rice Bowl",
    affordability: "pricey",
    complexity: "simple",
    imageUrl:
      "https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop&q=60",
    duration: 25,
    ingredients: [
      { name: "Salmon", amount: 200, unit: "g" },
      { name: "Rice", amount: 1, unit: "cup" },
      { name: "Soy Sauce", amount: 2, unit: "tbsp" },
      { name: "Cucumber", amount: 0.5, unit: "" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop&q=60",
        description: "Cook rice and pan-sear salmon.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=60",
        description: "Slice vegetables.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?w=800&auto=format&fit=crop&q=60",
        description: "Assemble bowl and drizzle soy sauce.",
      },
    ],
    isGlutenFree: false,
    isVegan: false,
    isVegetarian: false,
    isLactoseFree: true,
  },

  // ✅ c9 French
  {
    id: "m10",
    categoryIds: ["c9"],
    title: "French Ratatouille",
    affordability: "affordable",
    complexity: "challenging",
    imageUrl:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&auto=format&fit=crop&q=60",
    duration: 45,
    ingredients: [
      { name: "Eggplant", amount: 1, unit: "" },
      { name: "Zucchini", amount: 1, unit: "" },
      { name: "Tomatoes", amount: 3, unit: "" },
      { name: "Olive Oil", amount: 2, unit: "tbsp" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1604909053196-0f148bdff3e7?w=800&auto=format&fit=crop&q=60",
        description: "Slice vegetables evenly.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&auto=format&fit=crop&q=60",
        description: "Layer in a dish with tomato base.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=800&auto=format&fit=crop&q=60",
        description: "Bake until tender and aromatic.",
      },
    ],
    isGlutenFree: true,
    isVegan: true,
    isVegetarian: true,
    isLactoseFree: true,
  },

  // ✅ c10 Summer
  {
    id: "m11",
    categoryIds: ["c10"],
    title: "Chilled Gazpacho",
    affordability: "affordable",
    complexity: "simple",
    imageUrl:
      "https://images.unsplash.com/photo-1530062845289-9109b2c9c868?w=800&auto=format&fit=crop&q=60",
    duration: 15,
    ingredients: [
      { name: "Tomatoes", amount: 5, unit: "" },
      { name: "Cucumber", amount: 1, unit: "" },
      { name: "Olive Oil", amount: 2, unit: "tbsp" },
      { name: "Vinegar", amount: 1, unit: "tbsp" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1530062845289-9109b2c9c868?w=800&auto=format&fit=crop&q=60",
        description: "Blend all ingredients until smooth.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=60",
        description: "Chill for at least 1 hour.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?w=800&auto=format&fit=crop&q=60",
        description: "Serve cold with herbs on top.",
      },
    ],
    isGlutenFree: true,
    isVegan: true,
    isVegetarian: true,
    isLactoseFree: true,
  },

  // ✅ c11 Mexican
  {
    id: "m12",
    categoryIds: ["c11"],
    title: "Chicken Tacos",
    affordability: "affordable",
    complexity: "simple",
    imageUrl:
      "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?w=800&auto=format&fit=crop&q=60",
    duration: 25,
    ingredients: [
      { name: "Tortillas", amount: 4, unit: "" },
      { name: "Chicken", amount: 250, unit: "g" },
      { name: "Salsa", amount: 4, unit: "tbsp" },
      { name: "Lime", amount: 1, unit: "" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?w=800&auto=format&fit=crop&q=60",
        description: "Cook chicken with spices.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?w=800&auto=format&fit=crop&q=60",
        description: "Warm tortillas and prep toppings.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=800&auto=format&fit=crop&q=60",
        description: "Assemble and squeeze lime.",
      },
    ],
    isGlutenFree: false,
    isVegan: false,
    isVegetarian: false,
    isLactoseFree: true,
  },

  // ✅ c12 Indian
  {
    id: "m13",
    categoryIds: ["c12"],
    title: "Chana Masala",
    affordability: "affordable",
    complexity: "challenging",
    imageUrl:
      "https://images.unsplash.com/photo-1604909053196-0f148bdff3e7?w=800&auto=format&fit=crop&q=60",
    duration: 35,
    ingredients: [
      { name: "Chickpeas", amount: 1, unit: "can" },
      { name: "Tomatoes", amount: 3, unit: "" },
      { name: "Onion", amount: 1, unit: "" },
      { name: "Garam Masala", amount: 1, unit: "tsp" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1604909053196-0f148bdff3e7?w=800&auto=format&fit=crop&q=60",
        description: "Sauté onion and spices.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=800&auto=format&fit=crop&q=60",
        description: "Add tomatoes and simmer.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&auto=format&fit=crop&q=60",
        description: "Add chickpeas and cook 10 minutes.",
      },
    ],
    isGlutenFree: true,
    isVegan: true,
    isVegetarian: true,
    isLactoseFree: true,
  },

  // ✅ c13 Mediterranean, c19 Salads
  {
    id: "m14",
    categoryIds: ["c13", "c19"],
    title: "Greek Salad",
    affordability: "affordable",
    complexity: "simple",
    imageUrl:
      "https://images.unsplash.com/photo-1421622548261-c45bfe178854?w=800&auto=format&fit=crop&q=60",
    duration: 10,
    ingredients: [
      { name: "Cucumber", amount: 1, unit: "" },
      { name: "Tomatoes", amount: 2, unit: "" },
      { name: "Feta", amount: 100, unit: "g" },
      { name: "Olives", amount: 50, unit: "g" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1421622548261-c45bfe178854?w=800&auto=format&fit=crop&q=60",
        description: "Chop vegetables.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=60",
        description: "Add feta and olives.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?w=800&auto=format&fit=crop&q=60",
        description: "Dress with olive oil + lemon.",
      },
    ],
    isGlutenFree: true,
    isVegan: false,
    isVegetarian: true,
    isLactoseFree: false,
  },

  // ✅ c14 Seafood
  {
    id: "m15",
    categoryIds: ["c14"],
    title: "Garlic Butter Shrimp",
    affordability: "pricey",
    complexity: "simple",
    imageUrl:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&auto=format&fit=crop&q=60",
    duration: 20,
    ingredients: [
      { name: "Shrimp", amount: 300, unit: "g" },
      { name: "Garlic", amount: 3, unit: "cloves" },
      { name: "Butter", amount: 2, unit: "tbsp" },
      { name: "Lemon", amount: 1, unit: "" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&auto=format&fit=crop&q=60",
        description: "Sauté garlic in butter.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&auto=format&fit=crop&q=60",
        description: "Add shrimp and cook until pink.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?w=800&auto=format&fit=crop&q=60",
        description: "Finish with lemon juice.",
      },
    ],
    isGlutenFree: true,
    isVegan: false,
    isVegetarian: false,
    isLactoseFree: false,
  },

  // ✅ c15 Desserts
  {
    id: "m16",
    categoryIds: ["c15"],
    title: "Chocolate Mousse",
    affordability: "luxurious",
    complexity: "challenging",
    imageUrl:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&auto=format&fit=crop&q=60",
    duration: 30,
    ingredients: [
      { name: "Dark Chocolate", amount: 150, unit: "g" },
      { name: "Cream", amount: 200, unit: "ml" },
      { name: "Sugar", amount: 1, unit: "tbsp" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&auto=format&fit=crop&q=60",
        description: "Melt chocolate and let cool slightly.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?w=800&auto=format&fit=crop&q=60",
        description: "Whip cream until soft peaks.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&auto=format&fit=crop&q=60",
        description: "Fold together and chill.",
      },
    ],
    isGlutenFree: true,
    isVegan: false,
    isVegetarian: true,
    isLactoseFree: false,
  },

  // ✅ c17 BBQ & Grill
  {
    id: "m17",
    categoryIds: ["c17"],
    title: "BBQ Grilled Ribs",
    affordability: "pricey",
    complexity: "hard",
    imageUrl:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=900&auto=format&fit=crop&q=60",
    duration: 90,
    ingredients: [
      { name: "Pork Ribs", amount: 1, unit: "rack" },
      { name: "BBQ Sauce", amount: 0.5, unit: "cup" },
      { name: "Salt & Pepper", amount: 0, unit: "to taste" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=900&auto=format&fit=crop&q=60",
        description: "Season ribs and preheat oven/grill.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=60",
        description: "Slow cook until tender.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=900&auto=format&fit=crop&q=60",
        description: "Brush BBQ sauce and finish on grill.",
      },
    ],
    isGlutenFree: true,
    isVegan: false,
    isVegetarian: false,
    isLactoseFree: true,
  },

  // ✅ c18 Soups & Stews
  {
    id: "m18",
    categoryIds: ["c18"],
    title: "Hearty Beef Stew",
    affordability: "affordable",
    complexity: "challenging",
    imageUrl:
      "https://images.unsplash.com/photo-1543353071-087092ec393a?w=800&auto=format&fit=crop&q=60",
    duration: 75,
    ingredients: [
      { name: "Beef", amount: 400, unit: "g" },
      { name: "Potatoes", amount: 3, unit: "" },
      { name: "Carrots", amount: 2, unit: "" },
      { name: "Stock", amount: 4, unit: "cups" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1543353071-087092ec393a?w=800&auto=format&fit=crop&q=60",
        description: "Brown beef in a pot.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1604909053196-0f148bdff3e7?w=800&auto=format&fit=crop&q=60",
        description: "Add vegetables and stock.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1543353071-087092ec393a?w=800&auto=format&fit=crop&q=60",
        description: "Simmer until tender.",
      },
    ],
    isGlutenFree: true,
    isVegan: false,
    isVegetarian: false,
    isLactoseFree: true,
  },

  {
    id: "m19",
    categoryIds: ["c20"],
    title: "Berry Protein Smoothie",
    affordability: "affordable",
    complexity: "simple",
    imageUrl:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&auto=format&fit=crop&q=60",
    duration: 5,
    ingredients: [
      { name: "Frozen Berries", amount: 1, unit: "cup" },
      { name: "Milk", amount: 250, unit: "ml" },
      { name: "Protein Powder", amount: 1, unit: "scoop" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&auto=format&fit=crop&q=60",
        description: "Add everything to blender.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&auto=format&fit=crop&q=60",
        description: "Blend until smooth.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&auto=format&fit=crop&q=60",
        description: "Serve cold.",
      },
    ],
    isGlutenFree: true,
    isVegan: false,
    isVegetarian: true,
    isLactoseFree: false,
  },
  // ✅ m20–m39 (additions)

  // ✅ c1 Italian
  {
    id: "m20",
    categoryIds: ["c1"],
    title: "Margherita Pizza",
    affordability: "affordable",
    complexity: "challenging",
    imageUrl:
      "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=800&auto=format&fit=crop&q=60",
    duration: 45,
    ingredients: [
      { name: "Pizza Dough", amount: 1, unit: "ball" },
      { name: "Tomato Sauce", amount: 150, unit: "ml" },
      { name: "Mozzarella", amount: 200, unit: "g" },
      { name: "Basil", amount: 0, unit: "a handful" },
      { name: "Salt", amount: 0, unit: "to taste" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1600628422019-6c3f9d4f2ea9?w=800&auto=format&fit=crop&q=60",
        description: "Preheat oven and stretch the dough.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1604909053196-0f148bdff3e7?w=800&auto=format&fit=crop&q=60",
        description: "Spread sauce and add mozzarella.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=800&auto=format&fit=crop&q=60",
        description: "Bake until bubbling, finish with basil.",
      },
    ],
    isGlutenFree: false,
    isVegan: false,
    isVegetarian: true,
    isLactoseFree: false,
  },

  // ✅ c2 Quick & Easy
  {
    id: "m21",
    categoryIds: ["c2"],
    title: "Garlic Lemon Chicken",
    affordability: "affordable",
    complexity: "simple",
    imageUrl:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop&q=60",
    duration: 22,
    ingredients: [
      { name: "Chicken Thighs", amount: 350, unit: "g" },
      { name: "Garlic", amount: 3, unit: "cloves" },
      { name: "Lemon", amount: 1, unit: "" },
      { name: "Olive Oil", amount: 1, unit: "tbsp" },
      { name: "Salt", amount: 0, unit: "to taste" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1604909053196-0f148bdff3e7?w=800&auto=format&fit=crop&q=60",
        description: "Season chicken with salt, garlic, lemon.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop&q=60",
        description: "Sear in a pan until golden.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop&q=60",
        description: "Finish with lemon juice and serve.",
      },
    ],
    isGlutenFree: true,
    isVegan: false,
    isVegetarian: false,
    isLactoseFree: true,
  },

  // ✅ c3 Hamburgers
  {
    id: "m22",
    categoryIds: ["c3"],
    title: "Turkey Burger",
    affordability: "affordable",
    complexity: "simple",
    imageUrl:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=900&auto=format&fit=crop&q=60",
    duration: 30,
    ingredients: [
      { name: "Ground Turkey", amount: 350, unit: "g" },
      { name: "Burger Buns", amount: 2, unit: "" },
      { name: "Lettuce", amount: 0, unit: "a few leaves" },
      { name: "Tomato", amount: 1, unit: "" },
      { name: "Salt", amount: 0, unit: "to taste" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1550547660-d9450f859349?w=900&auto=format&fit=crop&q=60",
        description: "Form patties and season.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop&q=60",
        description: "Pan-sear patties until cooked through.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?w=900&auto=format&fit=crop&q=60",
        description: "Assemble burger and serve.",
      },
    ],
    isGlutenFree: false,
    isVegan: false,
    isVegetarian: false,
    isLactoseFree: true,
  },

  // ✅ c4 German
  {
    id: "m23",
    categoryIds: ["c4"],
    title: "German Potato Salad",
    affordability: "affordable",
    complexity: "simple",
    imageUrl:
      "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?w=800&auto=format&fit=crop&q=60",
    duration: 25,
    ingredients: [
      { name: "Potatoes", amount: 700, unit: "g" },
      { name: "Onion", amount: 1, unit: "" },
      { name: "Vinegar", amount: 2, unit: "tbsp" },
      { name: "Mustard", amount: 1, unit: "tsp" },
      { name: "Salt", amount: 0, unit: "to taste" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1604909053196-0f148bdff3e7?w=800&auto=format&fit=crop&q=60",
        description: "Boil potatoes and slice while warm.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&auto=format&fit=crop&q=60",
        description: "Mix vinegar, mustard, onion, salt.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?w=800&auto=format&fit=crop&q=60",
        description: "Toss dressing with potatoes and serve.",
      },
    ],
    isGlutenFree: true,
    isVegan: true,
    isVegetarian: true,
    isLactoseFree: true,
  },

  // ✅ c5 Light & Lovely + c19 Salads
  {
    id: "m24",
    categoryIds: ["c5", "c19"],
    title: "Citrus Chickpea Salad",
    affordability: "affordable",
    complexity: "simple",
    imageUrl:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&auto=format&fit=crop&q=60",
    duration: 12,
    ingredients: [
      { name: "Chickpeas", amount: 1, unit: "can" },
      { name: "Orange", amount: 1, unit: "" },
      { name: "Cucumber", amount: 1, unit: "" },
      { name: "Mint", amount: 0, unit: "a handful" },
      { name: "Olive Oil", amount: 1, unit: "tbsp" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1604909053196-0f148bdff3e7?w=900&auto=format&fit=crop&q=60",
        description: "Rinse chickpeas and chop cucumber.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&auto=format&fit=crop&q=60",
        description: "Peel orange segments and add mint.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&auto=format&fit=crop&q=60",
        description: "Dress with olive oil and serve chilled.",
      },
    ],
    isGlutenFree: true,
    isVegan: true,
    isVegetarian: true,
    isLactoseFree: true,
  },

  // ✅ c6 Exotic + c8 Asian
  {
    id: "m25",
    categoryIds: ["c6", "c8"],
    title: "Spicy Peanut Noodles",
    affordability: "affordable",
    complexity: "simple",
    imageUrl:
      "https://images.unsplash.com/photo-1555126634-323283e090fa?w=900&auto=format&fit=crop&q=60",
    duration: 18,
    ingredients: [
      { name: "Noodles", amount: 200, unit: "g" },
      { name: "Peanut Butter", amount: 2, unit: "tbsp" },
      { name: "Soy Sauce", amount: 2, unit: "tbsp" },
      { name: "Chili Flakes", amount: 0.5, unit: "tsp" },
      { name: "Cucumber", amount: 0.5, unit: "" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1604909053196-0f148bdff3e7?w=900&auto=format&fit=crop&q=60",
        description: "Cook noodles and slice cucumber.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=900&auto=format&fit=crop&q=60",
        description: "Whisk sauce and toss with noodles.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?w=900&auto=format&fit=crop&q=60",
        description: "Top with cucumber and serve.",
      },
    ],
    isGlutenFree: false,
    isVegan: true,
    isVegetarian: true,
    isLactoseFree: true,
  },

  // ✅ c7 Breakfast + c2 Quick & Easy
  {
    id: "m26",
    categoryIds: ["c7", "c2"],
    title: "Overnight Oats with Berries",
    affordability: "affordable",
    complexity: "simple",
    imageUrl:
      "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=900&auto=format&fit=crop&q=60",
    duration: 8,
    ingredients: [
      { name: "Rolled Oats", amount: 0.75, unit: "cup" },
      { name: "Milk", amount: 250, unit: "ml" },
      { name: "Chia Seeds", amount: 1, unit: "tbsp" },
      { name: "Frozen Berries", amount: 1, unit: "cup" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=900&auto=format&fit=crop&q=60",
        description: "Mix oats, milk, and chia in a jar.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=900&auto=format&fit=crop&q=60",
        description: "Add berries and stir gently.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=900&auto=format&fit=crop&q=60",
        description: "Refrigerate overnight and serve cold.",
      },
    ],
    isGlutenFree: false,
    isVegan: false,
    isVegetarian: true,
    isLactoseFree: false,
  },

  // ✅ c8 Asian
  {
    id: "m27",
    categoryIds: ["c8"],
    title: "Chicken Teriyaki",
    affordability: "affordable",
    complexity: "simple",
    imageUrl:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=900&auto=format&fit=crop&q=60",
    duration: 25,
    ingredients: [
      { name: "Chicken Thighs", amount: 350, unit: "g" },
      { name: "Soy Sauce", amount: 3, unit: "tbsp" },
      { name: "Honey", amount: 1, unit: "tbsp" },
      { name: "Ginger", amount: 1, unit: "tsp" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1604909053196-0f148bdff3e7?w=900&auto=format&fit=crop&q=60",
        description: "Mix sauce ingredients.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=900&auto=format&fit=crop&q=60",
        description: "Cook chicken until browned.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=900&auto=format&fit=crop&q=60",
        description: "Add sauce and simmer until glossy.",
      },
    ],
    isGlutenFree: false,
    isVegan: false,
    isVegetarian: false,
    isLactoseFree: true,
  },

  // ✅ c9 French + c15 Desserts
  {
    id: "m28",
    categoryIds: ["c9", "c15"],
    title: "Crêpes with Berries",
    affordability: "affordable",
    complexity: "challenging",
    imageUrl:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=900&auto=format&fit=crop&q=60",
    duration: 30,
    ingredients: [
      { name: "Flour", amount: 1, unit: "cup" },
      { name: "Milk", amount: 300, unit: "ml" },
      { name: "Eggs", amount: 2, unit: "" },
      { name: "Butter", amount: 1, unit: "tbsp" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=900&auto=format&fit=crop&q=60",
        description: "Whisk batter until smooth.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=900&auto=format&fit=crop&q=60",
        description: "Cook thin crêpes in a pan.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=900&auto=format&fit=crop&q=60",
        description: "Fill with berries and fold to serve.",
      },
    ],
    isGlutenFree: false,
    isVegan: false,
    isVegetarian: true,
    isLactoseFree: false,
  },

  // ✅ c10 Summer + c19 Salads
  {
    id: "m29",
    categoryIds: ["c10", "c19"],
    title: "Watermelon Feta Salad",
    affordability: "affordable",
    complexity: "simple",
    imageUrl:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900&auto=format&fit=crop&q=60",
    duration: 10,
    ingredients: [
      { name: "Watermelon", amount: 3, unit: "cups" },
      { name: "Feta", amount: 100, unit: "g" },
      { name: "Mint", amount: 0, unit: "a handful" },
      { name: "Lime", amount: 1, unit: "" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1604909053196-0f148bdff3e7?w=900&auto=format&fit=crop&q=60",
        description: "Cube watermelon and crumble feta.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&auto=format&fit=crop&q=60",
        description: "Tear mint and toss gently.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900&auto=format&fit=crop&q=60",
        description: "Finish with lime juice and serve chilled.",
      },
    ],
    isGlutenFree: true,
    isVegan: false,
    isVegetarian: true,
    isLactoseFree: false,
  },

  // ✅ c11 Mexican
  {
    id: "m30",
    categoryIds: ["c11"],
    title: "Beef Burrito Bowl",
    affordability: "affordable",
    complexity: "simple",
    imageUrl:
      "https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?w=900&auto=format&fit=crop&q=60",
    duration: 25,
    ingredients: [
      { name: "Rice", amount: 1, unit: "cup" },
      { name: "Ground Beef", amount: 300, unit: "g" },
      { name: "Black Beans", amount: 1, unit: "can" },
      { name: "Salsa", amount: 4, unit: "tbsp" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1604909053196-0f148bdff3e7?w=900&auto=format&fit=crop&q=60",
        description: "Cook rice and brown beef with spices.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?w=900&auto=format&fit=crop&q=60",
        description: "Warm beans and prep toppings.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?w=900&auto=format&fit=crop&q=60",
        description: "Assemble bowl and add salsa.",
      },
    ],
    isGlutenFree: true,
    isVegan: false,
    isVegetarian: false,
    isLactoseFree: true,
  },

  // ✅ c12 Indian
  {
    id: "m31",
    categoryIds: ["c12"],
    title: "Butter Chicken",
    affordability: "pricey",
    complexity: "hard",
    imageUrl:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=900&auto=format&fit=crop&q=60",
    duration: 50,
    ingredients: [
      { name: "Chicken", amount: 400, unit: "g" },
      { name: "Tomato Puree", amount: 300, unit: "ml" },
      { name: "Cream", amount: 150, unit: "ml" },
      { name: "Garam Masala", amount: 1, unit: "tsp" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1604909053196-0f148bdff3e7?w=900&auto=format&fit=crop&q=60",
        description: "Sear chicken pieces until lightly browned.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=900&auto=format&fit=crop&q=60",
        description: "Simmer tomato sauce with spices.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=900&auto=format&fit=crop&q=60",
        description: "Add cream, return chicken, simmer until done.",
      },
    ],
    isGlutenFree: true,
    isVegan: false,
    isVegetarian: false,
    isLactoseFree: false,
  },

  // ✅ c13 Mediterranean + c2 Quick & Easy
  {
    id: "m32",
    categoryIds: ["c13", "c2"],
    title: "Hummus Pita Plate",
    affordability: "affordable",
    complexity: "simple",
    imageUrl:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=900&auto=format&fit=crop&q=60",
    duration: 12,
    ingredients: [
      { name: "Hummus", amount: 200, unit: "g" },
      { name: "Pita Bread", amount: 2, unit: "" },
      { name: "Cucumber", amount: 1, unit: "" },
      { name: "Tomatoes", amount: 2, unit: "" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1604909053196-0f148bdff3e7?w=900&auto=format&fit=crop&q=60",
        description: "Slice vegetables and warm pita.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=900&auto=format&fit=crop&q=60",
        description: "Plate hummus and arrange sides.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=900&auto=format&fit=crop&q=60",
        description: "Serve immediately.",
      },
    ],
    isGlutenFree: false,
    isVegan: true,
    isVegetarian: true,
    isLactoseFree: true,
  },

  // ✅ c14 Seafood + c2 Quick & Easy
  {
    id: "m33",
    categoryIds: ["c14", "c2"],
    title: "Lemon Dill Salmon",
    affordability: "pricey",
    complexity: "simple",
    imageUrl:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?w=900&auto=format&fit=crop&q=60",
    duration: 22,
    ingredients: [
      { name: "Salmon Fillet", amount: 2, unit: "" },
      { name: "Lemon", amount: 1, unit: "" },
      { name: "Dill", amount: 0, unit: "a handful" },
      { name: "Salt", amount: 0, unit: "to taste" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1604909053196-0f148bdff3e7?w=900&auto=format&fit=crop&q=60",
        description: "Season salmon with salt, lemon, dill.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1553621042-f6e147245754?w=900&auto=format&fit=crop&q=60",
        description: "Bake or pan-sear until flaky.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1553621042-f6e147245754?w=900&auto=format&fit=crop&q=60",
        description: "Serve with lemon wedges.",
      },
    ],
    isGlutenFree: true,
    isVegan: false,
    isVegetarian: false,
    isLactoseFree: true,
  },

  // ✅ c15 Desserts
  {
    id: "m34",
    categoryIds: ["c15"],
    title: "Banana Bread",
    affordability: "affordable",
    complexity: "simple",
    imageUrl:
      "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=900&auto=format&fit=crop&q=60",
    duration: 60,
    ingredients: [
      { name: "Bananas", amount: 3, unit: "" },
      { name: "Flour", amount: 2, unit: "cups" },
      { name: "Eggs", amount: 2, unit: "" },
      { name: "Butter", amount: 100, unit: "g" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=900&auto=format&fit=crop&q=60",
        description: "Mash bananas and mix wet ingredients.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=900&auto=format&fit=crop&q=60",
        description: "Fold in flour and pour into a loaf pan.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=900&auto=format&fit=crop&q=60",
        description: "Bake until a skewer comes out clean.",
      },
    ],
    isGlutenFree: false,
    isVegan: false,
    isVegetarian: true,
    isLactoseFree: false,
  },

  // ✅ c16 Vegetarian
  {
    id: "m35",
    categoryIds: ["c16"],
    title: "Vegetable Stir-Fry with Tofu",
    affordability: "affordable",
    complexity: "simple",
    imageUrl:
      "https://images.unsplash.com/photo-1546069901-6108eecf4a39?w=900&auto=format&fit=crop&q=60",
    duration: 20,
    ingredients: [
      { name: "Tofu", amount: 300, unit: "g" },
      { name: "Mixed Vegetables", amount: 3, unit: "cups" },
      { name: "Soy Sauce", amount: 2, unit: "tbsp" },
      { name: "Garlic", amount: 2, unit: "cloves" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1604909053196-0f148bdff3e7?w=900&auto=format&fit=crop&q=60",
        description: "Cube tofu and pat dry.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=900&auto=format&fit=crop&q=60",
        description: "Sear tofu, then sauté vegetables.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1546069901-6108eecf4a39?w=900&auto=format&fit=crop&q=60",
        description: "Add soy sauce and combine to serve.",
      },
    ],
    isGlutenFree: false,
    isVegan: true,
    isVegetarian: true,
    isLactoseFree: true,
  },

  // ✅ c18 Soups & Stews + c5 Light & Lovely
  {
    id: "m36",
    categoryIds: ["c18", "c5"],
    title: "Tomato Lentil Soup",
    affordability: "affordable",
    complexity: "simple",
    imageUrl:
      "https://images.unsplash.com/photo-1543353071-087092ec393a?w=900&auto=format&fit=crop&q=60",
    duration: 35,
    ingredients: [
      { name: "Red Lentils", amount: 1, unit: "cup" },
      { name: "Tomatoes", amount: 3, unit: "" },
      { name: "Onion", amount: 1, unit: "" },
      { name: "Vegetable Stock", amount: 4, unit: "cups" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1604909053196-0f148bdff3e7?w=900&auto=format&fit=crop&q=60",
        description: "Sauté onion until soft.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1543353071-087092ec393a?w=900&auto=format&fit=crop&q=60",
        description: "Add tomatoes, lentils, and stock.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1543353071-087092ec393a?w=900&auto=format&fit=crop&q=60",
        description: "Simmer until lentils are tender.",
      },
    ],
    isGlutenFree: true,
    isVegan: true,
    isVegetarian: true,
    isLactoseFree: true,
  },

  // ✅ c19 Salads
  {
    id: "m37",
    categoryIds: ["c19"],
    title: "Chicken Caesar Salad",
    affordability: "affordable",
    complexity: "simple",
    imageUrl:
      "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=900&auto=format&fit=crop&q=60",
    duration: 18,
    ingredients: [
      { name: "Romaine Lettuce", amount: 2, unit: "cups" },
      { name: "Chicken", amount: 250, unit: "g" },
      { name: "Croutons", amount: 1, unit: "cup" },
      { name: "Parmesan", amount: 30, unit: "g" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=900&auto=format&fit=crop&q=60",
        description: "Cook chicken and slice thinly.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=900&auto=format&fit=crop&q=60",
        description: "Toss lettuce with dressing.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=900&auto=format&fit=crop&q=60",
        description: "Top with chicken, croutons, parmesan.",
      },
    ],
    isGlutenFree: false,
    isVegan: false,
    isVegetarian: false,
    isLactoseFree: false,
  },

  // ✅ c20 Drinks
  {
    id: "m38",
    categoryIds: ["c20"],
    title: "Iced Matcha Latte",
    affordability: "affordable",
    complexity: "simple",
    imageUrl:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=900&auto=format&fit=crop&q=60",
    duration: 5,
    ingredients: [
      { name: "Matcha Powder", amount: 1, unit: "tsp" },
      { name: "Milk", amount: 250, unit: "ml" },
      { name: "Ice", amount: 0, unit: "as needed" },
      { name: "Honey", amount: 1, unit: "tsp" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1604909053196-0f148bdff3e7?w=900&auto=format&fit=crop&q=60",
        description: "Whisk matcha with a splash of warm water.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=900&auto=format&fit=crop&q=60",
        description: "Fill a glass with ice and milk.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=900&auto=format&fit=crop&q=60",
        description: "Pour matcha in and sweeten to taste.",
      },
    ],
    isGlutenFree: true,
    isVegan: false,
    isVegetarian: true,
    isLactoseFree: false,
  },

  // ✅ c17 BBQ & Grill
  {
    id: "m39",
    categoryIds: ["c17"],
    title: "Grilled Veggie Skewers",
    affordability: "affordable",
    complexity: "simple",
    imageUrl:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=900&auto=format&fit=crop&q=60",
    duration: 25,
    ingredients: [
      { name: "Bell Peppers", amount: 2, unit: "" },
      { name: "Onion", amount: 1, unit: "" },
      { name: "Mushrooms", amount: 250, unit: "g" },
      { name: "Olive Oil", amount: 2, unit: "tbsp" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1604909053196-0f148bdff3e7?w=900&auto=format&fit=crop&q=60",
        description: "Cut vegetables into chunks and skewer.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=900&auto=format&fit=crop&q=60",
        description: "Brush with oil and season lightly.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=900&auto=format&fit=crop&q=60",
        description: "Grill until charred and tender.",
      },
    ],
    isGlutenFree: true,
    isVegan: true,
    isVegetarian: true,
    isLactoseFree: true,
  },
];
