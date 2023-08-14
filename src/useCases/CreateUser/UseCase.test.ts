import { CreateUserUseCase } from './UseCase'
import { type IUsersRepository } from '@/repositories/UserRepository/IUserRepository'
import { type ICreateUserRequestDTO } from './DataTranferObject'
import { type ICryptoProvider } from '@/providers/crypto/ICrypto'
import { BadRequestError } from '@/error'
import { type IEmailValidatorProvider } from '@/providers/emailValidator/IEmailValidator'

describe('CreateUserUseCase', () => {
  it('should throw BadRequestError if email param is missing', async () => {
    const usersRepositoryMock: IUsersRepository = {
      findUserByEmail: jest.fn(),
      findUserByLogin: jest.fn(),
      create: jest.fn()
    }

    const cryptoProviderMock: ICryptoProvider = {
      hash: jest.fn(),
      compare: jest.fn().mockResolvedValue(true)
    }

    const emailValidatorProvider: IEmailValidatorProvider = {
      isValid: jest.fn().mockResolvedValue(true)
    }

    const createUserUseCase = new CreateUserUseCase(usersRepositoryMock, cryptoProviderMock, emailValidatorProvider)

    const requestData: ICreateUserRequestDTO = {
      login: 'testuser',
      name: 'Test User',
      password: 'test123',
      email: ''
    }

    await expect(createUserUseCase.handle(requestData)).rejects.toThrow('Missing param: email')
  })

  it('should throw BadRequestError if name param is missing', async () => {
    const usersRepositoryMock: IUsersRepository = {
      findUserByEmail: jest.fn(),
      findUserByLogin: jest.fn(),
      create: jest.fn()
    }

    const cryptoProviderMock: ICryptoProvider = {
      hash: jest.fn(),
      compare: jest.fn().mockResolvedValue(true)
    }

    const emailValidatorProvider: IEmailValidatorProvider = {
      isValid: jest.fn().mockResolvedValue(true)
    }

    const createUserUseCase = new CreateUserUseCase(usersRepositoryMock, cryptoProviderMock, emailValidatorProvider)

    const requestData: ICreateUserRequestDTO = {
      login: 'testuser',
      name: '',
      password: 'test123',
      email: 'test@example.com'
    }

    await expect(createUserUseCase.handle(requestData)).rejects.toThrow('Missing param: name')
  })

  it('should throw BadRequestError if login param is missing', async () => {
    const usersRepositoryMock: IUsersRepository = {
      findUserByEmail: jest.fn(),
      findUserByLogin: jest.fn(),
      create: jest.fn()
    }

    const cryptoProviderMock: ICryptoProvider = {
      hash: jest.fn(),
      compare: jest.fn().mockResolvedValue(true)
    }

    const emailValidatorProvider: IEmailValidatorProvider = {
      isValid: jest.fn().mockResolvedValue(true)
    }

    const createUserUseCase = new CreateUserUseCase(usersRepositoryMock, cryptoProviderMock, emailValidatorProvider)

    const requestData: ICreateUserRequestDTO = {
      login: '',
      name: 'Test User',
      password: 'test123',
      email: 'test@example.com'
    }

    await expect(createUserUseCase.handle(requestData)).rejects.toThrow('Missing param: login')
  })

  it('should throw BadRequestError if password param is missing', async () => {
    const usersRepositoryMock: IUsersRepository = {
      findUserByEmail: jest.fn(),
      findUserByLogin: jest.fn(),
      create: jest.fn()
    }

    const cryptoProviderMock: ICryptoProvider = {
      hash: jest.fn(),
      compare: jest.fn().mockResolvedValue(true)
    }

    const emailValidatorProvider: IEmailValidatorProvider = {
      isValid: jest.fn().mockResolvedValue(true)
    }

    const createUserUseCase = new CreateUserUseCase(usersRepositoryMock, cryptoProviderMock, emailValidatorProvider)

    const requestData: ICreateUserRequestDTO = {
      login: 'testuser',
      name: 'Test User',
      password: '',
      email: 'test@example.com'
    }

    await expect(createUserUseCase.handle(requestData)).rejects.toThrow('Missing param: password')
  })

  it('should throw BadRequestError if email is not valid', async () => {
    const usersRepositoryMock: IUsersRepository = {
      findUserByEmail: jest.fn(),
      findUserByLogin: jest.fn(),
      create: jest.fn()
    }

    const cryptoProviderMock: ICryptoProvider = {
      hash: jest.fn(),
      compare: jest.fn().mockResolvedValue(true)
    }

    const emailValidatorProvider: IEmailValidatorProvider = {
      isValid: jest.fn().mockReturnValue(false)
    }

    const createUserUseCase = new CreateUserUseCase(usersRepositoryMock, cryptoProviderMock, emailValidatorProvider)

    const requestData: ICreateUserRequestDTO = {
      login: 'testuser',
      name: 'Test User',
      password: 'test',
      email: 'invalid-email'
    }

    await expect(createUserUseCase.handle(requestData)).rejects.toThrow('Invalid email')
  })

  it('should throw BadRequestError if user already exists with Email', async () => {
    const usersRepositoryMock: IUsersRepository = {
      findUserByEmail: jest.fn().mockResolvedValue(true), // Simulate existing user
      findUserByLogin: jest.fn(),
      create: jest.fn()
    }

    const cryptoProviderMock: ICryptoProvider = {
      hash: jest.fn(),
      compare: jest.fn().mockResolvedValue(true)
    }

    const emailValidatorProvider: IEmailValidatorProvider = {
      isValid: jest.fn().mockResolvedValue(true)
    }

    const createUserUseCase = new CreateUserUseCase(usersRepositoryMock, cryptoProviderMock, emailValidatorProvider)

    const requestData: ICreateUserRequestDTO = {
      email: 'test@example.com',
      login: 'testuser',
      name: 'Test User',
      password: 'test123'
    }

    await expect(createUserUseCase.handle(requestData)).rejects.toThrow(BadRequestError)
  })

  it('should throw BadRequestError if user already exists with Login', async () => {
    const usersRepositoryMock: IUsersRepository = {
      findUserByEmail: jest.fn(),
      findUserByLogin: jest.fn().mockResolvedValue(true), // Simulate existing user
      create: jest.fn()
    }

    const cryptoProviderMock: ICryptoProvider = {
      hash: jest.fn(),
      compare: jest.fn().mockResolvedValue(true)
    }

    const emailValidatorProvider: IEmailValidatorProvider = {
      isValid: jest.fn().mockResolvedValue(true)
    }

    const createUserUseCase = new CreateUserUseCase(usersRepositoryMock, cryptoProviderMock, emailValidatorProvider)

    const requestData: ICreateUserRequestDTO = {
      email: 'test@example.com',
      login: 'testuser',
      name: 'Test User',
      password: 'test123'
    }

    await expect(createUserUseCase.handle(requestData)).rejects.toThrow('User already exists')
  })

  it('should create a new user', async () => {
    const usersRepositoryMock: IUsersRepository = {
      findUserByEmail: jest.fn(),
      findUserByLogin: jest.fn(),
      create: jest.fn()
    }

    const cryptoProviderMock: ICryptoProvider = {
      hash: jest.fn().mockResolvedValue('hashedPassword'),
      compare: jest.fn().mockResolvedValue(true)
    }

    const emailValidatorProvider: IEmailValidatorProvider = {
      isValid: jest.fn().mockResolvedValue(true)
    }

    const createUserUseCase = new CreateUserUseCase(usersRepositoryMock, cryptoProviderMock, emailValidatorProvider)

    const requestData: ICreateUserRequestDTO = {
      email: 'test@example.com',
      login: 'testuser',
      name: 'Test User',
      password: 'test123'
    }

    await createUserUseCase.handle(requestData)

    expect(usersRepositoryMock.create).toHaveBeenCalledWith(
      expect.objectContaining({
        email: requestData.email,
        login: requestData.login,
        name: requestData.name,
        password: 'hashedPassword'
      })
    )
  })
})
