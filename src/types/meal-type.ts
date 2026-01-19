export type MealAffordability = "affordable" | "pricey" | "luxurious";
export type MealComplexity = "simple" | "challenging" | "hard";
export type Ingredient = {
  name: string;
  amount: number;
  unit: string;
};
export type Step = {
  image?: string;
  description: string;
};
export interface MealItemProps {
  id: string;
  categoryIds: string[];
  title: string;
  affordability: MealAffordability;
  complexity: MealComplexity;
  imageUrl: string;
  duration: number;
  ingredients: Ingredient[];
  steps: Step[];
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isLactoseFree: boolean;
}
