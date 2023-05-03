import { type Knex } from 'knex'

export async function up (knex: Knex): Promise<void> {
  await knex.schema
    .createTable('User', function (table) {
      table.increments('id')
      table.string('name', 255).notNullable()
      table.string('email', 255).notNullable()
      table.string('password', 50).notNullable()
      table.string('login', 25).notNullable()
      table.timestamps(false, true)
    })
}

export async function down (knex: Knex): Promise<void> {
  await knex.schema
    .dropTable('User')
}
