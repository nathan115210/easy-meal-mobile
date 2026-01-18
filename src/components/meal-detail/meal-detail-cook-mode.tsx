import { ThemedText } from "@/components/ui/themed-text";
import { ThemedView } from "@/components/ui/themed-view";
import IconButton from "@/components/ui/icon-button";
import { Chip } from "@/components/ui/chip";
import {
  StyleSheet,
  Modal,
  FlatList,
  View,
  useColorScheme,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Colors } from "@/constants/theme";
import { type Step } from "@/types/meal-type";
import Card from "@/components/ui/card";

function MealDetailCookMode({
  steps,
  onClose,
  isVisible,
}: {
  steps: Step[];
  onClose: () => void;
  isVisible: boolean;
}) {
  const colorScheme = useColorScheme();

  return (
    <Modal
      style={styles.cookModal}
      animationType="slide"
      visible={!!isVisible}
      onRequestClose={onClose}
      onDismiss={onClose}
    >
      <SafeAreaProvider>
        <SafeAreaView style={styles.cookModal} edges={["top"]}>
          <ThemedView style={styles.cookModalContainer}>
            <ThemedView
              style={[
                styles.modalHeader,
                {
                  backgroundColor: `${
                    Colors[colorScheme === "light" ? "light" : "dark"]
                      .placeholder
                  }`,
                },
              ]}
            >
              <IconButton
                size={36}
                iconName={{
                  ios: "close",
                  android: "close",
                }}
                onPress={onClose}
              ></IconButton>
              <Chip
                label="Ingredients"
                onPress={() =>
                  console.log("TODO: show ingredients in bottom sheet modal")
                }
              ></Chip>
            </ThemedView>

            <View style={styles.listContainer}>
              <FlatList
                contentContainerStyle={styles.listContent}
                data={steps}
                keyExtractor={(item: Step, index: number) =>
                  `${index}-${item.description}`
                }
                renderItem={({
                  item,
                  index,
                }: {
                  item: Step;
                  index: number;
                }) => {
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
        </SafeAreaView>
      </SafeAreaProvider>
    </Modal>
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
    borderWidth: 1,
    borderColor: "gray",
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
  stepText: { flex: 1, fontSize: 20, fontWeight: "bold" },
  stepCounterText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default MealDetailCookMode;
