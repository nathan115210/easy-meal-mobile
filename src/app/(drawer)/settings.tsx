import React from "react";
import { StyleSheet, View } from "react-native";
import { Stack } from "expo-router";
import { ThemedText } from "@/components/ui/themed-text";
import { ThemedView } from "@/components/ui/themed-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useDrawer from "@/hooks/use-drawer";

export default function SettingsScreen() {
  const inset = useSafeAreaInsets();
  const { DrawerTrigger } = useDrawer({ to: "back" });
  return (
    <>
      {/* Hide default header; we render our own custom header below but provide headerLeft for back button */}
      <Stack.Screen
        /*options={{
                        /!*headerShown: true,
                        headerLeft: () => <DrawerTrigger/!*!/>,

                    }}*/
        options={{
          // Match your previous native-stack setup
          headerTransparent: true,
          headerShown: true,
          headerTitle: "",
          headerLeft: () => <DrawerTrigger />,
        }}
      />

      <ThemedView style={[styles.container, { paddingTop: inset.top * 12 }]}>
        <View style={styles.content}>
          <ThemedText type="title" style={styles.title}>
            Settings
          </ThemedText>
          <ThemedText>
            Put your settings controls here (toggles, links, etc.).
          </ThemedText>
        </View>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    paddingTop: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#ddd",
  },
  content: { padding: 16, justifyContent: "center", alignItems: "center" },
  title: { marginBottom: 8 },
  footer: { padding: 16, alignItems: "center" },
  closeButton: {
    alignSelf: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "#e91e63",
    borderRadius: 8,
  },
  closeText: { color: "#fff", fontWeight: "600" },
});
