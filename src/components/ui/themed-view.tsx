import { View, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/use-theme-color";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  /**
   * Which semantic token to use for the background color.
   * Defaults to "background".
   */
  colorName?: "background" | "surface" | "surfaceElevated";
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  colorName = "background",
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    colorName,
  );
  console.log("backgroundColor", backgroundColor);
  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
