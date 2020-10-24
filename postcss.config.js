module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    require('precss'),
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer')
  ]
};