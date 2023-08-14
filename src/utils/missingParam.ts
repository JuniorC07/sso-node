import { BadRequestError } from '@/error'

const missingParamValidator = (data: Record<string, any>, requiredFields: string[]): void => {
  for (const field of requiredFields) {
    if (!data[field]) {
      throw new BadRequestError({ message: `Missing param: ${field}` })
    }
  }
}

export default missingParamValidator
