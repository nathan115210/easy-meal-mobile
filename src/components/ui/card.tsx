import { ThemedView } from "@/components/ui/themed-view";
import { Pressable, StyleSheet, type ViewProps, Image } from "react-native";
import { ThemedText } from "@/components/ui/themed-text";

interface CardProps extends ViewProps {
  imageUrl: string;
  title: string;
  /**
   * Optional press handler. Keep navigation/bindings (e.g. mealId) outside this component.
   */
  onPress?: () => void | null;
  disabled?: boolean;
  children?: React.ReactNode;
}

function Card({
  title,
  imageUrl,
  onPress,
  disabled = false,
  style,
  children,
  ...rest
}: CardProps) {
  const pressable = typeof onPress === "function" && !disabled;

  return (
    <ThemedView
      style={[styles.card, style, disabled ? styles.cardDisabled : null]}
      {...rest}
    >
      <Pressable
        disabled={!pressable}
        onPress={onPress ?? undefined}
        style={({ pressed }) => [
          styles.pressable,
          pressed && pressable && styles.pressed,
          disabled && styles.pressableDisabled,
        ]}
        android_ripple={{ color: "rgba(0,0,0,0.08)" }}
      >
        <ThemedView style={styles.contentContainer} colorName="surface">
          <ThemedView style={styles.imageContainer} colorName="surfaceElevated">
            <Image source={{ uri: imageUrl }} style={styles.image} />
          </ThemedView>
          <ThemedView style={styles.detailsContainer} colorName="surface">
            <ThemedText style={styles.title} numberOfLines={2}>
              {title}
            </ThemedText>
            {children}
          </ThemedView>
        </ThemedView>
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    overflow: "hidden",
  },
  cardDisabled: {
    opacity: 0.5,
  },
  pressed: {
    opacity: 0.85,
  },
  pressable: {
    backgroundColor: "transparent",
  },
  pressableDisabled: {
    opacity: 1,
  },
  contentContainer: {
    borderRadius: 12,
    overflow: "hidden",
  },
  imageContainer: {
    width: "100%",
    height: 180,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  detailsContainer: {
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 6,
  },
});

export default Card;
