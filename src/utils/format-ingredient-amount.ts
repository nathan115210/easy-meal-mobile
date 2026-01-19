import type { Ingredient } from "@/types/meal-type";

/**
 * Formats an ingredient's amount/unit for display.
 *
 * Rules:
 * - If amount is 0: show unit only (e.g. "a handful"). If unit is empty, return 'to taste'.
 * - Otherwise:
 *   - If unit exists: "amount unit"
 *   - If unit is empty: "amount"
 */
export function formatIngredientAmount(
  ingredient: Ingredient,
  options?: { zeroFallback?: string },
): string {
  const amount = ingredient.amount;
  const unit = (ingredient.unit ?? "").trim();

  if (amount === 0) {
    return unit || options?.zeroFallback || "to taste";
  }

  if (unit) {
    return `${amount} ${unit}`;
  }

  return String(amount);
}
