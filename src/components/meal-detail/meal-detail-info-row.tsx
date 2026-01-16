import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/ui/themed-text";
import { ThemedView, type ThemedViewProps } from "@/components/ui/themed-view";

import { MealItemProps } from "@/types/meal-type";

type MealDetailInfoRowProps = Pick<
  MealItemProps,
  "duration" | "complexity" | "affordability"
> & { background?: ThemedViewProps["colorName"] };

function MealDetailInfoRow({
  duration,
  complexity,
  affordability,
  background,
}: MealDetailInfoRowProps) {
  return (
    <ThemedView style={styles.infoRow} colorName={background}>
      <ThemedText style={styles.infoText} colorName="textSecondary">
        {duration}m
      </ThemedText>
      <ThemedText style={styles.dot} colorName="textMuted">
        •
      </ThemedText>
      <ThemedText style={styles.infoText} colorName="textSecondary">
        {complexity}
      </ThemedText>
      <ThemedText style={styles.dot} colorName="textMuted">
        •
      </ThemedText>
      <ThemedText style={styles.infoText} colorName="textSecondary">
        {affordability}
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 6,
  },
  infoText: {
    fontSize: 12,
    fontWeight: "500",
    textTransform: "capitalize",
  },
  dot: {
    fontSize: 12,
  },
});

export default MealDetailInfoRow;
