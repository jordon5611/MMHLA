import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#211C16",
          50: "#F7F6F5",
          100: "#EAE7E3",
          200: "#D5CFC7",
          300: "#B5ABA0",
          400: "#7F7365",
          500: "#504437",
          600: "#3D342A",
          700: "#312921",
          800: "#27211B",
          900: "#211C16",
          950: "#17130F",
        },
        gold: {
          DEFAULT: "#987641",
          50: "#FAF8F4",
          100: "#F4EFE6",
          200: "#E8DDC8",
          300: "#D8C9AE", // Muted Champagne
          400: "#B89B66",
          500: "#987641", // Antique Gold
          600: "#836434",
          700: "#6B5028",
          800: "#523C1E",
          900: "#3B2B15",
        },
        ivory: {
          DEFAULT: "#F4F0E8", // Warm Ivory
          soft: "#FAF8F5",
          pure: "#FFFFFF",
          card: "#FBF9F5",
          muted: "#ECE6D8",
          dark: "#E3DAC7",
        },
        champagne: {
          DEFAULT: "#D8C9AE", // Muted Champagne
          light: "#EAE1CF",
          dark: "#C5B292",
        },
      },
      fontFamily: {
        serif: ["var(--font-cinzel)", "Georgia", "Cambria", "serif"],
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
