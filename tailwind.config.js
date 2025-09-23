/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.jsx",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        // Natural Palette Colors
        'warm-yellow': {
          50: '#FFF8EA',
          100: '#FFE5A3',
          200: '#FFD775',
          300: '#E6C25F',
          400: '#D4B04A',
          500: '#C29E35',
          600: '#B08C20',
          700: '#9E7A0B',
          800: '#8C6800',
          900: '#7A5600',
        },
        'earth-brown': {
          50: '#F5F0E0',
          100: '#E8DCC0',
          200: '#DBC8A0',
          300: '#CEB480',
          400: '#C1A060',
          500: '#A28E65',
          600: '#8B7355',
          700: '#745845',
          800: '#5D3D35',
          900: '#462225',
        },
        'cream-white': {
          50: '#FFFFFF',
          100: '#FFF8EA',
          200: '#F5F0E0',
          300: '#EBE8D0',
          400: '#E1E0C0',
          500: '#D7D8B0',
          600: '#CDD0A0',
          700: '#C3C890',
          800: '#B9C080',
          900: '#AFB870',
        },
        'light-grey': {
          50: '#F8F8F8',
          100: '#F0F0F0',
          200: '#E8E8E8',
          300: '#E0E0E0',
          400: '#DFE0DF',
          500: '#D0D0D0',
          600: '#C0C0C0',
          700: '#B0B0B0',
          800: '#A0A0A0',
          900: '#909090',
        },
        // Semantic color mappings
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
        'background': 'var(--color-background)',
        'surface': 'var(--color-surface)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'accent': 'var(--color-accent)',
      }
   
    },
  },
  plugins: [],
}
