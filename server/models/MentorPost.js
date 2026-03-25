const { Schema, model } = require("mongoose");

const mentorPostSchema = new Schema(
  {
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
  },
  {
    timestamps: true,
  },
);

const MentorPost = model("MentorPost", mentorPostSchema);

module.exports = MentorPost;
