/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('tenant_rent').del();
  await knex('tenant_rent').insert( [
    {
      id: 1,
      tenant_id: 01,
      suite_rent_id:10,
      amount:"$800"
    },
    {
        id: 2,
        tenant_id: 02,
        suite_rent_id:10,
        amount:"$800"
      },
      {
        id: 3,
      tenant_id: 03,
      suite_rent_id: 11,
      amount:"$2200"
      },
      {
        id: 4,
        tenant_id: 04,
        suite_rent_id:12,
        amount:"$700"
      },
      {
        id: 5,
      tenant_id: 05,
      suite_rent_id:12,
      amount:"$700"
      },
      {
        id: 6,
      tenant_id: 06,
      suite_rent_id:13,
      amount:"$1500"
      },
      {
        id: 7,
      tenant_id: 07,
      suite_rent_id:14,
      amount:"$2300"
      }
     
    
  ]);
};