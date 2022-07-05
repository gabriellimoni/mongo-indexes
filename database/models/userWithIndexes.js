const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, index: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

UserSchema.index({
  name: "text",
  email: "text",
});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
