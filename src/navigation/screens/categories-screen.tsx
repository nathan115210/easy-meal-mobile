import { FlatList } from "react-native";
import { categoriesData } from "@/constants/data/data";
import Category from "@/constants/models/category";
import GridItem from "@/components/ui/grid-item";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Categories: undefined;
  MealsOverview: { categoryId: string; categoryName: string };
};

function CategoriesScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const numColumns = 2; // keep number of columns in a variable so we can use it as the FlatList key

  function renderCategoryItem(item: Category) {
    return (
      <GridItem
        title={item.title}
        color={item.color}
        onPress={() =>
          navigation.navigate("MealsOverview", {
            categoryId: item.id,
            categoryName: item.title,
          })
        }
      />
    );
  }

  return (
    <FlatList
      data={categoriesData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => renderCategoryItem(item)}
      numColumns={numColumns}
      key={String(numColumns)}
    />
  );
}

export default CategoriesScreen;
