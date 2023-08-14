import { type User } from '@/entities/User'

export interface IUsersRepository {
  findUserByLogin: (login: string) => Promise<User | null>
  findUserByEmail: (email: string) => Promise<User | null>
  create: (user: User) => Promise<void>
}
