import React from "react";
import { Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/categories-screen";
import MealsOverviewScreen from "./screens/meals-overview-screen";
import MealDetailScreen from "./screens/meal-detail-screen";
import { createStaticNavigation } from "@react-navigation/native";
import IconButton from "@/components/ui/icon-button";
import ShareButton from "@/components/share-button";

const RootStack = createNativeStackNavigator({
  screens: {
    Categories: {
      screen: CategoriesScreen,
      options: {
        title: "Categories",
        //headerShown: false,
      },
    },
    MealsOverview: {
      screen: MealsOverviewScreen,
      linking: {
        parse: {
          categoryId: (categoryId) => String(categoryId),
          categoryName: (categoryName) => String(categoryName),
        },
        //prefixes: ["easy-meal://"],
      },
      options: {
        title: "Meals Overview",
        headerBackTitle: "Back",
        headerRight: () => (
          // TODO: Implement filter functionality
          <Button title="Filter" onPress={() => console.log("filter")} />
        ),
      },
    },
    MealDetail: {
      screen: MealDetailScreen,
      linking: {
        path: "meal/:mealId",
        parse: {
          mealId: (mealId) => String(mealId),
        },
      },
      options: ({ navigation }) => ({
        headerTransparent: true,
        headerTitle: "",
        headerLeft: () => (
          <IconButton
            onPress={() => navigation.goBack()}
            iconName={{
              ios: "chevron-back",
              android: "arrow-back",
            }}
          />
        ),
        //TODO: add more button, to open the bottom sheet modal
        headerRight: () => <ShareButton />,
      }),
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);
