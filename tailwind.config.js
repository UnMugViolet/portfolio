/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'window-white': 'linear-gradient(to right, rgb(237, 237, 229) 0%, rgb(237, 232, 205) 100%)',
      }),
      colors: {
        'dropdown': '#1660E8',
        'window-blue': '#0831D9'
      },
      padding: {
        '0.75': '0.19rem',
      },
      width: {
        '194px': '194px',
      },
    },
  },
  plugins: [],
}

