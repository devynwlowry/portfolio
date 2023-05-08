/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        scroll: 'scroll 40s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-250x * 14))' },
        },
      },
    //   backgroundImage: {
    //     'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    //     'gradient-conic':
    //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    //   },
    //   animation: {
    //     'gradient-x':'gradient-x 15s ease infinite',
    //     'gradient-y':'gradient-y 15s ease infinite',
    //     'gradient-xy':'gradient-xy 15s ease infinite',
    //   },
    //   keyframes: {
    //     'gradient-y': {
    //       '0%, 100%': {
    //         'background-size':'400% 400%',
    //         'background-position': 'center top'
    //       },
    //       '50%': {
    //         'background-size':'200% 200%',
    //         'background-position': 'center center'
    //         }
    //     },
    //     'gradient-x': {
    //         '0%, 100%': {
    //           'background-size':'200% 200%',
    //           'background-position': 'left center'
    //         },
    //         '50%': {
    //           'background-size':'200% 200%',
    //           'background-position': 'right center'
    //         }
    //     },
    //     'gradient-xy': {
    //         '0%, 100%': {
    //           'background-size':'400% 400%',
    //           'background-position': 'left center'
    //         },
    //         '50%': {
    //           'background-size':'200% 200%',
    //           'background-position': 'right center'
    //         }
    //     }
    // }
      fontFamily: {
        'monumentblack': ['monument-black', 'sans-serif'],
        'montrealbold': ['montreal-bold', 'sans-serif'],
        'montrealmedium': ['montreal-medium', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
}