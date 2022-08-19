const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: colors.gray['100'], // Secondary section color on light mode
        dark: colors.zinc['800'], // Secondary section color on dark mode
        midnight: '#1B1B1B', // Bg color on dark mode
        secondary: { // Secondary text color
          DEFAULT: colors.gray['400'],
          dark: colors.gray['400'] // TODO: currently these are the same; do we want to make them different?
        }
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '3rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    }
  },
  plugins: [],
}
