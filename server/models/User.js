const mongoose = require("mongoose");
const { Schema } = mongoose;

// Schema do model
const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    profileImage: String,
    bio: String,
  },
  {
    timestamps: true,
  }
);

// Criação do model
const User = mongoose.model("User", userSchema);

module.exports = User;
