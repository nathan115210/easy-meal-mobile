import { Assets as NavigationAssets } from "@react-navigation/elements";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { Asset } from "expo-asset";
import { createURL } from "expo-linking";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";
import { useColorScheme } from "react-native";
import { Navigation } from "./navigation";
import { StatusBar } from "expo-status-bar";
import { NavigationThemeColors } from "@/constants/theme";

Asset.loadAsync([
  ...NavigationAssets,
  // adding more navigation assets here
]);
SplashScreen.preventAutoHideAsync();
const prefix = createURL("/");

export default function App() {
  const colorScheme = useColorScheme();

  const theme =
    colorScheme === "dark"
      ? {
          ...DarkTheme,
          colors: NavigationThemeColors.dark,
        }
      : {
          ...DefaultTheme,
          colors: NavigationThemeColors.light,
        };

  return (
    <>
      <StatusBar style="auto" />
      <Navigation
        theme={theme}
        linking={{
          enabled: "auto",
          prefixes: [prefix],
        }}
        onReady={() => {
          SplashScreen.hideAsync();
        }}
      />
    </>
  );
}
