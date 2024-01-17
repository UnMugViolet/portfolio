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
        'header-window-active': 'linear-gradient(rgb(0, 88, 238) 0%, rgb(53, 147, 255) 4%, rgb(40, 142, 255) 6%, rgb(18, 125, 255) 8%, rgb(3, 111, 252) 10%, rgb(2, 98, 238) 14%, rgb(0, 87, 229) 20%, rgb(0, 84, 227) 24%, rgb(0, 85, 235) 56%, rgb(0, 91, 245) 66%, rgb(2, 106, 254) 76%, rgb(0, 98, 239) 86%, rgb(0, 82, 214) 92%, rgb(0, 64, 171) 94%, rgb(0, 48, 146) 100%)',
        'header-window-deactivated': 'linear-gradient(rgb(118, 151, 231) 0%, rgb(126, 158, 227) 3%, rgb(148, 175, 232) 6%, rgb(151, 180, 233) 8%, rgb(130, 165, 228) 14%, rgb(124, 159, 226) 17%, rgb(121, 150, 222) 25%, rgb(123, 153, 225) 56%, rgb(130, 169, 233) 81%, rgb(128, 165, 231) 89%, rgb(123, 150, 225) 94%, rgb(122, 147, 223) 97%, rgb(171, 186, 227) 100%)',
      }),
      colors: {
        'dropdown': '#1660E8',
        'window-blue-active': '#0831D9',
        'window-blue-deactivated': '#6582F5',
        'pellet-blue-active': '#1E52B7',
        'pellet-blue-deactivated': '#3C81F3',
      },
      boxShadow: {
        'pellet-shadow' : 'box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 1px 1px inset, rgba(0, 0, 0, 0.7) 1px 0px 1px inset'
      },
      fontSize: {
        'xs': '0.7rem',
      },
      padding: {
        '0.75': '0.20rem',
      },
      width: {
        '194px': '194px',
      },
      zIndex: {
        'max': '999999',
      }
    },
  },
  plugins: [],
}
