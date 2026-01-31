import { mealsData } from "@/constants/data/data";
import { type MealItemProps } from "@/types/meal-type";
import { router, Stack } from "expo-router";
import React from "react";
import { FlatList, StyleSheet } from "react-native";

import MealDetailInfoRow from "@/components/meal-detail/meal-detail-info-row";
import Card from "@/components/ui/card";
import { ThemedText } from "@/components/ui/themed-text";
import { ThemedView } from "@/components/ui/themed-view";
import { useFavorites } from "@/context/favorite-context";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function FavoritesTabScreen() {
    const insets = useSafeAreaInsets();

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
        contentContainerStyle={{
         paddingTop: insets.top + 6, paddingBlockEnd: insets.bottom + 60
         }}
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
