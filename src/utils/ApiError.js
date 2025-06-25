class ApiError extends Error {
  constructor(
    statusCode,
    messsage = "Something went wrong",
    error = [],
    statck = "",
  ) {
    super(messsage);
    ((this.statusCode = statusCode),
      (this.data = null),
      (this.message = messsage),
      (this.success = false));
    this.errors = error;
    if (statck) {
      this.stack = statck;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export {ApiError}