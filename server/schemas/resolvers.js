const { User, MenteePost, MentorPost } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("menteePosts").populate("mentorPosts");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .populate("menteePosts")
        .populate("mentorPosts");
    },
    userByStatus: async (parent, { status }) => {
      return User.find({ status })
        .populate("menteePosts")
        .populate("mentorPosts");
    },
    menteePosts: async () => {
      return MenteePost.find().populate("author");
    },
    mentorPosts: async () => {
      return MentorPost.find().populate("author");
    },
  },
  Mutation: {
    addUser: async (
      parent,
      { firstname, lastname, username, email, password, status, skills, title },
    ) => {
      const user = await User.create({
        firstname,
        lastname,
        username,
        email,
        password,
        status,
        skills,
        title,
      });
      const token = signToken(user);
      user.token = token;
      return { token, user };
    },
  },
};

module.exports = resolvers;
