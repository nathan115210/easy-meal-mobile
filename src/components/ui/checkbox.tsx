import React from "react";
import {
  Pressable,
  StyleSheet,
  View,
  type PressableProps,
  useColorScheme,
} from "react-native";
import { ThemedText } from "@/components/ui/themed-text";
import { ThemedView } from "@/components/ui/themed-view";

export type CheckboxSize = "sm" | "md" | "lg";

export type CheckboxProps = {
  /**
   * Controlled checked state.
   */
  checked: boolean;

  /**
   * Called when the user toggles the checkbox.
   */
  onCheckedChange?: (nextChecked: boolean) => void;

  /**
   * Optional label rendered to the right of the checkbox.
   */
  label?: string;

  /**
   * Optional secondary label rendered to the right of the checkbox.
   */
  secondaryLabel?: string;

  /**
   * Disables interaction and dims the control.
   */
  disabled?: boolean;

  /**
   * Visual size of the checkbox.
   */
  size?: CheckboxSize;

  /**
   * Pass-through press handlers.
   */
  onPress?: PressableProps["onPress"];
  onLongPress?: PressableProps["onLongPress"];

  /**
   * Testing.
   */
  testID?: string;
};

export function Checkbox({
  checked,
  onCheckedChange,
  label,
  secondaryLabel,
  disabled = false,
  size = "md",
  onPress,
  onLongPress,
  testID,
}: CheckboxProps) {
  const colorScheme = useColorScheme();

  const handlePress: PressableProps["onPress"] = (e) => {
    if (disabled) return;
    onPress?.(e);
    onCheckedChange?.(!checked);
  };

  const metrics = getMetrics(size);

  const isDark = colorScheme === "dark";
  const borderColor = isDark ? "rgba(255,255,255,0.32)" : "rgba(0,0,0,0.22)";

  return (
    <Pressable
      testID={testID}
      onPress={handlePress}
      onLongPress={disabled ? undefined : onLongPress}
      disabled={disabled}
      hitSlop={8}
      accessibilityRole="checkbox"
      accessibilityState={{ checked, disabled }}
      style={({ pressed }) => [
        styles.root,
        pressed && !disabled ? styles.pressed : null,
        disabled ? styles.disabled : null,
      ]}
    >
      <ThemedView
        colorName={checked ? "surfaceElevated" : "background"}
        style={[
          styles.box,
          {
            width: metrics.box,
            height: metrics.box,
            borderRadius: metrics.radius,
            borderColor,
          },
          disabled ? styles.boxDisabled : null,
        ]}
      >
        {checked ? (
          <ThemedText
            style={[
              styles.glyph,
              { fontSize: metrics.box - 8, lineHeight: metrics.box - 8 },
            ]}
            colorName={isDark ? "text" : "textOnPrimary"}
          >
            ✓
          </ThemedText>
        ) : null}
      </ThemedView>

      <ThemedView style={styles.labelContainer}>
        {label ? (
          <ThemedText
            style={[styles.label, disabled ? styles.labelDisabled : null]}
            colorName="textSecondary"
            numberOfLines={2}
          >
            {label}
          </ThemedText>
        ) : null}
        {secondaryLabel ? (
          <ThemedText
            style={[styles.label, disabled ? styles.labelDisabled : null]}
            colorName="textSecondary"
            numberOfLines={2}
          >
            {secondaryLabel}
          </ThemedText>
        ) : null}
      </ThemedView>
    </Pressable>
  );
}

function getMetrics(size: CheckboxSize) {
  switch (size) {
    case "sm":
      return { box: 18, radius: 5, checkW: 7, checkH: 12, stroke: 2 };
    case "lg":
      return { box: 26, radius: 8, checkW: 10, checkH: 16, stroke: 3 };
    case "md":
    default:
      return { box: 22, radius: 7, checkW: 9, checkH: 14, stroke: 2.5 };
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    alignSelf: "flex-start",
  },

  box: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  boxUnchecked: {},
  boxChecked: {},
  boxDisabled: {
    opacity: 0.55,
  },

  glyph: {
    fontWeight: "700",
    color: "rgba(255,255,255,0.92)",
  },
  labelContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 14,
    lineHeight: 18,
  },
  labelDisabled: {
    opacity: 0.6,
  },

  pressed: {
    opacity: 0.7,
  },
  disabled: {
    opacity: 0.9,
  },
});

export default Checkbox;
