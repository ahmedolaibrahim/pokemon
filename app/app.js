
/***
 * import App dependencies
 */

import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import morgan from 'morgan';
import routes from '../app/routes';
import config from '../config/keys';

import  { errorHandler }  from './utils/middleware/error';


/***
 * module variables
 */

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
app.use(morgan('combined'));
app.use(routes);
app.use(errorHandler);


//export app module
module.exports = app;