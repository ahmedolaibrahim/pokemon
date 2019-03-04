"use strict"
module.exports = {
  apps : [{
    name: "app",
    script: "./bin/www.js",
    exec_interpreter : "babel-node",
    exec_mode        : "fork",
    instances: "1"
  }],
  env: {
    NODE_ENV: "development",
  },
  env_production: {
    NODE_ENV: "production",
  }
}