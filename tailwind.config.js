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
        dropdown: 'dropdown 1s ease-in-out'
      },
      keyframes: {
        text: {
          '0%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        dropdown: {
          '0%': { transform: 'translateY(-60%)'},
          '100%': { transform: 'translateY(0%)' },
        },
      },
      fontFamily: {
        'montrealbold': ['montreal-bold', 'sans-serif'],
        'montrealmedium': ['montreal-medium', 'sans-serif'],
        'montrealsemiitalic': ['montreal-semiitalic', 'sans-serif'],
        'machinainkultra': ['machina-inkultra', 'sans-serif'],
      },
      colors: {
        
      },
    },
  },
  plugins: [require("daisyui")],
}