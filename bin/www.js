#!/usr/bin/env node

/**
 * Module dependencies.
 */

import app from '../app/app';
import config from '../config/keys';

const PORT = config.server.port;

app.listen(PORT, () => {
  console.log(`app is now listening on PORT:${PORT}`);
});