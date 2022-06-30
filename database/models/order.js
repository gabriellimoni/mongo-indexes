const mongoose = require("mongoose");
const uuid = require("uuid");

const OrderSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true, default: uuid.v4 },
    userId: { type: String, required: true },
    purchasedAt: { type: Date, required: true },
  },
  { timestamps: true }
);

const OrderModel = mongoose.model("Order", OrderSchema);
module.exports = OrderModel;
