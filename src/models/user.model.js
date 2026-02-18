const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "This username is already exists"],
    required: [true, "Username is require"],
  },
  email: {
    type: String,
    unique: [true, "This email is already exists"],
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  bio: String,
  profileImage: {
    type: String,
    default: "https://ik.imagekit.io/es7y6a8to/DefaultProfileImage2.webp",
  },
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
