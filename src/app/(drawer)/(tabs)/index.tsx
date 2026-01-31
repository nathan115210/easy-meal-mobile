import GridItem from "@/components/ui/grid-item";
import { ThemedView } from "@/components/ui/themed-view";
import { categoriesData } from "@/constants/data/data";
import { type CategoryItemProps } from "@/types/category-type";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeTabScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const numColumns = 2;

  function renderCategoryItem(item: CategoryItemProps) {
    return (
      <GridItem
        title={item.title}
        color={item.color}
        backgroundImage={item.imageUrl}
        onPress={() => {
          router.push({
            pathname: "/meals-overview",
            params: {
              categoryId: item.id,
              categoryName: item.title,
            },
          });
        }}
      />
    );
  }

  return (
     <ThemedView >
      <FlatList
        contentContainerStyle={{
         paddingTop: insets.top + 60, paddingBlockEnd: insets.bottom + 60
         }}
        data={categoriesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderCategoryItem(item)}
        numColumns={numColumns}
        key={String(numColumns)}
      />
    </ThemedView>
  );
}
