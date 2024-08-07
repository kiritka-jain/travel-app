class NotFoundError extends Error {
    constructor(message) {
      super(message);  // Call the parent class constructor
      this.name = "NotFoundError";  // Set the error name
      this.statusCode = 404;  // Set a custom property for the status code
    }
  }
  
  class ServerError extends Error {
    constructor(message) {
      super(message);
      this.name = "ServerError";
      this.statusCode = 500;
    }
  }
  
  class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = 'ValidationError';
      this.statusCode = 400;
    }
  }
  
  module.exports = { NotFoundError, ServerError, ValidationError };
  