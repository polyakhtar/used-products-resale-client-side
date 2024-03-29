/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Space:['Space Grotesk', 'sans-serif'],
        Acme:['Acme', 'sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
}
