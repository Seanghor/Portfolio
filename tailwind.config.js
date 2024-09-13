/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'large': '1640px', // Custom breakpoint named 'large' for 1440px
        'lg': '1440px',
      },
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
        // Header font sizes h1
        'lg-title': '2.5rem', // Large screen title size
        'md-title': '2rem', // Medium screen title size
        'sm-title': '1.5rem', // Small screen title size

        //h3
        'lg-h3': '1.5rem', // Large screen title size
        'md-h3': '1.25rem', // Medium screen title size
        'sm-h3': '1rem', // Small screen title size

        // Paragraph font sizes
        'lg-p': '1.125rem', // This is equivalent to Tailwind's 'lg'
        'md-p': '1rem', // This is equivalent to Tailwind's 'base'
        'sm-p': '0.75rem', // This is equivalent to Tailwind's 'xs'

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

