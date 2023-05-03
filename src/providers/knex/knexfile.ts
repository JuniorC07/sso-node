import type { Knex } from 'knex'
import * as dotenv from 'dotenv'

// Setup dotenv
dotenv.config({ path: '../../../.env' })

const config: Record<string, Knex.Config> = {
  development: {
    client: 'pg',
    connection: {
      database: process.env.DB_DATABASE,
      port: Number(process.env.PORT),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST
    }
  }
}

export default config
