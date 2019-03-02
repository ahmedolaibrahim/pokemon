import logger from './logger';

const errorHandler = (err, req, res, next) => {
  logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
  res.status(err.status || 500).json({msg:'Oops, an unknown server error occured',type:'error'});
  next(err);
};

module.exports = {
  errorHandler
}