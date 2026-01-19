import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { NavigationThemeColors } from "@/constants/theme";

// Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
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

  // You can add logic here to hide the splash screen after assets are loaded
  // React.useEffect(() => {
  //   SplashScreen.hideAsync();
  // }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <SafeAreaProvider>
          <ThemeProvider value={theme}>
            <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              {/*<Stack.Screen name="modal" options={{ presentation: "modal" }} />*/}
            </Stack>
          </ThemeProvider>
        </SafeAreaProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
