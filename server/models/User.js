const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { collection: "Users" }); // Ensure it uses "Users" collection

const User = mongoose.model("Mind", userSchema);
module.exports = User;