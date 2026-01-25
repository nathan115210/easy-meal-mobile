import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useTheme} from "@react-navigation/native";
import useDrawer from "@/hooks/use-drawer";

type Props = {
    hideMenu?: boolean;
};

const CustomHeaderTitle: React.FC<Props> = ({hideMenu}) => {
    const {colors} = useTheme();
    const {DrawerTrigger} = useDrawer({to: "open"});


    return (
        <View style={styles.container}>
            {!hideMenu && <DrawerTrigger/>}
            <View style={styles.logoRow}>
                <Ionicons name="medal" size={24} color={colors.text}/>
                <Text style={[styles.title, {color: colors.text}]}>Easy Meal</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
    },
    logoRow: {
        flexDirection: "row",
        gap: 16,
        justifyContent: "flex-end",
    },

    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default CustomHeaderTitle;
