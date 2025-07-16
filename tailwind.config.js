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
          blue: '#10B981',
          lightblue: '#34D399',
          darkblue: '#047857',
          yellow: '#84CC16',
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