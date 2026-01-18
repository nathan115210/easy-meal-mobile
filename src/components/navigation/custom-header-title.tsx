import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import IconButton from "@/components/ui/icon-button";

const CustomHeaderTitle = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Ionicons
        name="medal"
        size={24}
        color={colors.text}
        style={styles.icon}
      />
      <Text style={[styles.title, { color: colors.text }]}>Easy Meal</Text>
      <IconButton
        iconName={{ ios: "menu", android: "menu" }}
        onPress={() => {
          console.log("TODO: open the drawer");
        }}
      ></IconButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 16,
  },
  icon: {
    marginRight: 8,
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CustomHeaderTitle;
