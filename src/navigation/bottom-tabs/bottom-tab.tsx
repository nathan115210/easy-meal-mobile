import React from "react";
import CategoriesScreen from "../screens/categories-screen";
import CustomHeaderTitle from "@/components/navigation/custom-header-title";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchScreen from "../screens/search-screen";

const customHeaderOptions = {
  headerTitle: () => <CustomHeaderTitle />,
};

export const BottomTabs = createBottomTabNavigator({
  screens: {
    Home: {
      screen: CategoriesScreen,
      backBehavior: "order",
      options: {
        ...customHeaderOptions,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} />
        ),
        tabBarBadge: 10,
      },
    },
    Home2: {
      screen: CategoriesScreen,
      options: {
        ...customHeaderOptions,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="star" color={color} size={size} />
        ),
      },
    },
    Search: {
      screen: SearchScreen,
      options: {
        ...customHeaderOptions,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="search" color={color} size={size} />
        ),
      },
    },
  },
});
