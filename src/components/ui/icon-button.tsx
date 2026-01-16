import React from "react";
import {
  Platform,
  Pressable,
  StyleSheet,
  type StyleProp,
  type ViewStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type IoniconName = React.ComponentProps<typeof Ionicons>["name"];

export type BackIconButtonProps = {
  iconName: {
    ios: IoniconName;
    android: IoniconName;
  };
  onPress: () => void;
  /**
   * Icon color. Defaults to white (common for transparent headers over images).
   */
  color?: string;
  /**
   * Icon size in dp.
   */
  size?: number;
  /**
   * Square press target size (dp). Keep >= 44 for accessibility.
   */
  hitSize?: number;
  /**
   * Optional style override for the press target container.
   */
  style?: StyleProp<ViewStyle>;
};

export default function IconButton({
  onPress,
  color = "#ffffff",
  size = 32,
  hitSize = 32,
  style,
  iconName = {
    ios: "chevron-back",
    android: "arrow-back",
  },
}: BackIconButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={32}
      style={[styles.container, { width: hitSize, height: hitSize }, style]}
      accessibilityRole="button"
      accessibilityLabel="Back"
    >
      <Ionicons
        name={Platform.OS === "ios" ? iconName.ios : iconName.android}
        size={size}
        color={color}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
});
