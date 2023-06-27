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
        dropdown: 'dropdown 1s ease-in-out',
        marquee: 'marquee 20s linear infinite'
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
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      fontFamily: {
        'montrealbold': ['montreal-bold', 'sans-serif'],
        'montrealmedium': ['montreal-medium', 'sans-serif'],
        'montrealsemiitalic': ['montreal-semiitalic', 'sans-serif'],
        'machinainkultra': ['machina-inkultra', 'sans-serif'],
      },
      colors: {
        'light-primary-background': '#F4F4F4',
        'light-secondary-background': '#DADADA',
        'light-tertiary-background': '#BFBFBF',
        'light-primary-text': '#0D0D0D',
        'light-secondary-text': '#828282',
        'light-accent-color': '#A5A5A5',
        'dark-primary-background': '#0D0D0D',
        'dark-secondary-background': '#2E2E2E',
        'dark-tertiary-background': '#595959',
        'dark-primary-text': '#E6E6E6',
        'dark-secondary-text': '#BDBDBD',
        'dark-accent-color': '#828282',
        'covr-primary-blue': '#0080FF',
      },
      screens: {
        'iphone6': '375px',             // iPhone 6/7/8/SE (2nd generation)
        'iphoneplus': '414px',          // iPhone 6/7/8 Plus
        'iphonex': '375px',             // iPhone X/XS/11 Pro
        'iphonexr': '414px',            // iPhone XR/11
        'iphonexsmax': '414px',         // iPhone XS Max/11 Pro Max
        'iphonexrmax': '414px',         // iPhone 12/12 Pro
        'iphonexrmax': '428px',         // iPhone 12/12 Pro Max
        'ipad': '768px',                // iPad (portrait orientation)
        'ipadpro': '1024px',            // iPad (landscape orientation) and iPad Pro (9.7-inch)
        'ipadpro11': '834px',           // iPad Pro (11-inch)
        'ipadpro12': '1024px',
      },
    },
  },
  plugins: [require("daisyui"), require('flowbite/plugin')],
}