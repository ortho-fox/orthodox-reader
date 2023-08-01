// next.config.js
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  // theme: './theme.tsx', // Path to your custom theme file
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra()
