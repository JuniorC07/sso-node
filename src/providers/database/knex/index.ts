import knex from 'knex'
import * as dotenv from 'dotenv'
import path = require('path')

dotenv.config({ path: path.join(__dirname, '../../../../.env') })

const instance = knex({
  client: process.env.DB_CLIENT,
  debug: process.env.DB_LOG === 'true',
  connection: {
    database: process.env.DB_DATABASE,
    port: Number(process.env.PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST
  }
})

export default instance
