import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#ef4444',
        'neu': '#e2e8f0'
      }
    },
  },
  plugins: [],
} satisfies Config;
