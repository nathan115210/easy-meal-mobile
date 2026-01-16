import React from "react";
import {
  Pressable,
  StyleSheet,
  View,
  type PressableProps,
  type ViewStyle,
  type StyleProp,
} from "react-native";
import { ThemedText } from "@/components/ui/themed-text";
import { ThemedView } from "@/components/ui/themed-view";

export type ChipVariant = "solid" | "outline";

export type ChipProps = {
  label: string;
  selected?: boolean;
  disabled?: boolean;
  variant?: ChipVariant;

  icon?: React.ReactNode;

  onPress?: PressableProps["onPress"];
  onLongPress?: PressableProps["onLongPress"];

  removable?: boolean;
  onRemove?: () => void;

  style?: StyleProp<ViewStyle>;
  testID?: string;
};

export function Chip({
  label,
  selected = false,
  disabled = false,
  variant = "solid",
  icon,
  onPress,
  onLongPress,
  removable = false,
  onRemove,
  style,
  testID,
}: ChipProps) {
  const interactive = Boolean(onPress || onLongPress);
  const Root: any = interactive ? Pressable : View;

  return (
    <ThemedView
      style={[
        styles.base,
        variant === "outline" ? styles.outlineBase : styles.solidBase,
        selected &&
          (variant === "outline"
            ? styles.outlineSelected
            : styles.solidSelected),
        disabled && styles.disabled,
        style,
      ]}
      colorName={variant === "outline" ? "background" : "surfaceElevated"}
      testID={testID}
    >
      <Root
        disabled={disabled || !interactive}
        onPress={onPress}
        onLongPress={onLongPress}
        style={styles.content}
        accessibilityRole={interactive ? "button" : undefined}
        accessibilityState={{ disabled, selected }}
        hitSlop={8}
      >
        {!!icon && <View style={styles.icon}>{icon}</View>}

        <ThemedText
          type="default"
          style={[
            styles.label,
            variant === "outline" ? styles.labelOutline : styles.labelSolid,
            disabled && styles.labelDisabled,
          ]}
          numberOfLines={1}
        >
          {label}
        </ThemedText>

        {removable && (
          <Pressable
            onPress={onRemove}
            disabled={disabled || !onRemove}
            hitSlop={10}
            accessibilityRole="button"
            accessibilityLabel={`Remove ${label}`}
            style={({ pressed }) => [
              styles.removeButton,
              pressed && styles.pressed,
            ]}
          >
            <ThemedText
              style={[styles.removeText, disabled && styles.labelDisabled]}
            >
              ×
            </ThemedText>
          </Pressable>
        )}
      </Root>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 999,
    overflow: "hidden",
  },
  content: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  solidBase: {
    borderWidth: 0,
  },
  solidSelected: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.12)",
  },

  outlineBase: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.18)",
  },
  outlineSelected: {
    borderColor: "rgba(0,0,0,0.35)",
  },

  label: {
    fontSize: 14,
    lineHeight: 18,
  },
  labelSolid: {},
  labelOutline: {},
  labelDisabled: {
    opacity: 0.5,
  },

  icon: {
    alignItems: "center",
    justifyContent: "center",
  },

  removeButton: {
    marginLeft: 2,
    width: 24,
    height: 24,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
  removeText: {
    fontSize: 18,
    lineHeight: 18,
  },
  pressed: {
    opacity: 0.6,
  },

  disabled: {
    opacity: 0.8,
  },
});
