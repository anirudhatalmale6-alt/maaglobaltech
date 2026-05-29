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
        primary: {
          50: "#EBF5FF",
          100: "#D6EBFF",
          200: "#ADD6FF",
          300: "#75B8FF",
          400: "#3B97FF",
          500: "#1A7AE6",
          600: "#0F5FC2",
          700: "#0A4A9E",
          800: "#0D1F4B",
          900: "#0A1833",
        },
        navy: {
          700: "#112240",
          800: "#0D1B3E",
          900: "#091428",
        },
        accent: "#42A5F5",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
