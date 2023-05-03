import { type Knex } from 'knex'

export async function up (knex: Knex): Promise<void> {
  await knex.schema
    .createTable('ProfileRole', function (table) {
      table.increments('id')
      table.integer('idProfile').references('id').inTable('Profile').notNullable()
      table.integer('idRole', 255).references('id').inTable('Role').notNullable()
      table.timestamps(false, true)
    })
}

export async function down (knex: Knex): Promise<void> {
  await knex.schema
    .dropTable('ProfileRole')
}
