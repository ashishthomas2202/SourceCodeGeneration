const express = require("express");
const router = express.Router();

const {
  businessQueries,
  businessSpecs,
} = require("../controllers/projectSpecification");

router.get("/business_queries", businessQueries);
router.post("/business_specs", businessSpecs);

module.exports = router;
