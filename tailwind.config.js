/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      blue: {
        100: '#3E97FF',
        200: '#2884EF'
      },
      gray: {
        100: '#F9F9F9',
        200: '#EEF6FF',
        300: '#D8D8E5',
        400: '#A1A5B7',
        500: '#7E8299',
        600: '#3F4254',
        900: '#181C32',
        dark: '#FFFFFF1A'
      },
      red: '#F1416C'
    }
    // extend: {}
  },
  plugins: []
}
