require("dotenv").config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: "mysql",
  connection: {
    host: process.env.JAWSDB_HOST,
    port:process.env.JAWSDB_PORT,
    user: process.env.JAWSDB_USER,
    password: process.env.JAWSDB_PASSWORD,
    database: process.env.JAWSDB_DB,
  },
};


// connection: {
//   host: "127.0.0.1",
//   user: process.env.DB_LOCAL_USER,
//   password: process.env.DB_LOCAL_PASSWORD,
//   database: process.env.DB_LOCAL_DBNAME,
// },
