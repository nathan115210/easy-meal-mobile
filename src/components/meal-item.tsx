import React from "react";
import { Image, Pressable, StyleSheet, type ViewProps } from "react-native";
import { ThemedText } from "@/components/ui/themed-text";
import { ThemedView } from "@/components/ui/themed-view";
import type { MealItemProps } from "@/types/meal-type";

type Props = ViewProps &
  Pick<
    MealItemProps,
    "id" | "title" | "imageUrl" | "duration" | "complexity" | "affordability"
  > & {
    /**
     * Optional click handler. Keep navigation outside this component so it doesn't
     * depend on a specific navigator/screen ("MealDetail" wasn't defined).
     */
    onPress?: (id: string) => void;
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
    <ThemedView style={styles.mealItem} colorName="surface">
      <Pressable
        onPress={() => onPress?.(id)}
        style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}
        android_ripple={{ color: "rgba(0,0,0,0.08)" }}
      >
        <ThemedView style={styles.mealContainer} colorName="surface">
          <ThemedView style={styles.imageContainer} colorName="surfaceElevated">
            <Image source={{ uri: imageUrl }} style={styles.image} />
          </ThemedView>

          <ThemedView style={styles.detailsContainer} colorName="surface">
            <ThemedText style={styles.title} numberOfLines={2}>
              {title}
            </ThemedText>

            <ThemedView style={styles.metaRow} colorName="surface">
              <ThemedText style={styles.subtitle} colorName="textSecondary">
                {duration}m
              </ThemedText>
              <ThemedText style={styles.dot} colorName="textMuted">
                •
              </ThemedText>
              <ThemedText style={styles.subtitle} colorName="textSecondary">
                {complexity}
              </ThemedText>
              <ThemedText style={styles.dot} colorName="textMuted">
                •
              </ThemedText>
              <ThemedText style={styles.subtitle} colorName="textSecondary">
                {affordability}
              </ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    borderRadius: 12,
    overflow: "hidden",
  },
  pressable: {
    backgroundColor: "transparent",
  },
  pressed: {
    opacity: 0.85,
  },
  mealContainer: {
    borderRadius: 12,
    overflow: "hidden",
  },
  imageContainer: {
    width: "100%",
    height: 180,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  detailsContainer: {
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 6,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 6,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "500",
    textTransform: "capitalize",
  },
  dot: {
    fontSize: 12,
  },
});

export default MealItem;
