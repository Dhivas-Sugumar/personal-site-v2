import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./packages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      // Add colorPallette here from theme design system
    },
    fontFamily: {
      // Decide on font families
    },
    // Move these values into the theme design system package
    extend: {
      spacing: {
        "sm": "8px",
        "md": "16px",
        "l": "24px",
        "xl": "32px",
        "xxl": "48px"
      },
      borderRadius: {
        "xs": "2px",
        "xm": "4px",
        "md": "6px",
        "lg": "8px",
        "xl": "12px",
        "xxl": "16px",
        "xxxl": "24px",
        "full": "9999px"
      }
    }
  }
}
export default config;
