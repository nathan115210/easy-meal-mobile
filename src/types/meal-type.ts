export type MealAffordability = "affordable" | "pricey" | "luxurious";
export type MealComplexity = "simple" | "challenging" | "hard";
export type Ingredient = {
  name: string;
  amount: string;
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
  steps: string[];
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isLactoseFree: boolean;
}
