import nextConfig from "eslint-config-next";
import simpleImportSort from "eslint-plugin-simple-import-sort";

const config = [
  ...nextConfig,
  {
    files: ["**/*.{js,jsx,mjs,ts,tsx,mts,cts}"],
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      quotes: "error",
      semi: "error",
      "semi-style": "error",
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": "error",
    },
  },
  {
    // The "@typescript-eslint" plugin is registered by eslint-config-next,
    // which scopes it to TypeScript files only.
    files: ["**/*.{ts,tsx,mts,cts}"],
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "error",
    },
  },
];

export default config;
