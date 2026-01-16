import {
  View,
  Text,
  StyleSheet,
  Pressable,
  GestureResponderEvent,
  ImageBackground,
} from "react-native";

function GridItem({
  title,
  color,
  onPress,
  backgroundImage,
}: {
  title: string;
  color: string;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
  backgroundImage?: string;
}) {
  const renderTextLayer = () => {
    const backgroundColor = !!backgroundImage ? `${color}60` : color;
    return (
      <View style={[styles.titleOverlay, { backgroundColor }]}>
        <Text style={[styles.titleText]}>{title}</Text>
      </View>
    );
  };
  return (
    <View style={styles.categoryItem}>
      <Pressable
        style={({ pressed }) => [
          styles.pressableContainer,
          pressed ? styles.pressed : null,
        ]}
        onPress={onPress}
      >
        {backgroundImage ? (
          <ImageBackground
            source={{
              uri: backgroundImage,
            }}
            resizeMode="cover"
            style={styles.imageBackground}
          >
            {renderTextLayer()}
          </ImageBackground>
        ) : (
          renderTextLayer()
        )}
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
  imageBackground: {
    flex: 1,
    borderRadius: 10,
    overflow: "hidden",
  },
  titleOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    overflow: "hidden",
  },
  titleText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.7)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
  },
});

export default GridItem;
