/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'rose': ['Alex Brush', 'cursive'],
        'literata': ['Literata', 'serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://www.elite-ninarose.com/themes/bespoke/img/hero.jpg')",
        'photo1': "url('https://www.elite-ninarose.com/assets/pages/1634641965_pages_129_616ea82d5f262.jpg')",
      }
    },
  },
  plugins: [],
}
