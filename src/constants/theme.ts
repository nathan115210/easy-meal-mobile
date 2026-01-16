import { Platform } from "react-native";

/**
 * Easy Meal app theme
 *
 * Notes:
 * - `Colors.light` and `Colors.dark` must share the same keys because `use-theme-color.ts`
 *   indexes them with: `keyof typeof Colors.light & keyof typeof Colors.dark`.
 * - The palette below gives you brand colors + semantic roles + a few UI surfaces.
 */

/** Brand */
const brandPrimary = "#22C55E"; // green
const brandSecondary = "#F97316"; // orange
const brandAccent = "#0EA5E9"; // sky

/** Neutrals */
const white = "#FFFFFF";
const black = "#0B0F14";

/** Light neutrals */
const gray50 = "#F8FAFC";
const gray100 = "#F1F5F9";
const gray200 = "#E2E8F0";
const gray300 = "#CBD5E1";
const gray600 = "#475569";
const gray700 = "#334155";
const gray900 = "#0F172A";

/** Dark neutrals */
const darkBg = "#0B1220";
const darkSurface = "#111B2E";
const darkBorder = "#22304A";
const darkText = "#E6EDF7";
const darkMuted = "#A6B3C6";

/** Semantic */
const success = "#16A34A";
const warning = "#F59E0B";
const error = "#EF4444";
const info = brandAccent;

/** Common helpers */
const overlay = "rgba(0,0,0,0.45)";

/**
 * Main app color tokens
 *
 * Keep these keys stable and semantic. In components, prefer semantic tokens
 * like `primary`, `surface`, `textSecondary`, `border`, `error`, etc.
 */
export const Colors = {
  light: {
    /** Text */
    text: gray900,
    textSecondary: gray700,
    textMuted: gray600,
    textOnPrimary: white,
    textOnSecondary: white,
    textOnSurface: gray900,

    /** Surfaces */
    background: gray50,
    surface: white,
    surfaceElevated: gray100,

    /** Brand / actions */
    primary: brandPrimary,
    secondary: brandSecondary,
    accent: brandAccent,

    /** Legacy / compatibility */
    tint: brandPrimary, // kept for existing usages
    icon: gray600,
    tabIconDefault: gray600,
    tabIconSelected: brandPrimary,

    /** UI */
    border: gray200,
    divider: gray200,
    shadow: "rgba(2, 6, 23, 0.15)",
    overlay,

    /** Semantic */
    success,
    warning,
    error,
    info,

    /** Inputs */
    inputBackground: white,
    inputBorder: gray300,
    placeholder: gray600,
  },
  dark: {
    /** Text */
    text: darkText,
    textSecondary: "#C9D6E8",
    textMuted: darkMuted,
    textOnPrimary: black,
    textOnSecondary: black,
    textOnSurface: darkText,

    /** Surfaces */
    background: darkBg,
    surface: darkSurface,
    surfaceElevated: "#152343",

    /** Brand / actions */
    primary: "#4ADE80", // slightly brighter for dark backgrounds
    secondary: "#FB923C",
    accent: "#38BDF8",

    /** Legacy / compatibility */
    tint: "#4ADE80",
    icon: darkMuted,
    tabIconDefault: darkMuted,
    tabIconSelected: "#4ADE80",

    /** UI */
    border: darkBorder,
    divider: darkBorder,
    shadow: "rgba(0,0,0,0.6)",
    overlay,

    /** Semantic */
    success: "#22C55E",
    warning: "#FBBF24",
    error: "#F87171",
    info: "#38BDF8",

    /** Inputs */
    inputBackground: "#0E1931",
    inputBorder: darkBorder,
    placeholder: darkMuted,
  },
} as const;

/**
 * Standard navigation theme mapping helpers.
 * Use these when you need a `@react-navigation/native` compatible theme object.
 */
export type AppColorScheme = keyof typeof Colors;

export const NavigationThemeColors = {
  light: {
    primary: Colors.light.primary,
    background: Colors.light.background,
    card: Colors.light.surface,
    text: Colors.light.text,
    border: Colors.light.border,
    notification: Colors.light.accent,
  },
  dark: {
    primary: Colors.dark.primary,
    background: Colors.dark.background,
    card: Colors.dark.surface,
    text: Colors.dark.text,
    border: Colors.dark.border,
    notification: Colors.dark.accent,
  },
} as const;

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "system-ui",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
});
