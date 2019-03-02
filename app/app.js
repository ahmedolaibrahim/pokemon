
/***
 * import App dependencies
 */

import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import routes from '../app/routes';
import config from '../config/keys';

const app = express();

const corsOptions = {
  origin: function (origin, callback) {
  
    if (config.whitelist.indexOf(origin) !== -1 || ! origin) {
      callback(null, true)
    } else {
      callback(new Error('Error, Permission denied'))
    }
  },
  credentials: true
}

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000 // limit each IP to 100 requests per windowMs
});



/**
 * Module middleware
 */

app.use(cors(corsOptions));
app.use(limiter);
app.use(routes);


//export app module
module.exports = app;