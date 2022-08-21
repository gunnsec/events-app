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
        dark: '#26252C', // Secondary section color on dark mode
        midnight: '#1B1B1B', // Bg color on dark mode
        secondary: { // Secondary text color
          DEFAULT: 'rgba(0, 0, 0, 0.54)',
          dark: 'rgba(249, 250, 251, 0.54)'
        },
        tertiary: { // Tertiary text color
          DEFAULT: 'rgba(0, 0, 0, 0.15)',
          dark: 'rgba(255, 255, 255, 0.15)'
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
