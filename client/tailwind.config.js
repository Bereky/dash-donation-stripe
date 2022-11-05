/** @type {import('tailwindcss').Config} **/

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orangeMain: "#FF9671",
        orangeLight: "#FFAC8E"
      }
    },
  },
  plugins: [],
}
