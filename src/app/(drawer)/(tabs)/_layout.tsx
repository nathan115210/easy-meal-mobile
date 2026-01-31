import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';
import React from "react";


export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Label>Home</Label>
        <Icon sf="house.fill" drawable="custom_android_drawable" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="favorites">
        <Icon sf="heart.fill" drawable="custom_favorites_drawable" />
        <Label>Favorites</Label>
      </NativeTabs.Trigger>
      
     <NativeTabs.Trigger name="search" role="search">
        <Label>Search</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
