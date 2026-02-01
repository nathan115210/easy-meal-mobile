import { useFavorites } from "@/context/favorite-context";
import { useSegments } from "expo-router";
import {
  Badge,
  Icon,
  Label,
  NativeTabs,
} from "expo-router/unstable-native-tabs";
import React, { useEffect } from "react";

export default function TabsLayout() {
  const { badgeCount, resetBadge } = useFavorites();
  const segments = useSegments();
  const isFavoritesFocused = segments.includes("favorites");

  useEffect(() => {
    if (isFavoritesFocused) resetBadge();
  }, [isFavoritesFocused, resetBadge]);

  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Label>Home</Label>
        <Icon sf="house.fill" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="favorites">
        <Label>Favorites</Label>
        <Icon sf="heart.fill" />
        {!isFavoritesFocused && badgeCount > 0 ? (
          <Badge>{`+${String(badgeCount)}`}</Badge>
        ) : null}
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="categories">
        <Label>Categories</Label>
        <Icon sf="square.grid.2x2.fill" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="search" role="search">
        <Label>Search</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
