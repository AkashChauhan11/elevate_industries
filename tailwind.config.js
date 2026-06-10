/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        // ===== Warm Refined palette (2026 redesign) =====
        brass: {
          light: '#E6C068',
          DEFAULT: '#C99A3B',
          dark: '#A67C2A',
          deep: '#82601F',
          50: '#FBF3E0',
          100: '#F4E4BC',
          200: '#EDD295',
          300: '#E1BC68',
          400: '#D5A847',
          500: '#C99A3B',
          600: '#A67C2A',
          700: '#82601F',
          800: '#5E4516',
          900: '#3D2D0E',
        },
        espresso: {
          DEFAULT: '#3A2E22',
          700: '#4A3B2C',
          800: '#2C231A',
          900: '#1E1813',
        },
        clay: {
          DEFAULT: '#6B5B47',
          light: '#8B7B63',
          dark: '#4F4233',
        },
        cream: {
          DEFAULT: '#FBF7EF',
          200: '#F3EAD7',
          300: '#ECDFC8',
        },
        line: '#E8DDC7',

        // ===== Natural Palette (legacy — kept for compatibility) =====
        'warm-yellow': {
          50: '#FFF8EA', 100: '#FFE5A3', 200: '#FFD775', 300: '#E6C25F',
          400: '#D4B04A', 500: '#C29E35', 600: '#B08C20', 700: '#9E7A0B',
          800: '#8C6800', 900: '#7A5600',
        },
        'earth-brown': {
          50: '#F5F0E0', 100: '#E8DCC0', 200: '#DBC8A0', 300: '#CEB480',
          400: '#C1A060', 500: '#A28E65', 600: '#8B7355', 700: '#745845',
          800: '#5D3D35', 900: '#462225',
        },
        'cream-white': {
          50: '#FFFFFF', 100: '#FFF8EA', 200: '#F5F0E0', 300: '#EBE8D0',
          400: '#E1E0C0', 500: '#D7D8B0', 600: '#CDD0A0', 700: '#C3C890',
          800: '#B9C080', 900: '#AFB870',
        },
        'light-grey': {
          50: '#F8F8F8', 100: '#F0F0F0', 200: '#E8E8E8', 300: '#E0E0E0',
          400: '#DFE0DF', 500: '#D0D0D0', 600: '#C0C0C0', 700: '#B0B0B0',
          800: '#A0A0A0', 900: '#909090',
        },

        // Semantic color mappings
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
        'background': 'var(--color-background)',
        'surface': 'var(--color-surface)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'accent': 'var(--color-accent)',
      },
      boxShadow: {
        warm: '0 10px 30px -12px rgba(58, 46, 34, 0.18)',
        'warm-lg': '0 24px 60px -20px rgba(58, 46, 34, 0.28)',
        brass: '0 8px 24px -8px rgba(201, 154, 59, 0.45)',
      },
      backgroundImage: {
        'brass-gradient': 'linear-gradient(135deg, #E6C068 0%, #C99A3B 55%, #A67C2A 100%)',
        'cream-fade': 'linear-gradient(150deg, #FBF7EF 0%, #F3EAD7 100%)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        shimmer: 'shimmer 6s linear infinite',
        'float-slow': 'float-slow 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
