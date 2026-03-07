const { Schema, model } = require("mongoose");

const menteePostSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const MenteePost = model("MenteePost", menteePostSchema);

module.exports = MenteePost;
