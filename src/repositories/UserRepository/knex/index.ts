import { User } from '@/entities/User'
import { type IUsersRepository } from '../IUserRepository'
import db from '@/providers/database/knex'

export class KnexUserRepository implements IUsersRepository {
  async findUserByEmail (email: string): Promise<User | null> {
    const data = await db('User').select('*').first().where({ email })

    if (data) {
      const {
        id,
        name,
        email,
        login,
        password,
        created_at,
        updated_at
      } = data
      return new User({
        id,
        name,
        email,
        login,
        password,
        created_at,
        updated_at
      })
    }
    return null
  }

  async findUserByLogin (login: string): Promise<User | null> {
    const data = await db('User').select('*').first().where({ login })
    if (data) {
      const {
        id,
        name,
        email,
        login,
        password,
        created_at,
        updated_at
      } = data
      return new User({
        id,
        name,
        email,
        login,
        password,
        created_at,
        updated_at
      })
    }
    return null
  }

  async create (user: User): Promise<void> {
    await db('User').insert(user)
  }
}
