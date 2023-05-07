/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('suite').del();
  await knex('suite').insert([
    {
      id: 10,
      property_id: 1,
      suite_name:"Unit 1"
    },
    {
        id: 11,
        property_id: 1,
        suite_name:"Unit 2"
      },
      {
        id: 12,
        property_id: 2,
        suite_name:"Upper"
      },
      {
        id: 13,
        property_id: 2,
        suite_name:"Lower"
      },
      {
        id: 14,
        property_id: 3,
        suite_name:"Suite 1"
      },
     
    
    
  ]);
};