import React from "react";
import { FlatList } from "react-native";
import { useRouter } from "expo-router";

import { categoriesData } from "@/constants/data/data";
import GridItem from "@/components/ui/grid-item";
import { type CategoryItemProps } from "@/types/category-type";

export default function HomeTabScreen() {
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
    <>
      <FlatList
        data={categoriesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderCategoryItem(item)}
        numColumns={numColumns}
        key={String(numColumns)}
      />
    </>
  );
}
