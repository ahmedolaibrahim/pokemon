require('dotenv').config();

module.exports = {
  server: {
    port: process.env.PORT || 7500
  },
  whitelist: process.env.whitelist
}