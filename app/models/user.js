const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    admin: { type: Boolean, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
