import { ThemedText } from "@/components/ui/themed-text";
import { ThemedView } from "@/components/ui/themed-view";
import { useNavigation } from "expo-router";
import { SetStateAction, useEffect, useMemo, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Item = {
  id: string;
  title: string;
};

const DATA: Item[] = [
  { id: "1", title: "Chicken Curry" },
  { id: "2", title: "Beef Stew" },
  { id: "3", title: "Salmon Teriyaki" },
  { id: "4", title: "Pasta Carbonara" },
  { id: "5", title: "Vegetable Soup" },
];

export default function SearchScreen() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const [query, setQuery] = useState("");

  useEffect(() => {
    // iOS native search bar (ignored on Android)
    navigation.setOptions({
      headerSearchBarOptions: {
        placeholder: "Search meals",
        hideWhenScrolling: false,
        onChangeText: (event: {
          nativeEvent: { text: SetStateAction<string> };
        }) => {
          setQuery(event.nativeEvent.text);
        },
        onCancelButtonPress: () => {
          setQuery("");
        },
      },
    });
  }, [navigation]);

  const filteredData = useMemo(() => {
    if (!query) return DATA;
    return DATA.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query]);

  return (
    <ThemedView
      style={[
        styles.container,
        {
          marginBlockStart: insets.top + 60,
          paddingBlockEnd: insets.bottom + 60,
        },
      ]}
    >
      {filteredData.length === 0 ? (
        <ThemedText style={styles.empty}>No results</ThemedText>
      ) : (
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id}
          contentInsetAdjustmentBehavior="automatic"
          renderItem={({ item }) => (
            <ThemedView style={styles.row}>
              <ThemedText style={styles.title}>{item.title}</ThemedText>
            </ThemedView>
          )}
        />
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#E5E5EA",
  },
  title: {
    fontSize: 16,
  },
  empty: {
    textAlign: "center",
    marginTop: 40,
    color: "#8E8E93",
  },
});
