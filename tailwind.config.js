/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eefbf3',
          100: '#d6f5e1',
          200: '#aeebc6',
          300: '#7bdba6',
          400: '#45c383',
          500: '#20a869',
          600: '#158755',
          700: '#136c46',
          800: '#12563a',
          900: '#0f4731',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
