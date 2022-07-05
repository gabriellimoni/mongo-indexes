const mongoose = require("mongoose");

const availablePaymentMethods = ["cash", "card", "paypal"];

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, required: true },
    purchasedAt: { type: Date, required: true, index: true },
    totalValueInCents: { type: Number, required: true },
    paymentMethod: {
      type: String,
      enum: availablePaymentMethods,
      required: true,
    },
  },
  { timestamps: true }
);

OrderSchema.index({
  userId: 1,
  paymentMethod: 1,
});

const OrderModel = mongoose.model("Order", OrderSchema);
OrderModel.availablePaymentMethods = availablePaymentMethods;
module.exports = OrderModel;
