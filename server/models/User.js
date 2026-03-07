const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim: true,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must match an email address!"],
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    skills: {
      type: [String],
      trim: true,
    },
    title: {
      type: String,
      trim: true,
    },
    menteePosts: [
      {
        type: Schema.Types.ObjectId,
        ref: "MenteePost",
      },
    ],
    mentorPosts: [
      {
        type: Schema.Types.ObjectId,
        ref: "MentorPost",
      },
    ],
  },
  {
    timestamps: true,
    toJSON: { virtuals: false },
    id: false,
  },
);

const User = model("User", userSchema);

module.exports = User;
