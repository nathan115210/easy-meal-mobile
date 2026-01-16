import { useState } from "react";
import { ThemedText } from "@/components/ui/themed-text";
import { ThemedView } from "@/components/ui/themed-view";
import { Chip } from "@/components/ui/chip";
import {
  ScrollView,
  StyleSheet,
  useColorScheme,
  Button,
  Modal,
  FlatList,
  Alert,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import IconButton from "@/components/ui/icon-button";
import { Colors } from "@/constants/theme";

function MealsDetailSteps({ steps }: { steps: string[] }) {
  const colorScheme = useColorScheme();
  const [showCookingMode, setShowCookingMode] = useState(false);
  console.log(showCookingMode);

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
          onPress={() => {
            setShowCookingMode(true);
          }}
          accessibilityLabel="Cooking mode"
        ></Button>
      </ThemedView>
      <ScrollView>
        {steps.map((step, index) => (
          <ThemedText key={`${index}-${String(step)}`}>
            {index + 1}. {step}
          </ThemedText>
        ))}
      </ScrollView>

      <Modal
        style={styles.cookModal}
        animationType="slide"
        visible={showCookingMode}
        onRequestClose={() => {
          setShowCookingMode(false);
        }}
        onDismiss={() => {
          setShowCookingMode(false);
        }}
      >
        <SafeAreaProvider>
          <SafeAreaView style={styles.cookModal} edges={["top"]}>
            <ThemedView style={styles.cookModalContainer}>
              <ThemedView
                style={[
                  styles.modalHeader,
                  {
                    backgroundColor: `${Colors[colorScheme === "light" ? "light" : "dark"].placeholder}`,
                  },
                ]}
              >
                <IconButton
                  size={36}
                  iconName={{
                    ios: "close",
                    android: "close",
                  }}
                  onPress={() => setShowCookingMode(false)}
                ></IconButton>
                <Chip
                  label="Ingredients"
                  onPress={() =>
                    console.log("TODO: show ingredients in bottom sheet modal")
                  }
                ></Chip>
              </ThemedView>
              <ThemedView>
                <FlatList
                  contentContainerStyle={{ padding: 16 }}
                  data={steps}
                  renderItem={(step) => {
                    const { item, index } = step;
                    const totalSteps = steps.length;
                    return (
                      <ThemedView style={styles.stepContainer}>
                        <ThemedView
                          colorName="surface"
                          style={styles.stepCounter}
                        >
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
                        <ThemedText style={styles.stepText}>{item}</ThemedText>
                      </ThemedView>
                    );
                  }}
                />
              </ThemedView>
            </ThemedView>
          </SafeAreaView>
        </SafeAreaProvider>
      </Modal>
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
  cookModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cookModalContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderTopEndRadius: 18,
    borderTopStartRadius: 18,
    overflow: "hidden",
  },
  modalHeader: {
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "space-between",
    paddingVertical: 16,
  },
  close: { fontSize: 16 },
  content: { flex: 1, padding: 16 },
  stepContainer: {
    paddingVertical: 8,
  },
  stepCounter: {
    flexDirection: "row",
    marginBottom: 8,
    paddingInlineStart: 4,
  },
  stepCounterText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  stepText: {
    fontSize: 24,
    fontWeight: "400",
  },
});

export default MealsDetailSteps;
