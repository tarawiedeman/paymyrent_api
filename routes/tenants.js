const router = require("express").Router();
const knexConfig = require("../knexfile");
const knex = require("knex");
const db = knex(knexConfig);
const jwt = require('jsonwebtoken');

//Back-End: API to GET tenants name and rent 
router.get("/", async (req,res) => {

      if (!req.headers.authorization) {
        return res.status(401).send("Please login");
    }

    // Parse the bearer token
    const authHeader = req.headers.authorization;
    const authToken = authHeader.split(' ')[1];
    const decoded = jwt.verify(authToken, process.env.JWT_KEY);

  

  try {
        // Respond with the appropriate user data
        const tenant = await db("tenant")
        .join("tenant_rent", "tenant.id", "tenant_rent.tenant_id")
        .where({ "tenant.email": decoded.email})
        .select(
          "tenant.id",
          "tenant.tenant_name",
          "tenant.email",
          "tenant_rent.amount"
        )
       
// SELECT tenant.id, tenant.tenant_name,tenant.email,tenant_rent.amount,property.property_name,suite.suite_name
// from tenant as tenant
// join tenant_rent as tenant_rent on tenant.id = tenant_rent.tenant_id
// join suite_rent as suite_rent on suite_rent.id = tenant_rent.suite_rent_id
// join suite as suite on suite.id = suite_rent.suite_id
// join property as property on property.id = suite.property_id
// WHERE tenant.email="jj@gmail.com"


        if (tenant.length > 0) {
          res.json(tenant);
        } else {
          res
            .status(404)
            .json({ error: `tenant email: {${req.params.tenantemail}} not found` });
          }
       }
        
    catch (error) {
            res.status(500).json({ error: "cannot fetch the selected tenant" });
          }
     
});


module.exports = router;