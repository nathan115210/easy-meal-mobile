import { Stack } from 'expo-router';

export default function SearchLayout() {
  return <Stack
      screenOptions={{
        headerSearchBarOptions: {
          placeholder: 'Search meals',
          hideWhenScrolling: false,
        },
      }}
    />;
}