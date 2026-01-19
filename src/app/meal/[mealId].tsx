import React, {useMemo, useState} from "react";
import {Image, StyleSheet} from "react-native";
import {Stack, useLocalSearchParams, useRouter} from "expo-router";

import IconButton from "@/components/ui/icon-button";
import ShareButton from "@/components/share-button";
import {ThemedText} from "@/components/ui/themed-text";
import {ThemedView} from "@/components/ui/themed-view";
import MealDetailIngredients from "@/components/meal-detail/meal-detail-ingredients";
import MealDetailInfoRow from "@/components/meal-detail/meal-detail-info-row";
import {mealsData} from "@/constants/data/data";
import ParallaxScrollView from "@/components/ui/parallax-scroll-view";
import {Chip} from "@/components/ui/chip";
import MealsDetailSteps from "@/components/meal-detail/meal-detail-steps";

type MealDetailParams = {
    mealId?: string;
};

export default function MealDetailRoute() {
    const router = useRouter();
    const [servings, setServings] = useState<number>(1);
    const {mealId} = useLocalSearchParams<MealDetailParams>();

    const safeMealId = typeof mealId === "string" ? mealId : "";

    const mealData = useMemo(() => {
        if (!safeMealId) return undefined;
        return mealsData.find((meal) => meal.id === safeMealId);
    }, [safeMealId]);

    if (!mealData) {
        return (
            <ThemedView style={styles.notFoundContainer}>
                <Stack.Screen
                    options={{
                        title: "Meal",
                        headerTitle: "Meal",
                    }}
                />
                <ThemedText>Meal not found</ThemedText>
            </ThemedView>
        );
    }
    const {
        imageUrl,
        title,
        duration,
        complexity,
        affordability,
        isGlutenFree,
        isVegan,
        isVegetarian,
        ingredients,
    } = mealData;

    const chips: string[] = [];
    if (isGlutenFree) chips.push("Gluten-Free");
    if (isVegan) chips.push("Vegan");
    if (isVegetarian) chips.push("Vegetarian");

    return (
        <ParallaxScrollView
            headerImage={
                <ThemedView style={styles.imageContainer} colorName="surfaceElevated">
                    <Image source={{uri: imageUrl}} style={styles.image}/>
                </ThemedView>
            }
            headerBackgroundColor={{light: "#D0D0D0", dark: "#353636"}}
        >
            <Stack.Screen
                options={{
                    // Match your previous native-stack setup
                    headerTransparent: true,
                    headerTitle: "",
                    headerLeft: () => (
                        <IconButton
                            onPress={() => router.back()}
                            iconName={{
                                ios: "chevron-back",
                                android: "arrow-back",
                            }}
                        />
                    ),
                    headerRight: () => <ShareButton/>,
                }}
            />

            <ThemedView style={styles.contentContainer}>
                <ThemedText type="title">{title}</ThemedText>

                <MealDetailInfoRow
                    duration={duration}
                    complexity={complexity}
                    affordability={affordability}
                />

                {chips.length > 0 ? (
                    <ThemedView style={styles.chipsRow}>
                        {chips.map((chip) => (
                            <Chip key={chip} label={chip}/>
                        ))}
                    </ThemedView>
                ) : null}

                <MealDetailIngredients
                    initialIngredients={ingredients}
                    servings={servings}
                    setServings={setServings}
                />
                <MealsDetailSteps mealId={safeMealId} servings={servings} setServings={setServings}/>
            </ThemedView>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    notFoundContainer: {
        flex: 1,
        padding: 16,
    },
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
