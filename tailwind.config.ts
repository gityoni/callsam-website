/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0056D2', // Sapphire Blue
          light: '#3B82F6',
          dark: '#003E99',
        },
        secondary: {
          DEFAULT: '#2D3748', // Anthracite Grey
          light: '#4A5568',
        },
        background: {
          DEFAULT: '#FFFFFF',
          soft: '#F8F9FA',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        brand: ['Righteous', 'sans-serif'],
        logo: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
};