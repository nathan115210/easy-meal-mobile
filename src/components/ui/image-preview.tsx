import React, { useCallback, useEffect, useMemo } from "react";
import { StyleSheet, useColorScheme, View, type ViewStyle } from "react-native";
import {
  Gesture,
  GestureDetector,
  Directions,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Colors } from "@/constants/theme";
import { ThemedText } from "@/components/ui/themed-text";
import IconButton from "@/components/ui/icon-button";
import BottomSheetModal from "@/components/ui/bottom-sheet-modal";

/**
 * ImagePreview
 *
 * A full-screen image preview modal that supports:
 * - pinch-to-zoom (and pan while zoomed)
 * - swipe up/down to dismiss (default)
 * - optional swipe left/right actions: onSwipeLeft/onSwipeRight
 *   - if not provided, left/right will dismiss (matches your requirement)
 *
 * Implementation details:
 * - Uses @gorhom/bottom-sheet as a modal host (full-screen snap point).
 * - Uses react-native-gesture-handler + reanimated for pinch/pan/fling gestures.
 *
 * Requirements (must already be set at app root):
 * - GestureHandlerRootView
 * - BottomSheetModalProvider
 */
export type ImagePreviewProps = {
  visible: boolean;
  imageUri: string | null;
  onClose: () => void;

  title?: string;

  /**
   * Backdrop opacity for the fade overlay behind the full-screen preview.
   * Default: 0.85
   *
   * NOTE: This is forwarded to the shared BottomSheetModal (currently it
   * may not support opacity; safe to keep here for future extension).
   */
  backdropOpacity?: number;

  /**
   * If provided, called when user swipes left. If not provided, defaults to closing the modal.
   */
  onSwipeLeft?: () => void;

  /**
   * If provided, called when user swipes right. If not provided, defaults to closing the modal.
   */
  onSwipeRight?: () => void;

  /**
   * If true, tapping the backdrop closes the modal. Default: true
   */
  closeOnBackdropPress?: boolean;

  /**
   * Optional style overrides.
   */
  containerStyle?: ViewStyle;
  imageContainerStyle?: ViewStyle;
};

const FULLSCREEN_SNAP_POINTS: (string | number)[] = ["100%"];

export default function ImagePreview({
  visible,
  imageUri,
  onClose,
  title = "Preview",
  backdropOpacity = 0.85,
  onSwipeLeft,
  onSwipeRight,
  closeOnBackdropPress = true,
  containerStyle,
  imageContainerStyle,
}: ImagePreviewProps) {
  const detectedScheme = useColorScheme() === "dark" ? "dark" : "light";
  const palette = Colors[detectedScheme];

  const snapPoints = useMemo(() => FULLSCREEN_SNAP_POINTS, []);

  const dismiss = useCallback(() => {
    // For the shared BottomSheetModal, the parent controls visibility.
    // So dismissing means calling onClose.
    onClose();
  }, [onClose]);

  // --- Zoom + pan state (reanimated)
  const scale = useSharedValue(1);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const startScale = useSharedValue(1);
  const startX = useSharedValue(0);
  const startY = useSharedValue(0);

  // Keep image within reason; you can tweak as needed
  const MIN_SCALE = 1;
  const MAX_SCALE = 4;

  const resetTransform = () => {
    "worklet";
    scale.value = withTiming(1, { duration: 160 });
    translateX.value = withTiming(0, { duration: 160 });
    translateY.value = withTiming(0, { duration: 160 });
  };

  const animatedImageStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { scale: scale.value },
      ],
    };
  });

  // --- Gestures
  const pinchGesture = useMemo(() => {
    return Gesture.Pinch()
      .onBegin(() => {
        startScale.value = scale.value;
      })
      .onUpdate((e) => {
        const next = startScale.value * e.scale;
        scale.value = Math.max(MIN_SCALE, Math.min(MAX_SCALE, next));
      })
      .onEnd(() => {
        // If user pinches back close to 1, snap cleanly to 1 and reset pan.
        if (scale.value < 1.02) {
          resetTransform();
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const panGesture = useMemo(() => {
    return Gesture.Pan()
      .onBegin(() => {
        startX.value = translateX.value;
        startY.value = translateY.value;
      })
      .onUpdate((e) => {
        // Only allow panning when zoomed; otherwise reserve panning for swipe-dismiss flings.
        if (scale.value <= 1.01) return;
        translateX.value = startX.value + e.translationX;
        translateY.value = startY.value + e.translationY;
      })
      .onEnd(() => {
        // No-op; keep position while zoomed.
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Swipe up/down to dismiss
  const flingDown = useMemo(() => {
    return Gesture.Fling()
      .runOnJS(true)
      .direction(Directions.DOWN)
      .onEnd(() => {
        dismiss();
      });
  }, [dismiss]);

  const flingUp = useMemo(() => {
    return Gesture.Fling()
      .runOnJS(true)
      .direction(Directions.UP)
      .onEnd(() => {
        dismiss();
      });
  }, [dismiss]);

  // Swipe left/right: default to closing if callbacks not provided
  const flingLeft = useMemo(() => {
    return Gesture.Fling()
      .runOnJS(true)
      .direction(Directions.LEFT)
      .onEnd(() => {
        const cb = onSwipeLeft ?? dismiss;
        cb();
      });
  }, [onSwipeLeft, dismiss]);

  const flingRight = useMemo(() => {
    return Gesture.Fling()
      .runOnJS(true)
      .direction(Directions.RIGHT)
      .onEnd(() => {
        const cb = onSwipeRight ?? dismiss;
        cb();
      });
  }, [onSwipeRight, dismiss]);

  const composedGesture = useMemo(() => {
    // Priority:
    // - pinch + pan simultaneously for zoom interactions
    // - flings in parallel (up/down/left/right)
    //
    // Note: Pan gesture is zoom-only; when not zoomed, flings handle dismiss/nav.
    const zoom = Gesture.Simultaneous(pinchGesture, panGesture);
    const flings = Gesture.Simultaneous(
      flingDown,
      flingUp,
      flingLeft,
      flingRight,
    );
    return Gesture.Simultaneous(zoom, flings);
  }, [pinchGesture, panGesture, flingDown, flingUp, flingLeft, flingRight]);

  // Reset transform whenever opening or switching image
  useEffect(() => {
    // Reset in JS by updating shared values with timing so it's smooth if already open.
    scale.value = withTiming(1, { duration: 140 });
    translateX.value = withTiming(0, { duration: 140 });
    translateY.value = withTiming(0, { duration: 140 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, imageUri]);

  const backgroundColor =
    (palette as any)?.surface ?? (palette as any)?.card ?? palette.background;

  return (
    <BottomSheetModal
      visible={visible}
      onClose={onClose}
      title={title}
      closeOnBackdropPress={closeOnBackdropPress}
      showCloseButton={false}
      snapPoints={snapPoints}
      containerStyle={{
        ...styles.background,
        backgroundColor,
        ...(containerStyle ?? {}),
      }}
      minHeight={200}
    >
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <ThemedText style={styles.title} numberOfLines={1}>
            {title}
          </ThemedText>
        </View>

        <IconButton
          size={32}
          iconName={{ ios: "close", android: "close" }}
          onPress={dismiss}
        />
      </View>

      <GestureDetector gesture={composedGesture}>
        <View style={[styles.imageStage, imageContainerStyle]}>
          {imageUri ? (
            <Animated.Image
              source={{ uri: imageUri }}
              style={[styles.image, animatedImageStyle]}
              resizeMode="contain"
            />
          ) : (
            <ThemedText colorName="textMuted">No image</ThemedText>
          )}
        </View>
      </GestureDetector>
    </BottomSheetModal>
  );
}

const styles = StyleSheet.create({
  background: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    overflow: "hidden",
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerLeft: {
    flex: 1,
    paddingRight: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
  },
  imageStage: {
    height: 520,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
