class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;
    //instance.stack being accessed return a string repersenting the location in the code that Error.captureStackTrace() being called
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
