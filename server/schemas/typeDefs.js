const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    skills: [String]
    title: String
    menteePosts: [MenteePost]!
    mentorPosts: [MentorPost]!
    status: String
  }
    
  type MenteePost {
    _id: ID
    title: String
    content: String
    author: User
  }

  type MentorPost {
    _id: ID
    title: String
    content: String
    author: User
  }

  type Query {
    users: [User]
    user(username: String!): User
  }
`;

module.exports = typeDefs;
