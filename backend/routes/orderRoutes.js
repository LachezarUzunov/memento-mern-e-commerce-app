const express = require("express");
const router = express.Router();
const {
  addOrderItems,
  getOrderById,
} = require("../controllers/orderController");
const protect = require("../middleware/authmiddleware");

router.post("/", protect, addOrderItems);
router.get("/:id", protect, getOrderById);

module.exports = router;
