/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D60FF',
        secondary: '#16DBCC',
        darkBlue: '#343C6A',
        lightSlate: '#F5F7FA',
        textGray: '#718EBF'
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem'
      },
      spacing: {
        '8': '2rem',
        '12': '3rem'
      }
    },
  },
  plugins: [],
}