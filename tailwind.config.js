/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#33AF53',  // Blue
        secondary: '#FFFFFF',
        card: '#212121', 
        background: '#171717'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'headline-1': '64px',
        'subheadline-1': '48px',
        'headline-2': '48px',
        'subheadline-2': '32px',
        'headline-3': '32px',
        'subheadline-3': '24px',
        'subheadline-4': '20px',
      },
      screens: {
        'sm': { 'max': '768px' },
      },
    },
  },
  plugins: [],
};
