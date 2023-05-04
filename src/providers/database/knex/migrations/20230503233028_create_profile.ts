import { type Knex } from 'knex'

export async function up (knex: Knex): Promise<void> {
  await knex.schema
    .createTable('Profile', function (table) {
      table.increments('id')
      table.string('name', 255).notNullable()
      table.string('identifier', 255).notNullable()
      table.timestamps(false, true)
    })
}

export async function down (knex: Knex): Promise<void> {
  await knex.schema
    .dropTable('Profile')
}
