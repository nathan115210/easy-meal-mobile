import React from "react";
import { StyleSheet } from "react-native";
import { Stack } from "expo-router";

import { ThemedText } from "@/components/ui/themed-text";
import { ThemedView } from "@/components/ui/themed-view";

export default function FavoritesTabScreen() {
  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ title: "Favorites" }} />

      <ThemedText type="title">Favorites</ThemedText>
      <ThemedText>
        This is a placeholder. Next we can wire this up to your favorites state
        and render a list of favorited meals here.
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
});
