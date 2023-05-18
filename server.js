require("dotenv").config();
const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig);
const stripe = require("stripe")(
  "sk_test_51N4qDkE0c7QvL51x3eiGG12vtxD8YoGhQ2hABYWZRLmpWl7QQOnG1csPGjxjwCH84BGQbtFVyrWvdRtJq4RKzmJa00kMdGegRM"
);
const cors = require("cors");

const express = require("express");
const app = express();
app.use(express.json());
app.use(cors());

const { PORT } = process.env;

const paymentsRoute = require("./routes/payments.js");
const tenantsRoute = require("./routes/tenants.js");
const usersRoute = require("./routes/users.js");

app.use("/api/create-checkout", paymentsRoute);
app.use("/api/tenants", tenantsRoute);
app.use("/api/users", usersRoute);

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
