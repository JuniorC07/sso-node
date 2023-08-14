import { EmailValidatorProvider } from './validator/index'

const validator = {
  isEmail: jest.fn()
}

describe('EmailValidator Adapter', () => {
  it('Should return false if validator returns false', () => {
    validator.isEmail.mockReturnValueOnce(false) // Mocking for this specific it

    const sut = new EmailValidatorProvider()
    const isValid = sut.isValid('invalid-email')

    expect(isValid).toBe(false)
  })

  it('Should return true if validator returns true', () => {
    validator.isEmail.mockReturnValueOnce(true) // Mocking for this specific it

    const sut = new EmailValidatorProvider()
    const isValid = sut.isValid('valid_email@mail.com')

    expect(isValid).toBe(true)
  })
})
