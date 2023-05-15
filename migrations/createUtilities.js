/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    
    .createTable('utility', (table) => {
      table.increments('id').primary();
      table.integer('tenant_id').unsigned().notNullable();
      table.string('utilities_amount', 75).notNullable();
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table
        .foreign('tenant_id')
        .references('id')
        .inTable('tenant')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });

};


    exports.down = function (knex) {
  
    };