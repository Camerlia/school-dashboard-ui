import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lamaSky: "#0B2D72 ",
        lamaSkyLight: "#0992C2",
        lamaPurple: "#15173D",
        lamaPurpleLight: "#982598",
        lamaYellow: "#FDC3A1",
        lamaYellowLight: "#FAB95B",
      }
    },
  },
  plugins: [],
};
export default config;
