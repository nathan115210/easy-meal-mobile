import React, { useEffect, useMemo, useRef, useCallback } from "react";
import { StyleSheet, useColorScheme, View, type ViewStyle } from "react-native";
import {
  BottomSheetBackdrop,
  BottomSheetModal as GorhomBottomSheetModal,
  BottomSheetView,
  type BottomSheetModalProps as GorhomBottomSheetModalProps,
} from "@gorhom/bottom-sheet";
import { ThemedText } from "@/components/ui/themed-text";
import IconButton from "@/components/ui/icon-button";
import { Colors } from "@/constants/theme";

type ModalColorScheme = "light" | "dark";

export type BottomSheetModalProps = {
  /** Controls whether the sheet is presented. */
  visible: boolean;

  /** Called when the sheet is dismissed (by swipe down/backdrop/close button). */
  onClose: () => void;

  /** Optional title shown in a compact header row. */
  title?: string;

  /** Overrides detected scheme (useful when passing down explicitly). */
  colorScheme?: ModalColorScheme;

  /** When true, tapping the backdrop closes the modal. Default: true */
  closeOnBackdropPress?: boolean;

  /** When true, shows a close icon button in the header. Default: true */
  showCloseButton?: boolean;

  /**
   * When true, forces a "full screen" sheet at 90% height.
   * In this mode, `snapPoints` and `minHeight` are ignored.
   */
  fullScreen?: boolean;

  /** Snap points for the sheet. Default: ["40%", "92%"] */
  snapPoints?: (string | number)[];

  /** Minimum height for the content container. Default: 200 */
  minHeight?: number;

  /** Optional style override for the sheet's background container. */
  containerStyle?: ViewStyle;

  children: React.ReactNode;
} & Omit<
  GorhomBottomSheetModalProps,
  | "snapPoints"
  | "children"
  | "onDismiss"
  | "enablePanDownToClose"
  | "backdropComponent"
  | "backgroundStyle"
  | "handleIndicatorStyle"
>;

/**
 * BottomSheetModal (shared)
 *
 * Replacement for the custom RN Modal + PanResponder implementation.
 * Uses @gorhom/bottom-sheet to get:
 * - smooth gestures / swipe-down-to-close
 * - proper interaction with nested scroll views
 * - backdrop handling
 *
 * Requirements (done elsewhere):
 * - App root wrapped with GestureHandlerRootView
 * - App includes BottomSheetModalProvider
 */
export default function BottomSheetModal({
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
  ...rest
}: BottomSheetModalProps) {
  const detectedScheme = useColorScheme() === "dark" ? "dark" : "light";
  const colorScheme = colorSchemeProp ?? detectedScheme;

  const palette = Colors[colorScheme];
  const backgroundColor =
    (palette as any)?.surface ?? (palette as any)?.card ?? palette.background;

  const sheetRef = useRef<GorhomBottomSheetModal>(null);

  const snapPoints = useMemo(() => {
    if (fullScreen) return ["90%"];
    return snapPointsProp ?? [200, "90%"];
  }, [fullScreen, snapPointsProp]);

  useEffect(() => {
    if (visible) sheetRef.current?.present();
    else sheetRef.current?.dismiss();
  }, [visible]);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        pressBehavior="close"
      />
    ),
    [],
  );

  return (
    <GorhomBottomSheetModal
      ref={sheetRef}
      snapPoints={snapPoints}
      enablePanDownToClose
      onDismiss={onClose}
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
      {...rest}
    >
      <BottomSheetView
        style={[styles.contentContainer, fullScreen ? null : { minHeight }]}
      >
        {(title || showCloseButton) && (
          <View style={styles.header}>
            {title ? (
              <ThemedText style={styles.title}>{title}</ThemedText>
            ) : (
              //Push close button to right dise of the header always whenever if the title has deinfed
              <View />
            )}

            {showCloseButton ? (
              <IconButton
                size={32}
                iconName={{ ios: "close-circle", android: "close-circle" }}
                onPress={() => sheetRef.current?.dismiss()}
              />
            ) : null}
          </View>
        )}

        <View style={styles.body}>{children}</View>
      </BottomSheetView>
    </GorhomBottomSheetModal>
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
  handleIndicator: {
    width: 44,
    height: 5,
    borderRadius: 999,
    opacity: 0.9,
  },
  handleIndicatorHidden: {
    width: 0,
    height: 0,
    opacity: 0,
  },
  contentContainer: {
    paddingBottom: 12,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 6,
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
    fontSize: 18,
    fontWeight: "700",
  },
  body: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});
