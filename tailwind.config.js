/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['"Lato"', 'cursive', 'sans-serif'],
        mont: ['"Montserrat"', 'sans-serif']
      },
    },
  },
  plugins: [],
}

