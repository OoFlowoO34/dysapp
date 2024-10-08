/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    }
  },

  plugins: [
    require('daisyui')
  ],
}

