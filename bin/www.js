#!/usr/bin/env node

/**
 * Module dependencies.
 */

import app from '../app/app';
import config from '../config/keys';

const PORT = config.server.port;


/**
 * Listen on provided port, on all network interfaces.
 */

app.listen(PORT, ()=> {
  console.log(`Server is listening on PORT: ${PORT}`)
});
app.on('error', onError);
app.on('listening', onListening);

app.timeout = 0;
/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
