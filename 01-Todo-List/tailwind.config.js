/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navbar_color: '#21212b',
        background_color: '#181820',
        collection_color: '#21212b',
        tab_collection_color: '#414052',
        button_color: '#fc76a1',
        collection_hover: '#14141b'
      }
    },
  },
  plugins: [],
}

