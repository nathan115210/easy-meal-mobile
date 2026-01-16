# Easy Meal Mobile

A React Native (Expo) app for browsing meals, viewing meal details, and tracking ingredients as you cook.

## Features

- Meal detail screen with hero image (parallax header)
- Dietary badges (e.g. Gluten-Free / Vegan / Vegetarian)
- Ingredients checklist (checkboxes)
- Step-by-step cooking instructions

## Getting started

### 1) Install dependencies

```bash
npm install
```

### 2) Run the app

```bash
npx expo start
```

Then open in:

- iOS Simulator
- Android Emulator
- Expo Go (limited sandbox)
- Development build (recommended for native modules)

## Project structure (high level)

- `src/navigation/screens/` — app screens (e.g. meal detail)
- `src/components/ui/` — reusable UI components (`Chip`, `Checkbox`, themed primitives)
- `src/constants/data/` — local data source

## Notes

- The ingredients list on the meal detail screen is interactive (checkbox state is currently local to the screen).

## Scripts

```bash
npm run start
npm run ios
npm run android
```

## Tech stack

- Expo + React Native
- React Navigation
- TypeScript

## Learn more

- Expo docs: https://docs.expo.dev/
- React Navigation: https://reactnavigation.org/
