/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { HttpError } from '@/error'
import { type Response, type Request } from 'express'

const errorHandler = (error: any, _req: Request, res: Response, _next: any) => {
  let statusCode = 500
  let message = 'Server Error'

  if (error instanceof HttpError) {
    statusCode = error.statusCode
    message = error.message
  }
  console.error(error)
  res.status(statusCode).json({ message })
}

export default errorHandler
