module.exports = {
  server: {
    port: process.env.PORT || 3010
  },
  redis:{
    host: process.env.REDIS_HOST || "redis",
    port: process.env.REDIS_HOST || 6379
  },
  whitelist: process.env.WHITELIST || ['http://localhost:3010'], 
}