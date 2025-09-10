/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
         nunito: ['Nunito', 'sans-serif'],
      },
      keyframes: {
        slideUpAndFadeIn: {
          '0%': { transform: 'translateY(10px) scale(0.95)', opacity: '0' },
          '100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
        },
        slideDownAndFadeOut: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '1' },
          '100%': { transform: 'translateY(10px) scale(0.95)', opacity: '0' },
        },
      },
      animation: {
        slideUpAndFadeIn: 'slideUpAndFadeIn 0.3s ease-out forwards',
        slideDownAndFadeOut: 'slideDownAndFadeOut 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
}
