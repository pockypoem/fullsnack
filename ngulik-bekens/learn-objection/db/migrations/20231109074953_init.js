/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// TODO: apply changes
exports.up = function(knex) {
  return knex.schema.createTable('channel', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.timestamps(true, true); // createdAt and availableAt
  })
  .createTable('user', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.string('email').notNullable().unique();
    table.integer('channelId').references('id').inTable('channel'); //Foreginkey
    table.timestamps(true, true);
  })
  .createTable('video', (table) => {
    table.increments();
    table.string('title').notNullable();
    table.integer('channelId').notNullable().references('id').inTable('channel');
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// TODO: rollback the changes
exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('video')
  .dropTableIfExists('user')
  .dropTableIfExists('channel')
};
