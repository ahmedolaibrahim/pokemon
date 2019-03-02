require('dotenv').config();

module.exports = {
  server: {
    port: process.env.PORT || 9080
  },
  whitelist: process.env.whitelist
}