/*
** Module Dependencies
*/
import production from './prod';
import dev from './dev';

const environment = process.env.NODE_ENV;

if (environment === 'production') {
   module.exports = production;
}

else {
  module.exports = dev;
}