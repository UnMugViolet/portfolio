/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  // Avoid purging classes that are used in the HTML templates (in that case dynamically loaded from a JSON file)
  safelist: [
    'bg-window-menu-card',
    'bg-window-menu-card-header',
    'bg-solitude-blue',
    'bg-window-menu-card-header',
    'bg-window-menu-card-header-active',
  ],
  theme: {
    extend: {
      fontFamily: {
        'helvetica': ['Helvetica BlackItalic', 'sans-serif'],
        'franklin': ['Franklin Gothic Medium', 'sans-serif'],
        'tahoma': ['Tahoma', 'sans-serif'],
        'verdana': ['Verdana', 'sans-serif'],
        'trebuchet': ['Trebuchet MS', 'sans-serif'],
        'trebuchet-pixel': ['Trebuchet MS pixelated', 'sans-serif'],
      },
      backgroundImage: ({
        'profile-pic': "url('/img/profile-picture.webp')",
        'office-pic': "url('/img/office-picture.webp')",
        'window-picture': "url('/img/icons/pictures/bg-picture.webp')",
        'window-white': 'linear-gradient(to right, rgb(237, 237, 229) 0%, rgb(237, 232, 205) 100%)',
        'header-window-active': 'linear-gradient(rgb(0, 88, 238) 0%, rgb(53, 147, 255) 4%, rgb(40, 142, 255) 6%, rgb(18, 125, 255) 8%, rgb(3, 111, 252) 10%, rgb(2, 98, 238) 14%, rgb(0, 87, 229) 20%, rgb(0, 84, 227) 24%, rgb(0, 85, 235) 56%, rgb(0, 91, 245) 66%, rgb(2, 106, 254) 76%, rgb(0, 98, 239) 86%, rgb(0, 82, 214) 92%, rgb(0, 64, 171) 94%, rgb(0, 48, 146) 100%)',
        'header-window-deactivated': 'linear-gradient(rgb(118, 151, 231) 0%, rgb(126, 158, 227) 3%, rgb(148, 175, 232) 6%, rgb(151, 180, 233) 8%, rgb(130, 165, 228) 14%, rgb(124, 159, 226) 17%, rgb(121, 150, 222) 25%, rgb(123, 153, 225) 56%, rgb(130, 169, 233) 81%, rgb(128, 165, 231) 89%, rgb(123, 150, 225) 94%, rgb(122, 147, 223) 97%, rgb(171, 186, 227) 100%)',
        'window-menu-card': 'linear-gradient(to right, rgba(180, 200, 251, 0.87) 0%, rgba(164, 185, 251, 0.87) 50%, rgba(180, 200, 251, 0.87) 100%)',
        'window-menu-card-header': 'linear-gradient(to right, rgb(240, 240, 255) 0px, rgb(240, 240, 255) 30%, rgb(168, 188, 255) 100%)',
        'window-menu-card-header-active': 'linear-gradient(90deg, rgba(0,73,181,1) 0%, rgba(41,93,205,1) 100%);',
        'window-side-menu': 'linear-gradient(rgb(116, 138, 255) 0%, rgb(64, 87, 211) 100%);',
        'button-submit': 'linear-gradient(180deg,#fff,#ecebe5 86%,#d8d0c4)',
        'button-clicked': 'linear-gradient(180deg,#cdcac3,#e3e3db 8%,#e5e5de 94%,#f2f2f1)',
        'player': 'linear-gradient(180deg, rgba(253,253,253,1) 0%, rgba(152,175,214,0.75) 45%, rgba(152,175,214,0.75) 55%, rgba(209,231,255,1) 100%)',
      }),
      backgroundSize: {
        '16': '4rem',
        '32': '8rem',
      },
      backgroundPosition: {
        'bottom-right-picture-menu': 'right -1px bottom -4px',
      },
      colors: {
        'dropdown': '#1660E8',
        'window-blue-active': '#0831D9',
        'window-blue-deactivated': '#6582F5',
        'pellet-blue-active': '#1E52B7',
        'pellet-blue-deactivated': '#3C81F3',
        'twilight-blue': '#0C327D',
        'heroic-blue': '#1C68FF',
        'input-blue': '#7f9db9',
        'light-yellow': '#ffffe1',
        'light-blue': '#ced8ef',
        'silver': '#c0c0c0',
        'solitude-blue': '#eff3ff',
        'pictures-blue': '#eef2fb',
        'moon-mist': '#d1cfbe',
        'focus-blue': '#0B61FF',
        'eggshell': '#EDEAD5',
        gray: {
          128: '#808080',
          192: '#C0C0C0',
          245: '#F5F5F5',
        },
        'red': '#FF0000',
      },
      boxShadow: {
        'pellet-footer-active': 'rgba(0, 0, 0, 0.2) 0px 0px 1px 1px inset, rgba(0, 0, 0, 0.7) 1px 0px 1px inset',
        'pellet-footer-deactivated': 'rgba(0, 0, 0, 0.3) -1px 0px inset, rgba(255, 255, 255, 0.2) 1px 1px 1px inset',
        'button-submit-hover': 'inset -1px 1px #fff0cf, inset 1px 2px #fdd889, inset -2px 2px #fbc761, inset 2px -2px #e5a01a;',
        'header-tools': 'rgba(0, 0, 0, 0.1) 0px -1px 1px inset;',
      },
      fontSize: {
        'xs': '0.7rem',
        'xxs': '0.65rem',
        'header-window': '0.85rem',
        'xs-mobile': '0.5rem',
        'xxs-mobile': '0.45rem',
      },
      padding: {
        '0.75': '0.20rem',
      },
      width: {
        '12.125': '12.125rem',
      },
      height: {
        'px': '1px',
        '9/12': '75%',
        '3/12': '25%',
      },
      zIndex: {
        'max': '999999',
        'fmax': '99999999',
      },
      cursor: {
        'default': 'url(/img/cursors/default-cursor.cur), auto',
        'pointer': 'url(/img/cursors/pointer-cursor.cur), auto',
        'wait': 'url(/img/cursors/wait-cursor.cur), auto',
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
}
