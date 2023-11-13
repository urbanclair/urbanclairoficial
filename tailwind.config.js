/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    screens: {
      'lg': {'min': '1021px'},
      'md': {'min': '768px', 'max': '1020px'},
      'sm': {'max': '767px'}
    },
    extend: {
    },
  },
  plugins: [],
}

