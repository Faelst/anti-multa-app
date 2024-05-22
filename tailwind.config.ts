import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      backgroundImage: ({ theme }) => ({
        stripes: `repeating-linear-gradient(-45deg, transparent, transparent 1rem, ${theme(
          'colors.lowlight'
        )} 1rem, ${theme('colors.lowlight')} 2rem)`
      }),
      fontFamily: {
        sans: ['Lato', 'sans-serif']
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};

export default config;
