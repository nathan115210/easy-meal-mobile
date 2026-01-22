import { ThemedView } from "@/components/ui/themed-view";
import {
  Image,
  type ImageErrorEvent,
  type NativeSyntheticEvent,
  Pressable,
  StyleSheet,
  type ViewProps,
} from "react-native";
import { ThemedText } from "@/components/ui/themed-text";
import { isValidUrl } from "@/utils/is-valid-url";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons"; // <-- Add this import

interface CardProps extends ViewProps {
  imageUrl: string;
  title?: string;
  /**
   * Optional press handler. Keep navigation/bindings (e.g. mealId) outside this component.
   */
  onPress?: () => void | null;
  disabled?: boolean;
  children?: React.ReactNode;
  isFavorite?: boolean;
  onFavoriteToggle?: () => void; // <-- Update type to no param
}

function Card({
  title,
  imageUrl,
  onPress,
  disabled = false,
  style,
  children,
  isFavorite,
  onFavoriteToggle,
  ...rest
}: CardProps) {
  const pressable = typeof onPress === "function" && !disabled;

  const [canRenderImage, setCanRenderImage] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function validate() {
      if (!imageUrl) {
        if (!cancelled) setCanRenderImage(false);
        return;
      }

      const ok = await isValidUrl(imageUrl);
      if (!cancelled) setCanRenderImage(ok);
    }

    validate();

    return () => {
      cancelled = true;
    };
  }, [imageUrl]);

  const onImageError = (_e: NativeSyntheticEvent<ImageErrorEvent>) => {
    setCanRenderImage(false);
  };

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
          {canRenderImage && (
            <ThemedView
              style={styles.imageContainer}
              colorName="surfaceElevated"
            >
              <Image
                source={{ uri: imageUrl }}
                style={styles.image}
                resizeMode="cover"
                onError={() =>
                  onImageError({} as NativeSyntheticEvent<ImageErrorEvent>)
                }
              />
              {typeof onFavoriteToggle === "function" && (
                <Pressable
                  style={styles.favoriteIcon}
                  onPress={onFavoriteToggle}
                >
                  <Ionicons
                    name={isFavorite ? "heart" : "heart-outline"}
                    size={28}
                    color={isFavorite ? "red" : "white"}
                  />
                </Pressable>
              )}
            </ThemedView>
          )}
          <ThemedView style={styles.detailsContainer} colorName="surface">
            {title && (
              <ThemedText style={styles.title} numberOfLines={2}>
                {title}
              </ThemedText>
            )}
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
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  favoriteIcon: {
    position: "absolute",
    top: 12,
    right: 12,
    zIndex: 2,
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
