module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // NOTE: Required by react-native-reanimated (and used by @gorhom/bottom-sheet).
      // Must be listed LAST, per Reanimated docs.
      "react-native-reanimated/plugin",
    ],
  };
};
