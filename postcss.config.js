module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-font-magician')({
      display: 'swap',
    }),
    require('postcss-nesting'),
    require('autoprefixer'),
  ],
}
