export default class apiError extends Error {
  constructor(message, status) {
    super();

    Error.captureStackTrace(this, this.constructor);
    
    this.type = "API Error";
    
    this.message = message || 
        'Oops, an API error occured. Please try again.';
    
    this.status = 503;
  }
}