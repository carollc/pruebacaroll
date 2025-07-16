/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        undp: {
          blue: '#0066CC',
          lightblue: '#4A90E2',
          darkblue: '#003366',
          yellow: '#FFCC00',
          gray: '#F5F5F5',
          darkgray: '#333333'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}