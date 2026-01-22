import { useEffect, useMemo, useState } from "react";
import { type Ingredient } from "@/types/meal-type";

type UseIngredientsProps = {
  defaultIngredients: Ingredient[];
  servings?: number;
};

/**
 * Keeps an editable ingredient list derived from `defaultIngredients`,
 * and automatically scales amounts when `servings` changes.
 *
 * Returns:
 * - `ingredients`: the current (scaled) ingredient list
 * - `setIngredients`: allows manual overrides if needed
 */
export const useIngredients = ({
  defaultIngredients,
  servings,
}: UseIngredientsProps): {
  ingredients: Ingredient[];
  servings: number;
  setServings: React.Dispatch<React.SetStateAction<number>>;
} => {
  const [internalServings, setInternalServings] = useState<number>(
    servings ?? 1,
  );
  const effectiveServings = servings ?? internalServings;

  const scaledDefaultIngredients = useMemo(() => {
    return (defaultIngredients ?? []).map((ing) => ({
      ...ing,
      amount: ing.amount * effectiveServings,
    }));
  }, [defaultIngredients, effectiveServings]);

  const [ingredients, setIngredients] = useState<Ingredient[]>(
    scaledDefaultIngredients,
  );

  // Keep local state in sync when defaults or servings change.
  useEffect(() => {
    setIngredients(scaledDefaultIngredients);
  }, [scaledDefaultIngredients]);
  return {
    ingredients,
    servings: effectiveServings,
    setServings: setInternalServings,
  };
};
