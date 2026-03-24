const typeDefs = `
  type User {
    _id: ID
    firstname: String
    lastname: String
    username: String
    email: String
    password: String
    skills: [String]
    title: String
    menteePosts: [MenteePost]!
    mentorPosts: [MentorPost]!
    status: String
    token: String
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

  type Auth {
    token: String!
    user: User!
  }

  type Query {
    users: [User]
    user(username: String!): User
    userByStatus(status: String!): [User]
    menteePosts: [MenteePost]
    mentorPosts: [MentorPost]
  }

  type Mutation {
    login (username: String!, password: String!): Auth
    logout (username: String!): Boolean
    addUser(firstname: String!, lastname: String!, username: String!, email: String!, password: String!, status: String!, skills: [String], title: String): Auth
    createMenteePost(title: String!, content: String!, username: String!): MenteePost
    createMentorPost(title: String!, content: String!, username: String!): MentorPost
    }
`;

module.exports = typeDefs;
