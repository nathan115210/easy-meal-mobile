import { StyleSheet, Text, type TextProps } from "react-native";

import { useThemeColor } from "@/hooks/use-theme-color";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
  /**
   * Which semantic token to use for the text color.
   * Defaults to "text".
   */
  colorName?:
    | "text"
    | "textSecondary"
    | "textMuted"
    | "textOnPrimary"
    | "textOnSurface";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  colorName = "text",
  ...rest
}: ThemedTextProps) {
  const accentColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "accent",
  );

  const themedColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    colorName,
  );

  const color = type === "link" ? accentColor : themedColor;

  return (
    <Text
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
  },
});
