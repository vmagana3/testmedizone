/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        orange:'#ED7023',
        blue:'#34367F',
        blueLight:'#B5CCEA',
      }
    },
  },
  plugins: [],
}
