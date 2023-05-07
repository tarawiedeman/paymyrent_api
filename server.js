
require('dotenv').config();
const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig);


// Create Express app and also allow for app PORT to be optionally specified by an environment variable
const express = require('express');
const cors = require('cors');
const app = express();
const {PORT} = process.env;

app.use(cors());
app.use(express.json());

const paymentsRoute = require("./routes/payments.js");
const tenantsRoute = require("./routes/tenants.js");

app.use("/api/payments", paymentsRoute);
app.use("/api/tenants", tenantsRoute);

  app.listen(PORT, () => {
    console.log(`running at http://localhost:${PORT}`);
  });
