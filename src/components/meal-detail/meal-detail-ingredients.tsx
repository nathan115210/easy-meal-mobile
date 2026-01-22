import React, { useCallback, useState } from "react";
import {
  Button,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { ThemedText } from "@/components/ui/themed-text";
import { ThemedView } from "@/components/ui/themed-view";
import IconButton from "@/components/ui/icon-button";
import { Checkbox } from "@/components/ui/checkbox";
import { type Ingredient } from "@/types/meal-type";
import BottomSheetModal from "@/components/ui/bottom-sheet-modal";
import { formatIngredientAmount } from "@/utils/format-ingredient-amount";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/theme";
import { useIngredients } from "@/hooks/use-ingredients";

type MealDetailIngredientsProps = {
  initialIngredients: Ingredient[];
  servings: number;
  setServings: React.Dispatch<React.SetStateAction<number>>;
};

function MealDetailIngredients({
  initialIngredients,
  servings,
  setServings,
}: MealDetailIngredientsProps) {
  const colorScheme = useColorScheme();
  const [showIngredientsInfo, setShowIngredientsInfo] = useState(false);
  const [checkedIngredients, setCheckedIngredients] = useState<
    Record<string, boolean>
  >({});
  const [showConvertModal, setShowConvertModal] = useState<boolean>(false);
  const { ingredients } = useIngredients({
    defaultIngredients: initialIngredients,
    servings,
  });
  const toggleIngredient = useCallback((ingredient: string) => {
    setCheckedIngredients((prev) => ({
      ...prev,
      [ingredient]: !prev[ingredient],
    }));
  }, []);

  const closeConvertModal = useCallback(() => setShowConvertModal(false), []);

  const openConvertModal = useCallback(() => {
    setShowConvertModal(true);
  }, []);

  const resetServings = useCallback(() => {
    setServings(1);
    closeConvertModal();
  }, [closeConvertModal, setServings]);

  return (
    <>
      <ThemedView>
        <ThemedView
          style={[
            styles.headerContainer,
            { borderBottomColor: colorScheme === "light" ? "black" : "white" },
          ]}
        >
          <View style={styles.titleContainer}>
            <ThemedText colorName="textSecondary">Ingredients</ThemedText>
            <IconButton
              size={24}
              color={colorScheme === "light" ? "black" : "white"}
              onPress={() => setShowIngredientsInfo((v) => !v)}
              iconName={{
                ios: "information-circle",
                android: "information-circle-outline",
              }}
            />
          </View>

          <Button
            title="Convert"
            color={colorScheme === "light" ? "red" : "yellow"}
            onPress={openConvertModal}
            accessibilityLabel="Convert Ingredients"
          />
        </ThemedView>

        <ThemedView style={{ gap: 10, marginTop: 8 }}>
          {ingredients.map((ingredient, index) => {
            const secondaryLabel = formatIngredientAmount(ingredient);
            return (
              <Checkbox
                key={`${ingredient.name}-${index}`}
                label={ingredient.name}
                secondaryLabel={secondaryLabel}
                checked={Boolean(checkedIngredients[ingredient.name])}
                onCheckedChange={() => toggleIngredient(ingredient.name)}
              />
            );
          })}

          <BottomSheetModal
            visible={showIngredientsInfo}
            onClose={() => setShowIngredientsInfo(false)}
            title="Quick Add"
          >
            <ThemedText>
              All ingredients can be added to your Shopping List with one tap.
            </ThemedText>
          </BottomSheetModal>
        </ThemedView>
      </ThemedView>
      <BottomSheetModal
        visible={showConvertModal}
        onClose={closeConvertModal}
        title="Update Servings"
        fullScreen
      >
        <View style={styles.actionRow}>
          <TouchableOpacity
            onPress={() => setServings((prevCount) => prevCount + 1)}
          >
            <Ionicons
              name={"add-circle"}
              size={36}
              color={
                colorScheme === "light" ? Colors.light.icon : Colors.dark.icon
              }
            />
          </TouchableOpacity>
          <View>
            <ThemedText>{servings}</ThemedText>
          </View>
          <TouchableOpacity
            onPress={() =>
              setServings((prevCount) => Math.max(1, prevCount - 1))
            }
            disabled={servings === 1}
          >
            <Ionicons
              name={"remove-circle"}
              size={36}
              color={
                colorScheme === "light" ? Colors.light.icon : Colors.dark.icon
              }
            />
          </TouchableOpacity>
        </View>
        <Button
          color={"red"}
          title="Reset"
          onPress={resetServings}
          disabled={servings === 1}
        />
      </BottomSheetModal>
    </>
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
  actionRow: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    gap: 12,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default MealDetailIngredients;
