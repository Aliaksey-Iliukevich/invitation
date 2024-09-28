/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/index.html'
  ],
  theme: {
    extend: {
      colors: {
        textColor: `#364E71`,
        backgroundColor: '#EFF0F2',
        timingBg: '#7890B6B2',
        timingHeader: '#F1F7FF'
      }, 
      fontFamily: {
        headers: ['"Viaoda Libre"', 'serif'],
        text: ['"Montserrat"', 'sans-serif']
      }
    },
  },
  plugins: [],
}

