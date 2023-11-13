/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    screens: {
      'lg': {'max:': '1024px'},
      'md': {'max:': '768px'},
      'sm': {'max:': '767px'}
    },
    extend: {
    },
  },
  plugins: [],
}

