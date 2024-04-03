/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'black': '#232625',
        'darkgray': '#35403A',
        'medgray': '#4C594F',
        'gray': '#A4A69C',
        'lightgray': '#BFBFB8'
      }
    },
    
  },
  plugins: [],
}

