
const { v4 } = require("uuid");

// knex configuration
const knexConfig = require("../knexfile");
const knex = require("knex");
const db = knex(knexConfig);
//////////////////////////////////


module.exports.fetchId = async (req, res) => {
    try {
      const foundRow = await db("tenant")
        .join("tenant_rent", "tenant.id", "tenant_rent.tenant_id")
        .where({ "tenant.id": req.params.tenantid })
        .select(
          "tenant.id",
          "tenant.tenant_name",
          "tenant_rent.amount"
        )
        .first();
      if (foundRow) {
        res.json(foundRow);
      } else {
        res
          .status(404)
          .json({ error: `tenant id: {${req.params.tenantid}} not found` });
      }
    } catch (error) {
      res.status(500).json({ error: "cannot fetch the selected tenant" });
    }
  };


// SELECT tenant.tenant_name,tenant_rent.amount
// FROM property_management.tenant 
// JOIN property_management.tenant_rent ON tenant.id=tenant_rent.tenant_id;