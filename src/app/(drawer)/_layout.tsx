import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        swipeEnabled: true,
        drawerActiveTintColor: "#e91e63",
        drawerActiveBackgroundColor: "#fce4ec",
        drawerType: "front",
        drawerStatusBarAnimation: "fade",
      }}
      /* drawerContent={(props) => (
                 <DrawerContentScrollView {...props}>
                     <DrawerItemList {...props} />

                     {/!* Custom modal item (NOT a route) *!/}
                     <DrawerItem
                         label="Settings"
                         icon={({color, size}) => (
                             <Ionicons name="settings-outline" size={size} color={color}/>
                         )}
                         onPress={() => router.push("/settings")}
                     />
                 </DrawerContentScrollView>
             )}*/
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
