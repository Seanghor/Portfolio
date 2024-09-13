/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'navigation': [
          'Poppins', 'sans-serif', 'Dancing Script', 'cursive', 'Dangrek', 'cursive', 'Fasthand', 'cursive'
        ],
        'poppins': ['Poppins', 'sans-serif'],
        'Angkor': ['Angkor', 'cursive'],
        'DancingScript': ['Dancing Script', 'cursive'],
        'Dangrek': ['Dangrek', 'cursive'],
        'Fasthand': ['Fasthand', 'cursive'],
      },
      fontSize: {

      },
      colors: {
        'primary': '#FF6363',
        'secondary': {
          100: '#E2E2D5',
          200: '#888883',
        },
        'orange': '#b74b4b'

      }
    },
  },
  plugins: [],
}

