import React, { useMemo } from "react";
import { FlatList, StyleSheet } from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";

import { mealsData, categoriesData } from "@/constants/data/data";
import { ThemedView } from "@/components/ui/themed-view";
import { getContrastColor } from "@/utils/get-contrast-color";
import Card from "@/components/ui/card";
import MealDetailInfoRow from "@/components/meal-detail/meal-detail-info-row";
import { type MealItemProps } from "@/types/meal-type";

type MealsOverviewParams = {
  categoryId?: string;
  categoryName?: string;

  glutenFree?: string; // "1" | "0"
  vegan?: string; // "1" | "0"
  vegetarian?: string; // "1" | "0"
};

export default function MealsOverviewRoute() {
  const router = useRouter();

  const { categoryId, categoryName, glutenFree, vegan, vegetarian } =
    useLocalSearchParams<MealsOverviewParams>();

  const safeCategoryId = typeof categoryId === "string" ? categoryId : "";
  const safeCategoryName =
    typeof categoryName === "string" ? categoryName : "Meals";

  const filterGlutenFree = glutenFree === "1";
  const filterVegan = vegan === "1";
  const filterVegetarian = vegetarian === "1";

  const headerBackGround = useMemo(() => {
    return (
      categoriesData.find((category) => category.id === safeCategoryId)
        ?.color ?? "#000000"
    );
  }, [safeCategoryId]);

  const headerTintColor = useMemo(() => {
    return getContrastColor(headerBackGround);
  }, [headerBackGround]);

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
    <ThemedView style={styles.container}>
      <Stack.Screen
        options={{
          title: safeCategoryName,
          headerBackTitle: "Home",
          headerStyle: { backgroundColor: headerBackGround },
          headerTintColor,
        }}
      />

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
