// next.config.js
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');

module.exports = withCSS(
  withFonts({
    serverRuntimeConfig: {
      API_URL: 'process.env.API_URL'
    }
  }),
);
