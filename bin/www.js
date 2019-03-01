#!/usr/bin/env node

/**
 * Module dependencies.
 */

import app from '../app/app';

const PORT = 9080;

app.listen(PORT, (req, res) => {
  console.log(`app is now listening on PORT:${PORT}`);
});