import { type Request, type Response } from 'express'
import { type CreateUserUseCase } from './UseCase'
export class CreateUserController {
  constructor (
    private readonly createUserUseCase: CreateUserUseCase
  ) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const {
      name,
      email,
      login,
      password
    } = request.body

    await this.createUserUseCase.handle({
      name,
      email,
      login,
      password
    })
    return response.status(201).json('User Created')
  }
}
