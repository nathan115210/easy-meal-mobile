import { StaticScreenProps } from "@react-navigation/native";
import { useState } from "react";
import { ThemedText } from "@/components/ui/themed-text";
import { ThemedView } from "@/components/ui/themed-view";
import { mealsData } from "@/constants/data/data";
import ParallaxScrollView from "@/components/ui/parallax-scroll-view";
import {
  Image,
  ScrollView,
  StyleSheet,
  Modal,
  Button,
  View,
  useColorScheme,
} from "react-native";
import { Chip } from "@/components/ui/chip";
import { Checkbox } from "@/components/ui/checkbox";
import IconButton from "@/components/ui/icon-button";

type MealDetailProps = StaticScreenProps<{
  mealId: string;
}>;

function MealDetailScreen({ route }: MealDetailProps) {
  const colorScheme = useColorScheme();

  const { mealId } = route.params;
  const mealData = mealsData.find((meal) => meal.id === mealId);
  const [checkedIngredients, setCheckedIngredients] = useState<
    Record<string, boolean>
  >({});

  const [showIngredientsInfo, setShowIngredientsInfo] = useState(false);

  if (!mealData) {
    return <ThemedText>Meal not found</ThemedText>;
  }
  const {
    imageUrl,
    title,
    steps,
    duration,
    complexity,
    affordability,
    isGlutenFree,
    isVegan,
    isVegetarian,
    ingredients,
  } = mealData;
  console.log("mealData", mealData);

  const toggleIngredient = (ingredient: string) => {
    setCheckedIngredients((prev: Record<string, boolean>) => ({
      ...prev,
      [ingredient]: !prev[ingredient],
    }));
  };

  const renderChips = () => {
    let chips = [];
    if (isGlutenFree) chips.push("Gluten-Free");
    if (isVegan) chips.push("Vegan");
    if (isVegetarian) chips.push("Vegetarian");
    if (chips.length === 0) return null;

    return (
      <ThemedView style={styles.row}>
        {chips.map((chip, index) => (
          <Chip key={index} label={chip} />
        ))}
      </ThemedView>
    );
  };

  return (
    <ParallaxScrollView
      headerImage={
        <ThemedView style={styles.imageContainer} colorName="surfaceElevated">
          <Image source={{ uri: imageUrl }} style={styles.image} />
        </ThemedView>
      }
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
    >
      <ThemedView style={styles.contentContainer}>
        <ThemedText type="title">{title}</ThemedText>
        <ThemedView style={styles.row}>
          <ThemedText style={styles.subtitle} colorName="textSecondary">
            {duration}m
          </ThemedText>
          <ThemedText style={styles.dot} colorName="textMuted">
            •
          </ThemedText>
          <ThemedText style={styles.subtitle} colorName="textSecondary">
            {complexity}
          </ThemedText>
          <ThemedText style={styles.dot} colorName="textMuted">
            •
          </ThemedText>
          <ThemedText style={styles.subtitle} colorName="textSecondary">
            {affordability}
          </ThemedText>
        </ThemedView>
        {renderChips()}

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
                      colorScheme === "light"
                        ? "textSecondary"
                        : "textOnPrimary"
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

        <ScrollView>
          {steps.map((step, index) => (
            <ThemedText key={`${index}-${String(step)}`}>
              {index + 1}. {step}
            </ThemedText>
          ))}
        </ScrollView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    height: 310,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  contentContainer: {
    gap: 18,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 6,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "500",
    textTransform: "capitalize",
  },
  dot: {
    fontSize: 12,
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

export default MealDetailScreen;
