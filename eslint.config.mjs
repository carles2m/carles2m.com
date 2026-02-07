import tsEslint from "@typescript-eslint/eslint-plugin";
import nextConfig from "eslint-config-next";
import simpleImportSort from "eslint-plugin-simple-import-sort";

const config = [
  ...nextConfig,
  {
    files: ["**/*.{js,jsx,mjs,ts,tsx,mts,cts}"],
    plugins: {
      "@typescript-eslint": tsEslint,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "error",
      quotes: "error",
      semi: "error",
      "semi-style": "error",
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": "error",
    },
  },
];

export default config;
