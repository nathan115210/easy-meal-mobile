import { mealsData, categoriesData } from "@/constants/data/data";
import { ThemedView } from "@/components/ui/themed-view";
import { StaticScreenProps, useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import { getContrastColor } from "@/utils/get-contrast-color";
import Card from "@/components/ui/card";
import MealDetailInfoRow from "@/components/meal-detail/meal-detail-info-row";
import { MealItemProps } from "@/types/meal-type";

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

  function renderMealItemCard(item: MealItemProps) {
    const { id, title, imageUrl, duration, complexity, affordability } = item;
    const handleOnPress = (mealId: string) =>
      navigation.navigate("MealDetail", { mealId });
    return (
      <Card title={title} imageUrl={imageUrl} onPress={() => handleOnPress(id)}>
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
      <FlatList
        contentContainerStyle={styles.mealsListContent}
        data={displayedMeals}
        ItemSeparatorComponent={() => <ThemedView style={styles.separator} />}
        renderItem={({ item }) => renderMealItemCard(item)}
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
