import { type IUsersRepository } from '@/repositories/UserRepository/IUserRepository'
import { type ICreateUserRequestDTO } from './DataTranferObject'
import { User } from '@/entities/User'
import { type ICryptoProvider } from '@/providers/crypto/ICrypto'
import { BadRequestError } from '@/error'
import missingParamValidator from '@/utils/missingParam'
import { type IEmailValidatorProvider } from '@/providers/emailValidator/IEmailValidator'

export class CreateUserUseCase {
  constructor (
    private readonly usersRepository: IUsersRepository,
    private readonly cryptoProvider: ICryptoProvider,
    private readonly emailValidator: IEmailValidatorProvider
  ) {}

  async handle (data: ICreateUserRequestDTO): Promise<void> {
    missingParamValidator(data, ['email', 'login', 'name', 'password'])
    if (!this.emailValidator.isValid(data.email)) {
      throw new BadRequestError({ message: 'Invalid email' })
    }
    const emailAlreadyExists = await this.usersRepository.findUserByEmail(data.email)
    const LoginAlreadyExists = await this.usersRepository.findUserByLogin(data.login)
    if (emailAlreadyExists ?? LoginAlreadyExists) {
      throw new BadRequestError({ message: 'User already exists' })
    }
    const hashedPassword = await this.cryptoProvider.hash(data.password)
    const currentDate = new Date()
    const user = new User({ ...data, password: hashedPassword, created_at: currentDate, updated_at: currentDate })
    await this.usersRepository.create(user)
  }
}
