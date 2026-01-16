import React from "react";
import { type ViewProps } from "react-native";

import type { MealItemProps } from "@/types/meal-type";
import MealDetailInfoRow from "./meal-detail/meal-detail-info-row";
import Card from "@/components/ui/card";

type Props = ViewProps &
  Pick<
    MealItemProps,
    "id" | "title" | "imageUrl" | "duration" | "complexity" | "affordability"
  > & {
    /**
     * Optional press handler.
     *
     * This component binds the current `id` when invoking the callback,
     * so callers don't need to close over `id`.
     */
    onPress?: (mealId: string) => void;
  };

function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPress,
}: Props) {
  return (
    <Card
      title={title}
      imageUrl={imageUrl}
      onPress={onPress ? () => onPress(id) : undefined}
    >
      <MealDetailInfoRow
        duration={duration}
        complexity={complexity}
        affordability={affordability}
        background="surface"
      />
    </Card>
  );
}

export default MealItem;
