/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('tenant').del();
  await knex('tenant').insert([
    {
      id: 01,
      suite_id: 10,
      tenant_name: "Sally Rogers",
      email:"sally@gmail.com",
      
    },
    {
        id: 02,
        suite_id: 10,
        tenant_name: "Aaron Rogers",
        email:"aaron@gmail.com",
      },
      {
        id: 03,
        suite_id: 11,
        tenant_name: "Joe Jonas",
        email:"jj@gmail.com",
      },
      {
        id: 04,
        suite_id: 12,
        tenant_name: "Ashton Kutcher",
        email:"ashton@gmail.com",
      },
      {
        id: 05,
        suite_id: 12,
        tenant_name: "Mr.Bean",
        email:"mrbean@gmail.com",
      },
      {
        id: 06,
        suite_id: 13,
        tenant_name: "Donald Duck",
        email:"dduck@gmail.com",
      },
      {
        id: 07,
        suite_id: 14,
        tenant_name: "Tony Stark",
        email:"tstark@gmail.com",
      },
    
  ]);
};