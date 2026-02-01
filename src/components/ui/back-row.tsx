import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedView } from "./themed-view";

type BackRowProps = {
  title: string;
  backgroundColor?: string;
  textColor?: string;
};

function BackRow({ title, backgroundColor, textColor }: BackRowProps) {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();

  const color = textColor ?? (colorScheme === "dark" ? "#FFFFFF" : "#000000");

  return (
    <ThemedView
      style={[
        styles.backRow,
        {
          paddingTop: insets.top + 8,
          backgroundColor: backgroundColor ?? undefined,
        },
      ]}
    >
      {/* Blur base */}
      <BlurView
        intensity={99}
        tint={colorScheme === "dark" ? "dark" : "light"}
        style={StyleSheet.absoluteFill}
      />
      {backgroundColor && (
        <View
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor,
              opacity: colorScheme === "dark" ? 0.7 : 0.6,
            },
          ]}
        />
      )}
      <Pressable
        onPress={() => router.back()}
        hitSlop={10}
        style={({ pressed }) => [styles.backButton, pressed && styles.pressed]}
      >
        <Ionicons name="chevron-back" size={24} color={color} />

        {/* ✅ Give text a flex container in the same row */}
        <View style={styles.titleWrap}>
          <Text style={[styles.title, { color }]} numberOfLines={1}>
            {title}
          </Text>
        </View>
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  backRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 16,
  },

  backButton: {
    flexDirection: "row",
    gap: 6, // RN 0.71+; if not supported, use marginLeft on titleWrap
  },

  pressed: {
    opacity: 0.6,
  },

  titleWrap: {
    flexShrink: 1, // allow truncation
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default BackRow;
