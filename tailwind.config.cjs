/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'gray-100-my': '#F2F2F2',
      'gray-200-my': '#D9D9D9',
      'gray-300-my': '#808080',
      'gray-400-my': '#333333',
      'gray-500-my':'#262626',
      'gray-600-my': '#1A1A1A',
      'gray-700-my': '#0D0D0D',
      'purple-my': '#8284FA',
      'purple-dark-my': '#5E60CE',
      'blue-my': '#4EA8DE',
      'blue-dark-my':'#1E6F9F',
      'danger-my': '#E25858',
    },
    fontFamily: {
      'inter':'Inter',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
