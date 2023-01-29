const express = require("express");
const { getContcts } = require("../controllers/contacts");

const router = express.Router();

router.get("/contacts", getContcts);

module.exports = router;
