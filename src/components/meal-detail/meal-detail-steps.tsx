import { useEffect, useMemo, useState } from "react";
import { ThemedText } from "@/components/ui/themed-text";
import { ThemedView } from "@/components/ui/themed-view";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { type Step } from "@/types/meal-type";
import { isValidUrl } from "@/utils/is-valid-url";
import MealDetailCookMode from "@/components/meal-detail/meal-detail-cook-mode";
import { useMeal } from "@/hooks/use-meal";

function MealsDetailSteps({
  mealId,
  servings,
  setServings,
}: {
  mealId: string;
  servings: number;
  setServings: React.Dispatch<React.SetStateAction<number>>;
}) {
  const meal = useMeal(mealId);
  const steps = useMemo(() => meal?.steps ?? [], [meal?.steps]);

  const colorScheme = useColorScheme();
  const [showCookingModeModal, setShowCookingModeModal] = useState(false);
  const [validImageUrls, setValidImageUrls] = useState<Record<string, boolean>>(
    {},
  );

  useEffect(() => {
    let cancelled = false;

    async function validateAllStepImages() {
      const urls = Array.from(
        new Set(
          steps
            .map((s) => s.image)
            .filter((u): u is string => typeof u === "string" && u.length > 0),
        ),
      );

      if (urls.length === 0) {
        if (!cancelled) setValidImageUrls({});
        return;
      }

      const results = await Promise.all(
        urls.map(async (u) => {
          const ok = await isValidUrl(u);
          return [u, ok] as const;
        }),
      );

      if (cancelled) return;

      const map: Record<string, boolean> = {};
      for (const [u, ok] of results) map[u] = ok;
      setValidImageUrls(map);
    }

    validateAllStepImages();

    return () => {
      cancelled = true;
    };
  }, [steps]);

  if (!meal) {
    // Render nothing if the meal isn't found
    return null;
  }

  const renderStepItem = ({ item }: { item: Step }) => {
    const shouldRenderImage =
      !!item.image && (validImageUrls[item.image] ?? false);

    return (
      <>
        {shouldRenderImage && (
          <Image
            source={{
              uri: item.image!,
              width: 60,
              height: 60,
            }}
            resizeMode="cover"
          />
        )}
        <ThemedText style={{ flex: 1 }}>{item.description}</ThemedText>
      </>
    );
  };

  return (
    <>
      <ThemedView
        style={[
          styles.headerContainer,
          { borderBottomColor: colorScheme === "light" ? "black" : "white" },
        ]}
      >
        <ThemedText colorName="textSecondary">Steps</ThemedText>
        <Button
          title="Cooking mode"
          color={colorScheme === "light" ? "red" : "yellow"}
          onPress={() => setShowCookingModeModal(true)}
          accessibilityLabel="Cooking mode"
        ></Button>
      </ThemedView>
      {/*Cook mode modal*/}

      <MealDetailCookMode
        meal={meal}
        isVisible={showCookingModeModal}
        onClose={() => setShowCookingModeModal(false)}
        servings={servings}
      />

      <ScrollView contentContainerStyle={styles.stepsList}>
        {steps.map((step, index) => (
          <ThemedView
            colorName="surface"
            style={styles.stepItem}
            key={`${index}-${step.description}`}
          >
            {renderStepItem({ item: step })}
          </ThemedView>
        ))}
      </ScrollView>
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

  close: { fontSize: 16 },
  content: { flex: 1, padding: 16 },

  stepsList: {
    gap: 12,
    flex: 1,
  },
  stepItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    gap: 12,
    borderRadius: 8,
  },
});

export default MealsDetailSteps;
