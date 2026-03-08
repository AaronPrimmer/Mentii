const { User, MenteePost, MentorPost } = require("../models");

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
  },
};

module.exports = resolvers;
