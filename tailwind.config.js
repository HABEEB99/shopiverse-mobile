/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        light: '#FEFCFB',
        dark: '#0A1128',
        btn: '#FFA630',
        icon: '#72E1D1',
        modal: '#686963',
      },
    },
  },
  plugins: [],
};
