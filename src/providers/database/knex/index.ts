import knex from 'knex'

const instance = knex({
  client: 'pg',
  connection: {
    database: process.env.DB_DATABASE,
    port: Number(process.env.PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST
  }
})

export default instance
