import { useMemo } from "react";
import { mealsData } from "@/constants/data/data";
import { type MealItemProps } from "@/types/meal-type";

/**
 * A custom hook to retrieve a specific meal by its ID from the static data source.
 *
 * This hook encapsulates the logic for searching the `mealsData` array.
 * It uses `useMemo` for optimization, ensuring the search operation only
 * re-runs if the `mealId` prop changes.
 *
 * @param mealId The ID of the meal to find.
 * @returns The full meal object if found, otherwise `null`.
 */
export function useMeal(mealId?: string): MealItemProps | null {
  const meal = useMemo<MealItemProps | null>(() => {
    if (!mealId) {
      return null;
    }
    return mealsData.find((m) => m.id === mealId) ?? null;
  }, [mealId]);

  return meal;
}
