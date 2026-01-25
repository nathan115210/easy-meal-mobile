import React, { useEffect, useMemo, useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Keyboard,
  Platform,
} from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";

type SearchParams = {
  query?: string;
};

export default function SearchTabScreen() {
  const router = useRouter();
  const { query } = useLocalSearchParams<SearchParams>();

  // Query from route params (single source of truth for "submitted" search)
  const submittedQuery = useMemo(
    () => (typeof query === "string" ? query : ""),
    [query],
  );

  // Local input state for responsive typing (doesn't spam history)
  const [input, setInput] = useState(submittedQuery);

  // Keep input in sync if the route param changes externally (deep links, nav, etc.)
  useEffect(() => {
    setInput(submittedQuery);
  }, [submittedQuery]);

  const commitQueryToRoute = (next: string) => {
    const trimmed = next.trim();

    // Use replace so you don't create a new history entry per submit.
    // If you WANT each submitted query to be "back"-navigable, change to router.push.
    router.replace({
      pathname: "/(tabs)/search",
      params: trimmed ? { query: trimmed } : {},
    });

    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Search",
        }}
      />

      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="Search meals..."
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
        returnKeyType="search"
        onSubmitEditing={() => commitQueryToRoute(input)}
        style={styles.input}
        // Helps Android keyboard IME behavior a bit
        blurOnSubmit={Platform.OS !== "web"}
      />

      <View style={styles.resultBox}>
        <Text style={styles.label}>Submitted query (route param):</Text>
        <Text style={styles.value}>
          {submittedQuery ? submittedQuery : "(empty)"}
        </Text>
      </View>

      <View style={styles.resultBox}>
        <Text style={styles.label}>Current input (local state):</Text>
        <Text style={styles.value}>{input ? input : "(empty)"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
  input: {
    height: 44,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#999",
    backgroundColor: "white",
  },
  resultBox: {
    padding: 12,
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#ddd",
    backgroundColor: "#fafafa",
    gap: 6,
  },
  label: {
    fontSize: 12,
    color: "#666",
  },
  value: {
    fontSize: 16,
    color: "#111",
  },
});
