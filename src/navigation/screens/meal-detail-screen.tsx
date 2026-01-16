import { StaticScreenProps } from "@react-navigation/native";
import { ThemedText } from "@/components/ui/themed-text";
import { ThemedView } from "@/components/ui/themed-view";
import MealDetailIngredients from "@/components/meal-detail/meal-detail-ingredients";
import MealDetailInfoRow from "@/components/meal-detail/meal-detail-info-row";
import { mealsData } from "@/constants/data/data";
import ParallaxScrollView from "@/components/ui/parallax-scroll-view";
import { Image, StyleSheet } from "react-native";
import { Chip } from "@/components/ui/chip";
import MealsDetailSteps from "@/components/meal-detail/meal-detail-steps";

type MealDetailProps = StaticScreenProps<{
  mealId: string;
}>;

function MealDetailScreen({ route }: MealDetailProps) {
  const { mealId } = route.params;
  const mealData = mealsData.find((meal) => meal.id === mealId);

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

  const renderChips = () => {
    let chips = [];
    if (isGlutenFree) chips.push("Gluten-Free");
    if (isVegan) chips.push("Vegan");
    if (isVegetarian) chips.push("Vegetarian");
    if (chips.length === 0) return null;

    return (
      <ThemedView style={styles.chipsRow}>
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
        <MealDetailInfoRow
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
        {renderChips()}
        <MealDetailIngredients ingredients={ingredients} />

        <MealsDetailSteps steps={steps} />
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
  chipsRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 6,
  },
});

export default MealDetailScreen;
