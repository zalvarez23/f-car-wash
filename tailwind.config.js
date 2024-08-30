import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4f6c7c",
        "primary-light": "#f4fbff",
        black: "#000000",
        "light-white": "rgba(255, 255, 255, 0.18)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
