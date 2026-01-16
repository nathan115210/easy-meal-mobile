import {View, Text, StyleSheet, Pressable, GestureResponderEvent} from "react-native";

function GridItem({ title, color, onPress }: { title: string; color: string; onPress?: ((event: GestureResponderEvent) => void) | null | undefined }) {
  return (
    <View style={styles.categoryItem}>
      <Pressable
        style={({ pressed }) => [
          styles.pressableContainer,
          pressed ? styles.pressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.titleContainer, { backgroundColor: color }]}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryItem: {
    flex: 1,
    width: "100%",
    height: 150,
    borderRadius: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    backgroundColor: "#fff",
    margin: 16,
  },
  pressed: {
    opacity: 0.5,
  },
  pressableContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderRadius: 10,
  },
  titleText: {
    fontSize: 18,
  },
});

export default GridItem;
