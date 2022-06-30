const mongoose = require("mongoose");
const uuid = require("uuid");

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, required: true },
    purchasedAt: { type: Date, required: true },
  },
  { timestamps: true }
);

const OrderModel = mongoose.model("Order", OrderSchema);
module.exports = OrderModel;
