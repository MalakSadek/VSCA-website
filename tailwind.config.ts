import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        primary: {
          DEFAULT: "#276197",
          50: "#E8F0F7",
          100: "#D1E1EF",
          200: "#A3C3DF",
          300: "#75A5CF",
          400: "#4787BF",
          500: "#276197",
          600: "#1F4D79",
          700: "#17395B",
          800: "#0F253D",
          900: "#08121E",
        },
        secondary: {
          DEFAULT: "#47A9DC",
          50: "#E8F4FA",
          100: "#D1E9F5",
          200: "#A3D3EB",
          300: "#75BDE1",
          400: "#47A9DC",
          500: "#2B8BC4",
          600: "#226FA0",
          700: "#1A5377",
          800: "#11374E",
          900: "#091B25",
        },
        accent: {
          DEFAULT: "#EEA947",
          50: "#FDF5E8",
          100: "#FBECD1",
          200: "#F7D9A3",
          300: "#F3C675",
          400: "#EFB347",
          500: "#EEA947",
          600: "#D6942A",
          700: "#A16F20",
          800: "#6B4A15",
          900: "#36250B",
        },
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
