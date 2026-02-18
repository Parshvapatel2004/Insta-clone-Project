const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  caption: {
    type: String,
    default: "",
  },
  imgUri: {
    type: String,
    required: [true, "imgUri is required"],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: [true, "User id is required for creating post"],
  },
});

const postModel = mongoose.model("posts", postSchema);

module.exports = postModel;
