// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ["dist/*"],
  },
  {
    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },
  },
  // Project-specific overrides: relax some rules for file-based routes under src/app
  {
    overrides: [
      {
        files: ["src/app/**"],
        rules: {
          // Expo Router uses default exports for route files; linters sometimes flag them as unused.
          "no-unused-vars": "off",
          "@typescript-eslint/no-unused-vars": "off",
          // allow console in certain debug situations
          "no-console": "off",
        },
      },
    ],
  },
]);
