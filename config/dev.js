require('dotenv').config();

module.exports = {
  server: {
    port: process.env.PORT || 7500
  },
  redis:{
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
  },
  whitelist: process.env.WHITELIST
}