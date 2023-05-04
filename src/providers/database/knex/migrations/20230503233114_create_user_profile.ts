import { type Knex } from 'knex'

export async function up (knex: Knex): Promise<void> {
  await knex.schema
    .createTable('UserProfile', function (table) {
      table.increments('id')
      table.integer('idUser').references('id').inTable('User').notNullable()
      table.integer('idProfile', 255).references('id').inTable('Profile').notNullable()
      table.timestamps(false, true)
    })
}

export async function down (knex: Knex): Promise<void> {
  await knex.schema
    .dropTable('UserProfile')
}
