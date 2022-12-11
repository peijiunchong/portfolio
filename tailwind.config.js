/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        burtons: "burtons",
      },
      colors:{
        'ivory-white': '#FFFFF0',
        'azure': '#9CB2B1',
        'dusty-rose': '#C9A9A6',
        'old-red': '#AC3834'
      }
    },
  },
  plugins: [],
}