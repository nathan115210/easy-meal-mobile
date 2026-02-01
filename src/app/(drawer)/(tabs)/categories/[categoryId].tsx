import { getContrastColor } from "@/utils/get-contrast-color";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React, { useMemo } from "react";
import { FlatList, StyleSheet } from "react-native";

import MealDetailInfoRow from "@/components/meal-detail/meal-detail-info-row";
import BackRow from "@/components/ui/back-row";
import Card from "@/components/ui/card";
import { ThemedView } from "@/components/ui/themed-view";
import { categoriesData, mealsData } from "@/constants/data/data";
import { useFavorites } from "@/context/favorite-context";
import { type MealItemProps } from "@/types/meal-type";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Params = {
  categoryId?: string;
  glutenFree?: string; // "1" | "0"
  vegan?: string; // "1" | "0"
  vegetarian?: string; // "1" | "0"
};

export default function CategoryMealsScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { toggleFavorite, isFavorite } = useFavorites();
  const { categoryId, glutenFree, vegan, vegetarian } =
    useLocalSearchParams<Params>();

  const safeCategoryId = typeof categoryId === "string" ? categoryId : "";
  const headerBackGround = useMemo(() => {
    return (
      categoriesData.find((category) => category.id === safeCategoryId)
        ?.color ?? "#000000"
    );
  }, [safeCategoryId]);
  const headerTintColor = useMemo(() => {
    return getContrastColor(headerBackGround);
  }, [headerBackGround]);
  console.log('headerBackGround', headerBackGround)
  const filterGlutenFree = glutenFree === "1";
  const filterVegan = vegan === "1";
  const filterVegetarian = vegetarian === "1";

  const categoryTitle = useMemo(() => {
    return (
      categoriesData.find((c) => c.id === safeCategoryId)?.title ?? "Meals"
    );
  }, [safeCategoryId]);

  const displayedMeals = useMemo(() => {
    if (!safeCategoryId) return [];

    return mealsData
      .filter((meal) => meal.categoryIds.includes(safeCategoryId))
      .filter((meal) => {
        if (filterGlutenFree && !meal.isGlutenFree) return false;
        if (filterVegan && !meal.isVegan) return false;
        if (filterVegetarian && !meal.isVegetarian) return false;
        return true;
      });
  }, [safeCategoryId, filterGlutenFree, filterVegan, filterVegetarian]);

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
    <ThemedView style={[styles.container, { paddingTop: insets.top }]}>
      <Stack.Screen options={{ headerShown: false }} />
      <BackRow title={categoryTitle} backgroundColor={headerBackGround}/>

      <FlatList
        contentContainerStyle={styles.mealsListContent}
        data={displayedMeals}
        ItemSeparatorComponent={() => <ThemedView style={styles.separator} />}
        renderItem={({ item }) => renderMealItemCard(item as MealItemProps)}
        keyExtractor={(item) => (item as MealItemProps).id}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  mealsListContent: { padding: 32 },
  separator: { height: 24 },
});
