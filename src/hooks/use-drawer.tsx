import React, { useMemo } from "react";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import IconButton, { BackIconButtonProps } from "@/components/ui/icon-button";
import { useDrawerStatus } from "@react-navigation/drawer";

interface UseDrawerProps {
  toggleDrawer: () => void;
  DrawerTrigger: React.FC;
}

export default function useDrawer({
  to,
}: {
  to: "back" | "open";
}): UseDrawerProps {
  const isDrawerOpen = useDrawerStatus() === "open";
  const navigation = useNavigation();
  const toggleDrawer = () => navigation.dispatch(DrawerActions.toggleDrawer());

  const drawerTriggerIcon: BackIconButtonProps["iconName"] = useMemo(() => {
    return to === "back"
      ? {
          ios: "chevron-back",
          android: "arrow-back",
        }
      : {
          ios: "menu",
          android: "menu",
        };
  }, [to]);

  const DrawerTrigger: React.FC = () => {
    return <IconButton iconName={drawerTriggerIcon} onPress={toggleDrawer} />;
  };

  return {
    toggleDrawer,
    DrawerTrigger,
  };
}
