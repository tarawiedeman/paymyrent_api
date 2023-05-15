/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {


await knex('utility').del();
  await knex('utility').insert([
    {
      id: 1,
      tenant_id: 1,
      utilities_amount:"$45"
    },
    {
        id: 2,
        tenant_id: 2,
        utilities_amount:"$20"
      },
      {
        id: 3,
        tenant_id: 3,
        utilities_amount:"$40"
      },
      {
        id: 4,
        tenant_id: 4,
        utilities_amount:"$30"
      },
      {
        id: 5,
        tenant_id: 5,
        utilities_amount:"$25"
      },
     
    
    
  ]);

};