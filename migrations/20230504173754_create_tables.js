/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("property", (table) => {
      table.increments("id").primary();
      table.string("property_name").notNullable();
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .createTable("suite", (table) => {
      table.increments("id").primary();
      table.integer("property_id").unsigned().notNullable();
      table.string("suite_name", 75).notNullable();
      table.timestamp("updated_at").defaultTo(knex.fn.now());
      table
        .foreign("property_id")
        .references("id")
        .inTable("property")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })

    .createTable("tenant", (table) => {
      table.increments("id").primary();
      table.integer("suite_id").unsigned().notNullable();
      table.string("tenant_name", 20).notNullable();
      table.string("email", 50).notNullable();
      table.timestamp("updated_at").defaultTo(knex.fn.now());
      table
        .foreign("suite_id")
        .references("id")
        .inTable("suite")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })

    .createTable("suite_rent", (table) => {
      table.increments("id").primary();
      table.integer("suite_id").unsigned().notNullable();
      table.string("amount", 15).notNullable();
      table.timestamp("updated_at").defaultTo(knex.fn.now());
      table
        .foreign("suite_id")
        .references("id")
        .inTable("suite")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })

    .createTable("tenant_rent", (table) => {
      table.increments("id").primary();
      table.integer("tenant_id").unsigned().notNullable();
      table.integer("suite_rent_id").unsigned().notNullable();
      table.string("amount", 15).notNullable();
      table.timestamp("updated_at").defaultTo(knex.fn.now());
      table
        .foreign("tenant_id")
        .references("id")
        .inTable("tenant")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .foreign("suite_rent_id")
        .references("id")
        .inTable("suite_rent")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })

    .createTable("user", (table) => {
      table.increments("id").primary();
      table.string("tenant_name").notNullable();
      table.string("email").notNullable().unique();
      table.string("password").notNullable();

      table
        .foreign("tenant_name")
        .references("tenant_name")
        .inTable("tenant")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      table
        .foreign("email")
        .references("email")
        .inTable("tenant")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function (knex) {};
