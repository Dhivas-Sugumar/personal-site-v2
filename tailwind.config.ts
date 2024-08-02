import { ColorPalette } from "@/design-system";
import type { Config } from "tailwindcss";
import { PluginCreator } from "tailwindcss/types/config";


const paragraphPlugin: PluginCreator = ({ addComponents }) =>
  addComponents({
    '.body': {
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '24px',
      color: ColorPalette.neutral10,
    },
    '.body2': {
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '24px',
      color: ColorPalette.neutral10,
    },
    '.body3': {
      fontSize: '12px',
      fontWeight: '500',
      lineHeight: '24px',
      color: ColorPalette.neutral10,
    },
    '.body4': {
      fontSize: '10px',
      fontWeight: '400',
      lineHeight: '24px',
      color: ColorPalette.neutral10,
    },
  });
  
  const headerPlugin: PluginCreator = ({ addComponents }) =>
    addComponents({
      '.header': {
        fontFamily: 'Eiko',
        fontSize: '32px',
        fontWeight: '700',
        lineHeight: '40px',
        color: ColorPalette.neutral10,
      },
      '.header2': {
        fontFamily: 'Eiko',
        fontSize: '28px',
        fontWeight: '700',
        lineHeight: '36px',
        color: ColorPalette.neutral10,
      },
      '.header3': {
        fontFamily: 'Eiko',
        fontSize: '24px',
        fontWeight: '700',
        lineHeight: '32px',
        color: ColorPalette.neutral10,
      },
      '.header4': {
        fontFamily: 'Eiko',
        fontSize: '20px',
        fontWeight: '700',
        lineHeight: '28px',
        color: ColorPalette.neutral10,
      },
    });
   
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
      ...ColorPalette,
    },
    fontFamily: {
      hero: ['simple-serenity-serif', 'serif'],
      heading: ['eiko', 'sans-serif'],
      body: ['neue', 'sans-serif'],
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
        "sm": "4px",
        "md": "6px",
        "lg": "8px",
        "xl": "12px",
        "xxl": "16px",
        "xxxl": "24px",
        "full": "9999px"
      }
    }
  },
  plugins: [paragraphPlugin, headerPlugin],
}
export default config;
