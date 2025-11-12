/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./*.html", "./*.js"],
  theme: {
    fontFamily:{
      'sans': ['Poppins', 'Sans-serif']
    },
    extend: {
      backgroundImage:{
        "home": "url('../IMG/bg.png')"
      }
    },
  },
  plugins: [],
}

