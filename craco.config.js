/* eslint-disable */
const tailwindcss = require("tailwindcss");

module.exports = {
  style: {
    postcssOptions: {
      plugins: [tailwindcss('./tailwind.config.js'), require('autoprefixer')]
    }
  }
};
