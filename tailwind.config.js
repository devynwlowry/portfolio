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
        'monumentblack': ['monument-black', 'sans-serif'],
        'montrealbold': ['montreal-bold', 'sans-serif'],
        'montrealmedium': ['montreal-medium', 'sans-serif'],
        'glacialitalic': ['glacial-italic', 'sans-serif'],
        'glacialbold': ['glacial-bold', 'sans-serif'],
        'glacial': ['glacial-regular', 'sans-serif'],
        'silkablack': ['silka-blackitalic', 'sans-serif'],
      },
      backgroundImage: {
        'array': "url('../../public/images/mini.svg')",
        'arraywhite': "url('../../public/images/mini_white.svg')",
        'covrproduct': "url('../../public/images/covr.png')",
      },
      colors: {
        
      },
    },
  },
  plugins: [require("daisyui")],
}