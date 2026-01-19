import { useState } from "react";
import { StyleSheet, Button, View, useColorScheme } from "react-native";
import { ThemedText } from "@/components/ui/themed-text";
import { ThemedView } from "@/components/ui/themed-view";
import IconButton from "@/components/ui/icon-button";
import { Checkbox } from "@/components/ui/checkbox";
import { MealItemProps } from "@/types/meal-type";
import BottomSheetModal from "@/components/ui/bottom-sheet-modal";

function MealDetailIngredients({
  ingredients,
}: {
  ingredients: MealItemProps["ingredients"];
}) {
  const colorScheme = useColorScheme();
  const [showIngredientsInfo, setShowIngredientsInfo] = useState(false);
  const [checkedIngredients, setCheckedIngredients] = useState<
    Record<string, boolean>
  >({});

  const toggleIngredient = (ingredient: string) => {
    setCheckedIngredients((prev: Record<string, boolean>) => ({
      ...prev,
      [ingredient]: !prev[ingredient],
    }));
  };

  return (
    <ThemedView>
      <ThemedView
        style={[
          styles.headerContainer,
          { borderBottomColor: colorScheme === "light" ? "black" : "white" },
        ]}
      >
        <View
          style={[
            styles.titleContainer,
            { borderBottomColor: colorScheme === "light" ? "black" : "white" },
          ]}
        >
          <ThemedText colorName="textSecondary">Ingredients </ThemedText>
          <IconButton
            size={24}
            color={colorScheme === "light" ? "black" : "white"}
            onPress={() => setShowIngredientsInfo(!showIngredientsInfo)}
            iconName={{
              ios: "information-circle",
              android: "information-circle-outline",
            }}
          />
        </View>
        <Button
          title="Convert"
          color={colorScheme === "light" ? "red" : "yellow"}
          onPress={() => {
            // TODO: conversion logic here
          }}
          accessibilityLabel="Convert Ingredients"
        ></Button>
      </ThemedView>
      <ThemedView style={{ gap: 10, marginTop: 8 }}>
        {ingredients.map((ingredient, index) => (
          <Checkbox
            key={`${ingredient.name}-${index}`}
            label={ingredient.name}
            secondaryLabel={ingredient.amount}
            checked={Boolean(checkedIngredients[ingredient.name])}
            onCheckedChange={() => toggleIngredient(ingredient.name)}
          />
        ))}

        <BottomSheetModal
          visible={showIngredientsInfo}
          onClose={() => setShowIngredientsInfo(!showIngredientsInfo)}
          title="Quick Add"
        >
          <ThemedText>
            All ingredients can be added to your Shopping List with one tap.
          </ThemedText>
        </BottomSheetModal>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    paddingBlockEnd: 6,
    marginBlockEnd: 6,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    gap: 18,
  },
});

export default MealDetailIngredients;
