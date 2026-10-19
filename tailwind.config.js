/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#d9bf8c',
          light: '#d9bf8c',
          dark: '#89744a',
          50: '#fbf7f0',
          100: '#f4ecdb',
          200: '#e9d9b8',
          300: '#d9bf8c',
          400: '#c9a763',
          500: '#b8924a',
          600: '#89744a',
          700: '#6f5d3c',
          800: '#54462e',
          900: '#3a3020',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      screens: {
        sm: '600px',
        md: '720px',
        lg: '960px',
        xl: '1280px',
      },
      maxWidth: {
        content: '640px',
        header: '900px',
      },
    },
  },
  plugins: [],
};
