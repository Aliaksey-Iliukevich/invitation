const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

/** @type {import('postcss').PostCssOptions} */
module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
  ],
}