const express = require("express");
const router = express.Router();

const api = require("./api");

/* GET home page. */
router.use("/api", api);

module.exports = router;
