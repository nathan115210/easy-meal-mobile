import { MealItemProps } from "@/types/meal-type";
import { CategoryItemProps } from "@/types/category-type";

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
];

export const mealsData: MealItemProps[] = [
  {
    id: "m1",
    categoryIds: ["c1", "c2"],
    title: "Spaghetti with Tomato Sauce",
    affordability: "affordable",
    complexity: "simple",
    imageUrl: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
    duration: 20,
    ingredients: [
      { name: "Spaghetti", amount: "250g" },
      { name: "Tomatoes", amount: "4" },
      { name: "Olive Oil", amount: "1 tbsp" },
      { name: "Onion", amount: "1" },
      { name: "Garlic", amount: "2 cloves" },
      { name: "Salt", amount: "to taste" },
    ],
    steps: [
      {
        image:
          "https://plus.unsplash.com/premium_photo-1722686442288-11822840ead5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Qm9pbCUyMHdhdGVyJTIwYW5kJTIwY29vayUyMHNwYWdoZXR0aXxlbnwwfHwwfHx8MA%3D%3D",
        description:
          "Boil water and cook spaghetti,Boil water and cook spaghettiBoil water and cook spaghetti",
      },
      {
        image:
          "https://images.unsplash.com/photo-1604909053196-0f148bdff3e7?w=500&auto=format&fit=crop&q=60",
        description: "Chop onion and garlic",
      },
      {
        image:
          "https://images.unsplash.com/photo-1585238342028-4c7d0a9f6c0b?w=500&auto=format&fit=crop&q=60",
        description: "Cook onion and garlic in olive oil",
      },
      {
        image:
          "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=500&auto=format&fit=crop&q=60",
        description: "Add tomatoes and simmer",
      },
      {
        image:
          "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?w=500&auto=format&fit=crop&q=60",
        description: "Mix sauce with spaghetti",
      },
      {
        image:
          "https://images.unsplash.com/photo-1585238342028-4c7d0a9f6c0b?w=500&auto=format&fit=crop&q=60",
        description: "Cook onion and garlic in olive oil",
      },
      {
        image:
          "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=500&auto=format&fit=crop&q=60",
        description: "Add tomatoes and simmer",
      },
      {
        image:
          "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?w=500&auto=format&fit=crop&q=60",
        description: "Mix sauce with spaghetti",
      },
    ],
    isGlutenFree: false,
    isVegan: true,
    isVegetarian: true,
    isLactoseFree: true,
  },
  {
    id: "m2",
    categoryIds: ["c2"],
    title: "Grilled Chicken Breast",
    affordability: "pricey",
    complexity: "simple",
    imageUrl: "https://images.unsplash.com/photo-1604908177522-42944e6b8b1d",
    duration: 30,
    ingredients: [
      { name: "Chicken Breast", amount: "2" },
      { name: "Olive Oil", amount: "1 tbsp" },
      { name: "Salt", amount: "to taste" },
      { name: "Pepper", amount: "to taste" },
      { name: "Paprika", amount: "1 tsp" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1604908177522-42944e6b8b1d?w=500&auto=format&fit=crop&q=60",
        description: "Season the chicken",
      },
      {
        image:
          "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=500&auto=format&fit=crop&q=60",
        description: "Preheat grill pan",
      },
      {
        image:
          "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=60",
        description: "Grill chicken on both sides",
      },
      {
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=60",
        description: "Let rest before serving",
      },
    ],
    isGlutenFree: true,
    isVegan: false,
    isVegetarian: false,
    isLactoseFree: true,
  },
  {
    id: "m3",
    categoryIds: ["c3"],
    title: "Classic Beef Burger",
    affordability: "pricey",
    complexity: "challenging",
    imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    duration: 45,
    ingredients: [
      { name: "Beef Patty", amount: "2" },
      { name: "Burger Buns", amount: "2" },
      { name: "Cheese", amount: "2 slices" },
      { name: "Lettuce", amount: "a few leaves" },
      { name: "Tomato", amount: "1" },
      { name: "Onion", amount: "1/2" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&auto=format&fit=crop&q=60",
        description: "Prepare beef patties",
      },
      {
        image:
          "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&auto=format&fit=crop&q=60",
        description: "Grill patties",
      },
      {
        image:
          "https://images.unsplash.com/photo-1550317138-10000687a72b?w=500&auto=format&fit=crop&q=60",
        description: "Toast buns",
      },
      {
        image:
          "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&auto=format&fit=crop&q=60",
        description: "Assemble burger with toppings",
      },
    ],
    isGlutenFree: false,
    isVegan: false,
    isVegetarian: false,
    isLactoseFree: false,
  },
  {
    id: "m4",
    categoryIds: ["c4"],
    title: "Vegan Buddha Bowl",
    affordability: "affordable",
    complexity: "simple",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    duration: 25,
    ingredients: [
      { name: "Quinoa", amount: "1 cup" },
      { name: "Chickpeas", amount: "1 can" },
      { name: "Avocado", amount: "1" },
      { name: "Spinach", amount: "2 cups" },
      { name: "Carrots", amount: "2" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60",
        description: "Cook quinoa",
      },
      {
        image:
          "https://images.unsplash.com/photo-1604909053196-0f148bdff3e7?w=500&auto=format&fit=crop&q=60",
        description: "Roast chickpeas",
      },
      {
        image:
          "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&auto=format&fit=crop&q=60",
        description: "Chop vegetables",
      },
      {
        image:
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60",
        description: "Assemble bowl",
      },
    ],
    isGlutenFree: true,
    isVegan: true,
    isVegetarian: true,
    isLactoseFree: true,
  },
  {
    id: "m5",
    categoryIds: ["c5"],
    title: "Creamy Mushroom Risotto",
    affordability: "luxurious",
    complexity: "hard",
    imageUrl: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
    duration: 60,
    ingredients: [
      { name: "Arborio Rice", amount: "1 1/2 cups" },
      { name: "Mushrooms", amount: "250g" },
      { name: "Vegetable Stock", amount: "4 cups" },
      { name: "Butter", amount: "2 tbsp" },
      { name: "Parmesan Cheese", amount: "1/2 cup" },
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&auto=format&fit=crop&q=60",
        description: "Heat stock",
      },
      {
        image:
          "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=500&auto=format&fit=crop&q=60",
        description: "Cook mushrooms",
      },
      {
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format&fit=crop&q=60",
        description: "Add rice and stock gradually",
      },
      {
        image:
          "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=500&auto=format&fit=crop&q=60",
        description: "Stir continuously",
      },
      {
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format&fit=crop&q=60",
        description: "Finish with butter and cheese",
      },
    ],
    isGlutenFree: true,
    isVegan: false,
    isVegetarian: true,
    isLactoseFree: false,
  },
];
