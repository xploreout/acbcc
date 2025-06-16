/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary burgundy/wine colors
        primary: {
          50: '#fdf2f2',
          100: '#fce7e7',
          200: '#f9d1d1',
          300: '#f4a6a6',
          400: '#ec7373',
          500: '#dc4444',
          600: '#c73030',
          700: '#a61e1e',
          800: '#8b1a1a',
          900: '#741b1b',
          950: '#3f0a0a',
        },
        // Warm beige/cream colors
        cream: {
          50: '#fefdfb',
          100: '#fdf9f3',
          200: '#fbf1e4',
          300: '#f7e4cc',
          400: '#f1d0a7',
          500: '#e8b87f',
          600: '#dda05c',
          700: '#c8864a',
          800: '#a56d3e',
          900: '#855836',
          950: '#472d1b',
        },
        // Rich brown accents
        brown: {
          50: '#f7f3f0',
          100: '#ede4dc',
          200: '#dcc9ba',
          300: '#c5a690',
          400: '#b08268',
          500: '#a06b4d',
          600: '#935741',
          700: '#7a4637',
          800: '#643a31',
          900: '#53322b',
          950: '#2d1916',
        },
        // Soft gold accents
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        }
      }
    },
  },
  plugins: [],
};