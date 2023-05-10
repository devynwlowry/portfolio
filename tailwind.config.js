/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        text: 'text 35s ease infinite',
      },
      keyframes: {
        text: {
          '0%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
      },
      fontFamily: {
        'monumentblack': ['monument-black', 'sans-serif'],
        'montrealbold': ['montreal-bold', 'sans-serif'],
        'montrealmedium': ['montreal-medium', 'sans-serif'],
        'futurastd': ['futura-italic', 'sans-serif'],
        'adedisplay': ['ade-display', 'serif'],
        'darkparadise': ['dark-paradise', 'serif'],
      },
      backgroundImage: {
        'array': "url('../../public/images/mini.svg')",
        'arraywhite': "url('../../public/images/mini_white.svg')",
      },
    },
  },
  plugins: [require("daisyui")],
}