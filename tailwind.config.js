/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dropdown: '#1660E8',
      },
      padding: {
        '0.75': '0.19rem',
      },
      maxWidth: {
        '220': '220px',
      },
    },
  },
  plugins: [],
}

