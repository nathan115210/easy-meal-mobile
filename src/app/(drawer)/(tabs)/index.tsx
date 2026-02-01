import { Stack, useRouter } from "expo-router";
import React from "react";
import { FlatList, StyleSheet } from "react-native";

import MealDetailInfoRow from "@/components/meal-detail/meal-detail-info-row";
import Card from "@/components/ui/card";
import { ThemedView } from "@/components/ui/themed-view";
import { mealsData } from "@/constants/data/data";
import { useFavorites } from "@/context/favorite-context";
import { type MealItemProps } from "@/types/meal-type";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type MealsOverviewParams = {
  categoryId?: string;
  categoryName?: string;
  glutenFree?: string; // "1" | "0"
  vegan?: string; // "1" | "0"
  vegetarian?: string; // "1" | "0"
};

export default function MealsOverviewRoute() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { toggleFavorite, isFavorite } = useFavorites();


  function renderMealItemCard(item: MealItemProps) {
    const { id, title, imageUrl, duration, complexity, affordability } = item;

    return (
      <Card
        title={title}
        imageUrl={imageUrl}
        isFavorite={isFavorite(id)}
        onFavoriteToggle={() => toggleFavorite(id)}
        onPress={() =>
          router.push({
            pathname: "/meal/[mealId]",
            params: { mealId: id },
          })
        }
      >
        <MealDetailInfoRow
          duration={duration}
          complexity={complexity}
          affordability={affordability}
          background="surface"
        />
      </Card>
    );
  }

  return (
    <ThemedView style={[styles.container, { marginTop: insets.top + 32, paddingBlockEnd: insets.bottom }]}>
      <Stack.Screen
        options={{
          headerBackTitle: "Home",
        }}
      />

      <FlatList
        contentContainerStyle={styles.mealsListContent}
        data={mealsData}
        ItemSeparatorComponent={() => <ThemedView style={styles.separator} />}
        renderItem={({ item }) => renderMealItemCard(item as MealItemProps)}
        keyExtractor={(item) => (item as MealItemProps).id}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mealsListContent: {
    padding: 32,
  },
  separator: {
    height: 24,
  },
});
