import { type IEmailValidatorProvider } from '../IEmailValidator'

import validator from 'validator'

export class EmailValidatorProvider implements IEmailValidatorProvider {
  isValid (email: string): boolean {
    return validator.isEmail(email)
  }
}
