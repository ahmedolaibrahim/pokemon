import logger from './logger';

const errorHandler = (err, req, res, next) => {
  let errorType = err.type || "Server Error";
  let errorMsg = err.status === 503 ? `${err.message}` : `Oops, an unknown server error occured`;

  logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
  res.status(err.status || 500).json({ msg: `${errorMsg}`, type: errorType });
  next(err);
};

module.exports = {
  errorHandler
}