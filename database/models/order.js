const mongoose = require("mongoose");

const availablePaymentMethods = ["cash", "card", "paypal"];

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, required: true },
    purchasedAt: { type: Date, required: true },
    totalValueInCents: { type: Number, required: true },
    paymentMethod: {
      type: String,
      enum: availablePaymentMethods,
      required: true,
    },
  },
  { timestamps: true }
);

const OrderModel = mongoose.model("Order", OrderSchema);
OrderModel.availablePaymentMethods = availablePaymentMethods;
module.exports = OrderModel;
