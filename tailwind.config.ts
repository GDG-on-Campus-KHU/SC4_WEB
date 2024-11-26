import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { yellow: "#FFCA43", gray: "#d9d9d9", darkGray: "#5c5c5c" },
      fontFamily: {
        sans: ["Pretendard"],
      },
    },
  },
  plugins: [],
} satisfies Config;
