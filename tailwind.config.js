/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      fontFamily: {
        poppins: ["Poppins", "Sans-serif"]
      }
     },
   },
   variants: {},
   plugins: [],
 }