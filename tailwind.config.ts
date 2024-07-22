import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-image": "url('/assets/LP-image.png')",
      },
      screens:{
        'sm': '340px',
      }
    },
    colors: {
      green: "#267139",
      white:"#ffffff",
      lightgolden:"#FFFBCD",
      darkgreen:"#083129"
    },
  },
  plugins: [],
};
export default config;
