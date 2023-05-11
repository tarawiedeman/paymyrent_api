const router = require("express").Router();
const tenantsController = require("../controllers/tenantsController");

//Back-End: API to GET tenants name and rent 
router.get("/:tenantid", tenantsController.fetchId);


module.exports = router;