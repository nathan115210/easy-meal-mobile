import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { router, Stack } from "expo-router";
import { type MealItemProps } from "@/types/meal-type";
import { mealsData } from "@/constants/data/data";

import { ThemedText } from "@/components/ui/themed-text";
import { ThemedView } from "@/components/ui/themed-view";
import { useFavorites } from "@/context/favorite-context";
import Card from "@/components/ui/card";
import MealDetailInfoRow from "@/components/meal-detail/meal-detail-info-row";

export default function FavoritesTabScreen() {
  const { getFavoritesArray, toggleFavorite, isFavorite } = useFavorites();
  const favoritesList = getFavoritesArray();

  if (favoritesList.length === 0) {
    return (
      <ThemedView style={styles.container}>
        <Stack.Screen options={{ title: "Favorites" }} />

        <ThemedText type="title">Favorites</ThemedText>
        <ThemedText>
          You have no favorite meals yet. Start adding some!
        </ThemedText>
      </ThemedView>
    );
  }

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

  const extractFavoriteMeals = (): MealItemProps[] => {
    return mealsData.filter((meal) => favoritesList.includes(meal.id));
  };

  const favoriteMeals = extractFavoriteMeals();
  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ title: "Favorites" }} />

      <ThemedText type="title">Favorites</ThemedText>
      <FlatList
        data={favoriteMeals}
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
    padding: 16,
    gap: 12,
  },
  separator: {
    height: 24,
  },
});
