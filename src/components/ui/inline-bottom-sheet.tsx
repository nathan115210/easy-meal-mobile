import React, { useMemo, useRef, useEffect, useCallback } from "react";
import { StyleSheet, useColorScheme, View, type ViewStyle } from "react-native";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { ThemedText } from "@/components/ui/themed-text";
import IconButton from "@/components/ui/icon-button";
import { Colors } from "@/constants/theme";

type ModalColorScheme = "light" | "dark";

type Props = {
  visible: boolean;
  onClose: () => void;
  title?: string;
  colorScheme?: ModalColorScheme;
  closeOnBackdropPress?: boolean;
  showCloseButton?: boolean;
  fullScreen?: boolean;
  snapPoints?: (string | number)[];
  minHeight?: number;
  containerStyle?: ViewStyle;
  children: React.ReactNode;
};

export function InlineBottomSheet({
  visible,
  onClose,
  title,
  colorScheme: colorSchemeProp,
  closeOnBackdropPress = true,
  showCloseButton = true,
  snapPoints: snapPointsProp,
  minHeight = 200,
  containerStyle,
  children,
  fullScreen = false,
}: Props) {
  const detectedScheme = useColorScheme() === "dark" ? "dark" : "light";
  const colorScheme = colorSchemeProp ?? detectedScheme;

  const palette = Colors[colorScheme];
  const backgroundColor =
    (palette as any)?.surface ?? (palette as any)?.card ?? palette.background;

  const sheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => {
    if (fullScreen) return ["90%"];
    return snapPointsProp ?? [200, "90%"];
  }, [fullScreen, snapPointsProp]);

  // Control open/close
  useEffect(() => {
    if (!sheetRef.current) return;
    if (visible) sheetRef.current.snapToIndex(0);
    else sheetRef.current.close();
  }, [visible]);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        pressBehavior={closeOnBackdropPress ? "close" : "none"}
      />
    ),
    [closeOnBackdropPress],
  );

  return (
    <BottomSheet
      ref={sheetRef}
      index={visible ? 0 : -1}
      snapPoints={snapPoints}
      enablePanDownToClose
      onClose={onClose}
      backdropComponent={renderBackdrop}
      backgroundStyle={[
        styles.background,
        {
          backgroundColor,
          borderColor: (palette as any)?.border ?? "transparent",
        },
        containerStyle,
      ]}
      handleIndicatorStyle={
        fullScreen
          ? styles.handleIndicatorHidden
          : [
              styles.handleIndicator,
              {
                backgroundColor: (palette as any)?.border ?? "rgba(0,0,0,0.25)",
              },
            ]
      }
    >
      <BottomSheetView
        style={[styles.contentContainer, fullScreen ? null : { minHeight }]}
      >
        {(title || showCloseButton) && (
          <View style={styles.header}>
            {title ? (
              <ThemedText style={styles.title}>{title}</ThemedText>
            ) : (
              <View />
            )}
            {showCloseButton ? (
              <IconButton
                size={32}
                iconName={{ ios: "close-circle", android: "close-circle" }}
                onPress={() => sheetRef.current?.close()}
              />
            ) : null}
          </View>
        )}
        <View style={styles.body}>{children}</View>
      </BottomSheetView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  background: {
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderRightWidth: StyleSheet.hairlineWidth,
    overflow: "hidden",
  },
  handleIndicator: { width: 44, height: 5, borderRadius: 999, opacity: 0.9 },
  handleIndicatorHidden: { width: 0, height: 0, opacity: 0 },
  contentContainer: { paddingBottom: 12 },
  header: {
    paddingHorizontal: 16,
    paddingTop: 6,
    paddingBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: { fontSize: 18, fontWeight: "700" },
  body: { paddingHorizontal: 16, paddingBottom: 16 },
});
