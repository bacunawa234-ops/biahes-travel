import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'biahes': {
          'bright-blue': '#277DE5',
          'royal-blue': '#255BBB',
          'navy': '#141C69',
          'red': '#C12C3E',
          'deep-red': '#A2153D',
          'orange': '#EA5537',
          'gold': '#FFB347',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        script: ['Kaushan Script', 'cursive'],
        condensed: ['Roboto Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
