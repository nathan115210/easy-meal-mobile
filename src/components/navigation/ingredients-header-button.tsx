import React from "react";
import { Pressable, StyleSheet, type PressableProps, View } from "react-native";
import { ThemedText } from "@/components/ui/themed-text";

export type IngredientsHeaderButtonProps = {
  /**
   * Fired when the user taps the header button.
   * Typically opens an ingredients BottomSheetModal for the current meal.
   */
  onPress: () => void;

  /**
   * Optional label override.
   * Default: "Ingredients"
   */
  label?: string;

  /**
   * Optional Pressable hit slop. Default is generous for header taps.
   */
  hitSlop?: PressableProps["hitSlop"];

  /**
   * Optional disabled state.
   */
  disabled?: boolean;

  /**
   * Optional test id for E2E tests.
   */
  testID?: string;
};

export default function IngredientsHeaderButton({
  onPress,
  label = "Ingredients",
  hitSlop = 10,
  disabled = false,
  testID,
}: IngredientsHeaderButtonProps) {
  return (
    <Pressable
      testID={testID}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ disabled }}
      onPress={disabled ? undefined : onPress}
      hitSlop={hitSlop}
      style={({ pressed }) => [
        styles.container,
        pressed && !disabled && styles.pressed,
      ]}
    >
      <View style={styles.pill}>
        <ThemedText style={styles.text}>{label}</ThemedText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  pressed: {
    opacity: 0.7,
  },
  pill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
});
