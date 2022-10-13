/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      '2xl': 32,
      'xl': 24,
      'lg': 20,
      'md': 18,
      'sm': 16,
      'xs': 14,
    },
    colors: {
      'transparent': 'transparent',
      'gray-900': '#121214',
      'gray-800': '#27272A',
      'gray-400': '#6F6F6F',
      'gray-200': '#9CA3AF',
      'gray-100': '#E5E7EB',

      'cyan-500': '#61DAFB',
      'cyan-400': '#A5F3FC',
      'cyan-300': '#BEF8FF',

      'white': '#FFFFFF',
      'black': '#000000',

      'red': '#E72A2A'
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },

  },
  plugins: [],
}
