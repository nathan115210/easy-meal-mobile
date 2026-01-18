import React from "react";
import { createNativeBottomTabNavigator } from "@react-navigation/bottom-tabs/unstable";
import CategoriesScreen from "../screens/categories-screen";
import SearchScreen from "../screens/search-screen";
import CustomHeaderTitle from "@/components/navigation/custom-header-title";
import { Platform } from "react-native";

const customHeaderOptions = {
  headerTitle: () => <CustomHeaderTitle />,
};

export const NativeUnstableHomeBottomTab = createNativeBottomTabNavigator({
  // Only supported on iOS 26 and above. Other platforms/versions will ignore it.
  tabBarMinimizeBehavior: "onScrollDown",
  screens: {
    Home: {
      screen: CategoriesScreen,
      options: {
        ...customHeaderOptions,
        tabBarSystemItem: "featured",
        tabBarBadge: 10,
      },
    },
    Home2: {
      screen: CategoriesScreen,
      options: {
        ...customHeaderOptions,
        tabBarSystemItem: "topRated",
      },
    },
    Search: {
      screen: SearchScreen,
      options: ({ navigation }) => ({
        ...customHeaderOptions,
        headerShown: true,

        tabBarSystemItem: "search",
        headerSearchBarOptions: {
          placeholder: "Search Meals",
          onSearchButtonPress: (e) => {
            let query: string | undefined;
            if (Platform.OS === "ios") {
              query = e.nativeEvent.text;
            } else {
              // The event type is incorrect for Android, so we cast to access the 'text' property.
              query = (e as unknown as { text: string }).text;
            }

            if (query !== undefined) {
              navigation.navigate("Search", { query });
            }
          },
        },
      }),
    },
  },
});
