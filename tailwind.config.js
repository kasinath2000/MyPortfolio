/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        },
        animation : {
          'spin-slow-30': 'spin 30s linear infinite',
          'spin-slow-25': 'spin 25s linear infinite',
          'spin-slow-10': 'spin 10s linear infinite',
          'marquee-infinite' : 'marquee 2s linear infinite',
        },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}



