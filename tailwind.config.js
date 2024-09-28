/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/index.html'
  ],
  theme: {
    extend: {
      colors: {
        Pcolor: '#575B61',
        headersColor: `#364E71`,
        backgroundColor: '#EFF0F2',
        blueBg: '#7890B6B2',
        lightTextColor: '#F1F7FF'
      }, 
      fontFamily: {
        headers: ['"Viaoda Libre"', 'serif'],
        text: ['"Montserrat"', 'sans-serif']
      }
    },
  },
  plugins: [],
}

