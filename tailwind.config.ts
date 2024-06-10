import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      padding: {
        content: "1rem"
      },
      maxWidth: {
        content: "72rem",
      },
      minWidth: {
        content: "24rem",
      },
      animation: {
        appear: "appear 2s ease-in-out both",
        boom: "boom 0.5s ease-in-out both",
      },
      keyframes: {
        appear: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        boom: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "80%": { transform: "scale(1.1)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      }
    },
  },
  plugins: [],
};

export default config;
