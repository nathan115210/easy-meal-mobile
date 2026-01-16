import {mealsData} from "@/constants/data/data";
import {ThemedText} from "@/components/themed-text";
import {ThemedView} from "@/components/themed-view";

export function MealsOverview() {
    console.log("MealsOverview", mealsData);
    return <ThemedView>
        <ThemedText>meals overview</ThemedText>
    </ThemedView>;
}
