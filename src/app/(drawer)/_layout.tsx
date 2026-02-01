import CustomHeaderTitle from "@/components/navigation/custom-header-title";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { router } from "expo-router";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { Platform } from "react-native";

function DrawerLayout() {
  return (
    <Drawer
      
      screenOptions={{
        //headerShown: false,
        headerTitle: () => <CustomHeaderTitle hideMenu />,
        headerTransparent: true,
        headerBackground: () =>
          Platform.OS === 'ios' ? (
            <BlurView
              intensity={70}
              tint="systemMaterial"
              style={{ flex: 1 }}
            />
          ) : null,
      }}
    >
      {/* Only define real routes that exist under app/(drawer)/... */}
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: "Home",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          title: "Settings",
          drawerLabel: "Settings",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }}
        listeners={{
          drawerItemPress: (e) => {
            // Prevent default drawer navigation so we can attach params
            e.preventDefault();
            router.push({ pathname: "/settings", params: { fromDrawer: "1" } });
          },
        }}
      />
    </Drawer>
  );
}

export default DrawerLayout;
