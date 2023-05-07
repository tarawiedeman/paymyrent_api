/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('suite_rent').del();
  await knex('suite_rent').insert([
    {
      id: 1,
      suite_id: 10,
      amount:"$1600"
    },
    {
        id: 2,
        suite_id: 11,
        amount:"$2200"
      },
      {
        id: 3,
        suite_id: 12,
        amount:"$1400"
      },
      {
        id: 4,
        suite_id: 13,
        amount:"$1500"
      },
      {
        id: 5,
        suite_id: 14,
        amount:"$2300"
      }
    
  ]);
};