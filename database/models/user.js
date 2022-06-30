const mongoose = require("mongoose");
const uuid = require("uuid");

const UserSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true, default: uuid.v4 },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
