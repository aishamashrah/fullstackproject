/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lobster : ["Lobster", "cursive"],
        Noto : ["Noto Serif", "cursive"],
      },
    },
  },
  plugins: [require('tailwind-hamburgers')],

}

