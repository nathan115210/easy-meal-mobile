import { mealsData, categoriesData } from "@/constants/data/data";
import { ThemedView } from "@/components/ui/themed-view";
import { StaticScreenProps, useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import { getContrastColor } from "@/utils/get-contrast-color";
import MealItem from "@/components/meal-item";

type RootStackParamList = {
  Categories: undefined;
  MealsOverview: { categoryId: string; categoryName: string };
  MealDetail: { mealId: string };
};

type MealsOverviewProps = StaticScreenProps<{
  categoryId: string;
  categoryName: string;
}>;

function MealsOverviewScreen({ route }: MealsOverviewProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { categoryId, categoryName } = route.params;

  useLayoutEffect(() => {
    const headerBackGround =
      categoriesData.find((category) => category.id === categoryId)?.color ??
      "#000000";

    navigation.setOptions({
      title: categoryName,
      headerStyle: {
        backgroundColor: headerBackGround,
      },
      headerTintColor: getContrastColor(headerBackGround),
    });
  }, [navigation, categoryName, categoryId]);

  const displayedMeals = mealsData.filter((meal) =>
    meal.categoryIds.includes(categoryId),
  );

  return (
    <ThemedView style={styles.container}>
      <FlatList
        contentContainerStyle={styles.mealsListContent}
        data={displayedMeals}
        ItemSeparatorComponent={() => <ThemedView style={styles.separator} />}
        renderItem={({ item }) => {
          const { id, title, imageUrl, duration, complexity, affordability } =
            item;
          return (
            <MealItem
              id={id}
              title={title}
              imageUrl={imageUrl}
              duration={duration}
              complexity={complexity}
              affordability={affordability}
              onPress={(mealId) =>
                navigation.navigate("MealDetail", { mealId })
              }
            />
          );
        }}
        keyExtractor={(item) => item.id}
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

export default MealsOverviewScreen;
