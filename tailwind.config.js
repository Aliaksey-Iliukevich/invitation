/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/index.html'
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',  
        'sm': '413px', 
        'md': '640px',
      },
      colors: {
        Pcolor: '#575B61',
        headersColor: `#364E71`,
        backgroundColor: '#EFF0F2',
        blueBg: '#546992',
        lightTextColor: '#F1F7FF'

      }, 
      fontFamily: {
        headers: ['"Viaoda Libre"', 'serif'],
        text: ['"Montserrat"', 'sans-serif'],
        mulish: ['"Mulish"', 'sans-serif'] , 
        ms_madi: ['"Ms Madi"', 'serif'],
        betmo: ['"Betmo"', 'serif'],
        pinyon_script: ['"Pinyon Script"', 'serif']
      }
    },
  },
  plugins: [],
}

