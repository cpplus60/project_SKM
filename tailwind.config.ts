import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        panel: "#131313",
        gold: "#C79A2E",
        goldDark: "#9A6B0F",
        offwhite: "#F2EFE9",
        grey: "#8A857C",
        border: "#262626",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-heading)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1200px",
        copy: "720px",
      },
      minHeight: {
        tap: "48px",
      },
    },
  },
  plugins: [],
};

export default config;
