export interface IEmailValidatorProvider {
  isValid: (string: string) => boolean
}
