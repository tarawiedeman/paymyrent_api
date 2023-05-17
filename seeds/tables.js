const bcrypt = require("bcryptjs");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("property").del();
  await knex("property").insert([
    {
      id: 1,
      property_name: "Fischer Homes",
    },
    {
      id: 2,
      property_name: "Appleby Apartments",
    },
    {
      id: 3,
      property_name: "Renaissance Suites",
    },
    {
      id: 4,
      property_name: "Tall Towers",
    },

    {
      id: 5,
      property_name: "Lively Living Homes",
    },
  ]);

  await knex("suite").del();
  await knex("suite").insert([
    {
      id: 10,
      property_id: 1,
      suite_name: "Unit 1",
    },
    {
      id: 11,
      property_id: 1,
      suite_name: "Unit 2",
    },
    {
      id: 12,
      property_id: 2,
      suite_name: "Upper",
    },
    {
      id: 13,
      property_id: 2,
      suite_name: "Lower",
    },
    {
      id: 14,
      property_id: 3,
      suite_name: "Suite 1",
    },
  ]);

  await knex("tenant").del();
  await knex("tenant").insert([
    {
      id: 1,
      suite_id: 10,
      tenant_name: "Sally Rogers",
      email: "sally@gmail.com",
    },
    {
      id: 2,
      suite_id: 10,
      tenant_name: "Aaron Rogers",
      email: "aaron@gmail.com",
    },
    {
      id: 3,
      suite_id: 11,
      tenant_name: "Joe Jonas",
      email: "jj@gmail.com",
    },
    {
      id: 4,
      suite_id: 12,
      tenant_name: "Ashton Kutcher",
      email: "ashton@gmail.com",
    },
    {
      id: 5,
      suite_id: 12,
      tenant_name: "Talia Romanow",
      email: "tromanow@gmail.com",
    },
    {
      id: 6,
      suite_id: 13,
      tenant_name: "Ally Duck",
      email: "aduck@gmail.com",
    },
    {
      id: 7,
      suite_id: 14,
      tenant_name: "Tony Stark",
      email: "tstark@gmail.com",
    },
  ]);
  await knex("suite_rent").del();
  await knex("suite_rent").insert([
    {
      id: 1,
      suite_id: 10,
      amount: "$1600",
    },
    {
      id: 2,
      suite_id: 11,
      amount: "$2200",
    },
    {
      id: 3,
      suite_id: 12,
      amount: "$1400",
    },
    {
      id: 4,
      suite_id: 13,
      amount: "$1500",
    },
    {
      id: 5,
      suite_id: 14,
      amount: "$2300",
    },
  ]);

  await knex("tenant_rent").del();
  await knex("tenant_rent").insert([
    {
      id: 1,
      tenant_id: 1,
      suite_rent_id: 1,
      amount: "$800",
    },
    {
      id: 2,
      tenant_id: 2,
      suite_rent_id: 1,
      amount: "$800",
    },
    {
      id: 3,
      tenant_id: 3,
      suite_rent_id: 2,
      amount: "$2200",
    },
    {
      id: 4,
      tenant_id: 4,
      suite_rent_id: 3,
      amount: "$700",
    },
    {
      id: 5,
      tenant_id: 5,
      suite_rent_id: 3,
      amount: "$700",
    },
    {
      id: 6,
      tenant_id: 6,
      suite_rent_id: 4,
      amount: "$1500",
    },
    {
      id: 7,
      tenant_id: 7,
      suite_rent_id: 5,
      amount: "$2300",
    },
  ]);

  await knex("user").del();
  await knex("user").insert([
    {
      id: 1,
      name: "Sally Rogers",
      email: "sally@gmail.com",
      password: bcrypt.hashSync("SallyRogers1"),
    },
    {
      id: 2,
      name: "Aaron Rogers",
      email: "aaron@gmail.com",
      password: bcrypt.hashSync("AaronRogers1"),
    },
    {
      id: 3,
      name: "Joe Jonas",
      email: "jj@gmail.com",
      password: bcrypt.hashSync("JoeJonas1"),
    },
    {
      id: 4,
      name: "Ashton Kutcher",
      email: "ashton@gmail.com",
      password: bcrypt.hashSync("AshtonKutcher1"),
    },
    {
      id: 5,
      name: "Talia Romanow",
      email: "tromanow@gmail.com",
      password: bcrypt.hashSync("TaliaRomanow1"),
    },
    {
      id: 6,
      name: "Ally Duck",
      email: "aduck@gmail.com",
      password: bcrypt.hashSync("AllyDuck1"),
    },
    {
      id: 7,
      name: "Tony Stark",
      email: "tstark@gmail.com",
      password: bcrypt.hashSync("TonyStark1"),
    },
  ]);
};
