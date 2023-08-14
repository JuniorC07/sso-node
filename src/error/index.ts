export interface IErrorHandler {
  message: string
  statusCode?: number
}

class HttpError extends Error {
  statusCode

  constructor ({ message, statusCode }: IErrorHandler) {
    super(message)
    this.statusCode = statusCode ?? 500
  }
}

class BadRequestError extends HttpError {
  statusCode = 400
}

class NotFoundError extends HttpError {
  statusCode = 404
}

class UnauthorizedError extends HttpError {
  statusCode = 401
}

export { HttpError, BadRequestError, NotFoundError, UnauthorizedError }
