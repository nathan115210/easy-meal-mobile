import {useEffect, useState} from "react";
import {ThemedText} from "@/components/ui/themed-text";
import {ThemedView} from "@/components/ui/themed-view";
import IconButton from "@/components/ui/icon-button";
import {Chip} from "@/components/ui/chip";
import {FlatList, Modal, ScrollView, StyleSheet, View} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {type MealItemProps, type Step} from "@/types/meal-type";
import Card from "@/components/ui/card";
import {InlineBottomSheet} from "@/components/ui/inline-bottom-sheet";
import {formatIngredientAmount} from "@/utils/format-ingredient-amount";
import {useIngredients} from "@/hooks/use-ingredients";

function MealDetailCookMode({
                                meal,
                                onClose,
                                isVisible,
                                servings,
                            }: {
    meal: MealItemProps;
    onClose: () => void;
    isVisible: boolean;
    servings: number;
}) {
    const insets = useSafeAreaInsets();
    const {steps} = meal;

    const [showIngredientsList, setShowIngredientsList] = useState(false);
    const {ingredients} = useIngredients({defaultIngredients: meal.ingredients, servings});


    useEffect(() => {
        if (!isVisible && showIngredientsList) {
            setShowIngredientsList(false);
        }
    }, [isVisible, showIngredientsList]);

    const handleCloseCookMode = () => {
        setShowIngredientsList(false);
        onClose();
    };

    const handleOpenIngredients = () => {
        if (!isVisible) return;
        setShowIngredientsList(true);
    };

    return (
        <>
            <Modal
                style={[styles.cookModal]}
                animationType="slide"
                visible={isVisible}
                onRequestClose={handleCloseCookMode}
                onDismiss={handleCloseCookMode}
            >
                <ThemedView
                    style={[styles.cookModalContainer, {paddingTop: insets.top}]}
                >
                    <ThemedView style={[styles.modalHeader]}>
                        <IconButton
                            size={36}
                            iconName={{
                                ios: "close",
                                android: "close",
                            }}
                            onPress={handleCloseCookMode}
                        ></IconButton>
                        <Chip label="Ingredients" onPress={handleOpenIngredients}></Chip>
                    </ThemedView>

                    <View style={styles.listContainer}>
                        <FlatList
                            contentContainerStyle={styles.listContent}
                            data={steps}
                            keyExtractor={(item: Step, index: number) =>
                                `${index}-${item.description}`
                            }
                            renderItem={({item, index}: { item: Step; index: number }) => {
                                const totalSteps = steps.length;

                                return (
                                    <ThemedView style={styles.stepContainer}>
                                        <ThemedView style={styles.stepCounter}>
                                            <ThemedText style={styles.stepCounterText}>
                                                Step:{" "}
                                            </ThemedText>
                                            <ThemedText style={styles.stepCounterText}>
                                                {index + 1}
                                            </ThemedText>
                                            <ThemedText
                                                colorName="textMuted"
                                                style={styles.stepCounterText}
                                            >
                                                /{totalSteps}
                                            </ThemedText>
                                        </ThemedView>
                                        <Card imageUrl={item.image || ""}>
                                            <ThemedText style={styles.stepText}>
                                                {item.description}
                                            </ThemedText>
                                        </Card>
                                    </ThemedView>
                                );
                            }}
                        />
                    </View>
                </ThemedView>
                <InlineBottomSheet
                    visible={showIngredientsList}
                    onClose={() => setShowIngredientsList(false)}
                    title="Ingredients"
                    snapPoints={["80%"]}
                >
                    <ThemedView style={styles.ingredientsList}>
                        <ScrollView>
                            {ingredients.map((ingredient, index) => {
                                const isLast = index === ingredients.length - 1;
                                const amountLabel = formatIngredientAmount(ingredient);
                                return (
                                    <View
                                        key={index}
                                        style={[
                                            styles.ingredientsListItem,
                                            isLast && styles.ingredientsListItemLast,
                                        ]}
                                    >
                                        <ThemedText>{ingredient.name}</ThemedText>
                                        <ThemedText>{amountLabel}</ThemedText>
                                    </View>
                                );
                            })}
                        </ScrollView>
                    </ThemedView>
                </InlineBottomSheet>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    cookModal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    cookModalContainer: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    modalHeader: {
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "stretch",
        justifyContent: "space-between",
        paddingVertical: 16,
    },
    listContainer: {
        flex: 1,
        width: "100%",
    },
    listContent: {
        padding: 16,
    },
    stepContainer: {
        paddingVertical: 8,
    },
    stepCounter: {
        flexDirection: "row",
        marginBottom: 8,
        paddingInlineStart: 4,
    },
    stepContent: {
        padding: 8,
        gap: 16,
    },
    stepText: {flex: 1, fontSize: 20, fontWeight: "bold"},
    stepCounterText: {
        fontSize: 20,
        fontWeight: "bold",
    },
    ingredientsList: {
        padding: 16,
    },
    ingredientsListItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderStyle: "dashed",
        borderBottomWidth: 2,
        borderColor: "gray",
        paddingVertical: 8,
    },
    ingredientsListItemLast: {
        borderBottomWidth: 0,
        paddingBottom: 0,
    },
});

export default MealDetailCookMode;
