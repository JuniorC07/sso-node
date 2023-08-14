import missingParamValidator from './missingParam'
import { BadRequestError } from '@/error'

describe('missingParamValidator', () => {
  it('should throw BadRequestError when a required field is missing', () => {
    const data = {
      field1: 'value1'
    }
    const requiredFields = ['field1', 'field2']

    expect(() => {
      missingParamValidator(data, requiredFields)
    }).toThrow(BadRequestError)
  })

  it('should throw BadRequestError with the correct message', () => {
    const data = {
      field1: 'value1'
    }
    const requiredFields = ['field1', 'field2']

    expect(() => {
      missingParamValidator(data, requiredFields)
    }).toThrowError(new BadRequestError({ message: 'Missing param: field2' }))
  })

  it('should not throw error when all required fields are present', () => {
    const data = {
      field1: 'value1',
      field2: 'value2'
    }
    const requiredFields = ['field1', 'field2']

    expect(() => {
      missingParamValidator(data, requiredFields)
    }).not.toThrow()
  })
})
