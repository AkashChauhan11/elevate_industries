/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'brass': {
          50: '#fef7e6',
          100: '#fdecc3',
          200: '#fbd68a',
          300: '#f8bb4d',
          400: '#f59e20',
          500: '#f2850e',
          600: '#e36a0a',
          700: '#bc4f0c',
          800: '#963f12',
          900: '#7a3513',
        },
        'gold': {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#D4AF37', // Classic gold
          600: '#B8860B', // Dark goldenrod
          700: '#A0522D', // Sienna
          800: '#8B4513', // Saddle brown
          900: '#654321', // Dark brown
        },
        'elevate': {
          'black': '#000000',
          'gold': '#D4AF37',
          'gold-light': '#FFD700',
          'gold-dark': '#B8860B',
        }
      }
    },
  },
  plugins: [],
}

