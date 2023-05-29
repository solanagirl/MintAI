/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkBlue': '#5c83ad',
        'paleBlue': '#abc0eb'
      },
      backgroundImage: {
        'blueTheme': "url('../public/background-1.jpg')",
        'gradient': "linear-gradient(180deg, rgba(0,219,132,1) 0%, rgba(48,133,235,1) 46%, rgba(132,37,240,1) 100%)"
      },
      boxShadow: {
        'glitch': '-8px -8px 0 #00db84, 8px 8px 0 #8425f0'
      },
      animation: {
        rainbow: 'rainbow 3s infinite ease-in-out',
        bounce: 'bounce 3s infinite ease-in-out',
        flicker: 'flicker 0.01s infinite alternate'
      },
      keyframes: {
        rainbow: {
          '0%': { 'background-color': '#abc0eb'},
          '25%': { 'background-color': '#ff8ac6'},
          '50%': { 'background-color': '#ffb442'},
          '75%': { 'background-color': '#86d938'},
          '100%': { 'background-color': '#abc0eb'},
        },
        bounce: {
          '0%': { 'margin-top': 0},
          '25%': { 'margin-top': '-1em'},
          '50%': { 'margin-top': '-1.5em'},
          '75%': { 'margin-top': '-1em'},
          '100%': { 'margin-top': 0},
        },
        flicker: {
          '0%': { 'text-shadow': '1px 0 0 #ea36af, -2px 0 0 #75fa69;'},
          '100%': { 'text-shadow': '2px 0.5px 2px #ea36af, -1px -0.5px 2px #75fa69'}
        }
      }
    },
  },
  plugins: [],
}

