import React from "react";
import { StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { ThemedView } from "@/components/ui/themed-view";
import { ThemedText } from "@/components/ui/themed-text";

const SearchScreen = () => {
  const route = useRoute();
  const query = (route.params as { query?: string })?.query ?? "";

  return (
    <ThemedView style={styles.container}>
      {query ? (
        <ThemedText style={styles.text}>You searched for: {query}</ThemedText>
      ) : (
        <ThemedText style={styles.text}>
          Use the native search bar in the tab to search for meals.
        </ThemedText>
      )}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 80,
  },

  text: {
    fontSize: 16,
  },
});

export default SearchScreen;
