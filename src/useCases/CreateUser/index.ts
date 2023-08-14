import { BcryptProvider } from '@/providers/crypto/bcrypt'
import { KnexUserRepository } from '@/repositories/UserRepository/knex'
import { CreateUserUseCase } from './UseCase'
import { CreateUserController } from './Controller'
import { EmailValidatorProvider } from '@/providers/emailValidator/validator'

const knexUsersRepository = new KnexUserRepository()
const cryptoProvider = new BcryptProvider()
const emailValidatorProvider = new EmailValidatorProvider()

const createUserUseCase = new CreateUserUseCase(knexUsersRepository, cryptoProvider, emailValidatorProvider)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }
