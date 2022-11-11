const express = require("express");
const router = express.Router();
const {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders
} = require("../controllers/orderController");
const protect = require("../middleware/authmiddleware");

router.post("/", protect, addOrderItems);
router.get('/myorders', protect, getMyOrders);
router.get("/:id", protect, getOrderById);
router.put("/:id/pay", protect, updateOrderToPaid);

module.exports = router;
