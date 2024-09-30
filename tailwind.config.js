/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/index.html'
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',  // Небольшие экраны (например, iPhone SE)
        'sm': '413px',  // Устройства с большим размером экрана (например, старые Android)
        'md': '640px',  // Устройства средней величины
        'lg': '768px',  // Переход на tablets
        'xl': '1024px',
        '2xl': '1280px',
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

