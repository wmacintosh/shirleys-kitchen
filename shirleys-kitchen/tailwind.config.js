/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#08121c',
        'card-blue': '#0b1928',
        'ice-blue': '#d7e5f4',
        'blue-300': '#87b2de',
        'blue-500': '#377fc8',
        'blue-600': '#2c66a0',
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'serif': ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
