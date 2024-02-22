/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      text: "#040316",
      background: "#fbfbfe",
      primary: "#2f27ce",
      secondary: "#dddbff",
      accent: "#443dff",
    },
    fontSize: {
      sm: "0.750rem",
      base: "1.1rem",
      xl: "1.333rem",
      "2xl": "1.777rem",
      "3xl": "2.369rem",
      "4xl": "3.158rem",
      "5xl": "4.210rem",
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: theme("fontSize.3xl"),
          fontWeight: theme("fontWeight.bold"),
        },
        h2: {
          fontSize: theme("fontSize.2xl"),
          fontWeight: theme("fontWeight.bold"),
        },
        h3: {
          fontSize: theme("fontSize.xl"),
        },
        p: {
          fontSize: theme("fontSize.base"),
          lineHeight: theme("lineHeight.8"),
          textAlign: "pretty",
        },
        ul: {
          fontSize: theme("fontSize.base"),
          lineHeight: theme("lineHeight.8"),
          listStyleType: "disc",
          listStylePosition: "inside",
        },
      });
    }),
  ],
};
