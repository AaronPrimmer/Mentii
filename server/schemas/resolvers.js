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
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      } else {
        const correctPw = await user.isCorrectPassword(password);
        if (!correctPw) {
          throw new AuthenticationError("Incorrect password");
        }
        const token = signToken(user);
        const updateToken = await User.findOneAndUpdate(
          { username },
          { token },
          { new: true },
        );
        return { token, user };
      }
    },
    logout: async (parent, { username }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      } else {
        user.token = null;
        await user.save();
        return true;
      }
    },
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
    createMenteePost: async (parent, { title, content, username }) => {
      const user = await User.findOne({ username: username });
      if (!user) {
        throw new AuthenticationError("No user found with this username");
      }
      const menteePost = await MenteePost.create({
        title: title,
        content: content,
        author: user._id,
      });
      user.menteePosts.push(menteePost._id);
      await user.save();
      return menteePost;
    },
    createMentorPost: async (parent, { title, content, username }) => {
      const user = await User.findOne({ username: username });
      if (!user) {
        throw new AuthenticationError("No user found with this username");
      }
      const mentorPost = await MentorPost.create({
        title: title,
        content: content,
        author: user._id,
      });
      user.mentorPosts.push(mentorPost._id);
      await user.save();
      return mentorPost;
    },
  },
};

module.exports = resolvers;
