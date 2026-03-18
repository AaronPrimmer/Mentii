const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const SALT_FACTOR = 10;

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
    status: {
      type: String,
      enum: ["mentor", "mentee", "both"],
      default: "mentee",
    },
    token: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: false },
    id: false,
  },
);

userSchema.pre("save", async function () {
  const user = this;

  if (!user.isModified("password")) {
    return;
  }

  try {
    const salt = await bcrypt.genSalt(SALT_FACTOR);

    user.password = await bcrypt.hash(user.password, salt);
  } catch (err) {
    return;
  }
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
