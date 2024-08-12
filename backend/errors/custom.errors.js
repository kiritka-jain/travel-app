class NotFoundError extends Error{
  constructor(message){
    super(message);
    this.name = "NotFoundError";
    this.statusCode = 404;

  }
}
class BadRequest extends Error{
  constructor(message){
    super(message);
    this.name = "Bad Request";
    this.statusCode = 400;

  }
}
class Unauthorised extends Error{
  constructor(message){
    super(message);
    this.name = "Unauthorised";
    this.statusCode = 401;

  }
}
class Forbidden extends Error{
  constructor(message){
    super(message);
    this.name = "Forbidden Error";
    this.statusCode = 403;

  }
}
class ServerError extends Error{
  constructor(message){
    super(message);
    this.name = "Server Error";
    this.statusCode = 500;

  }
}
class TimeOut extends Error{
  constructor(message){
    super(message);
    this.name = "Time Out Error";
    this.statusCode = 408;

  }
}
module.exports = {TimeOut,ServerError,Forbidden,Unauthorised,BadRequest,NotFoundError};
