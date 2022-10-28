const express = require("express");
const router = express.Router();
const addOrderItems = require("../controllers/orderController");
const protect = require("../middleware/authmiddleware");

router.post("/", protect, addOrderItems);

module.exports = router;
