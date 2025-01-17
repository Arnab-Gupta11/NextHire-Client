/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "primary-bg-dark": "#030817",
        "secondary-bg-dark": "#15162F",
        "primary-bg-light": "#f9fbfd",
        "secondary-bg-light": "#e4eafc",
      },
      boxShadow: {
        "card-shadow-dark": "rgb(21, 22, 47) 0px 1px 0px 1px, rgb(21, 22, 47) 0px 1px 0px 1px",
        "card-shadow-light": "rgba(17, 17, 26, 0.05) 0px 1px 0px 1px, rgba(17, 17, 26, 0.1) 0px 1px 0px 1px",
        "box-shadow": "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
