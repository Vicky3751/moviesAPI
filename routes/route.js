const express = require("express");
const router = express.Router();
//came from the index.js
router.use("/", require("../controllers/moviesapi"));
//routing continued to controllers
module.exports = router;
