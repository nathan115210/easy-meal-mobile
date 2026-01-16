import { useState } from "react";
import { StyleSheet, Modal, Button, View, useColorScheme } from "react-native";
import { ThemedText } from "@/components/ui/themed-text";
import { ThemedView } from "@/components/ui/themed-view";
import IconButton from "@/components/ui/icon-button";
import { Checkbox } from "@/components/ui/checkbox";

import { MealItemProps } from "@/types/meal-type";

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
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <ThemedText colorName="textSecondary">Ingredients </ThemedText>
        <IconButton
          color={colorScheme === "light" ? "black" : "white"}
          onPress={() => setShowIngredientsInfo(!showIngredientsInfo)}
          iconName={{
            ios: "information-circle",
            android: "information-circle-outline",
          }}
        ></IconButton>
      </ThemedView>
      <ThemedView style={{ gap: 10, marginTop: 8 }}>
        {ingredients.map((ingredient) => (
          <Checkbox
            key={ingredient}
            label={ingredient}
            checked={Boolean(checkedIngredients[ingredient])}
            onCheckedChange={() => toggleIngredient(ingredient)}
          />
        ))}
        <Modal
          animationType="slide"
          transparent={true}
          onRequestClose={() => {
            setShowIngredientsInfo(!showIngredientsInfo);
          }}
          visible={showIngredientsInfo}
        >
          <View style={styles.centeredView}>
            <ThemedView style={styles.modalView}>
              <ThemedText
                colorName={
                  colorScheme === "light" ? "textSecondary" : "textOnPrimary"
                }
              >
                All ingredients can be added to your Shopping List with one
                tap.{" "}
              </ThemedText>
              <Button
                title="Got it!"
                onPress={() => {
                  setShowIngredientsInfo(!showIngredientsInfo);
                }}
              />
            </ThemedView>
          </View>
        </Modal>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
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
