/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*.tsx",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        "myheading": "#1FD5E2",
        "mytext": "#57D8E5",
        "mybg": "#0B1D38",
        "myaccent": "#16878F",
      },
      fontFamily: {
        mysans: ['Lexend', 'sans serif']
      },
      backgroundImage: {
        "chall": "url('/chall.svg')",
      }
    },
  },
  plugins: [],
}
/* vim: set et sw=2: */
