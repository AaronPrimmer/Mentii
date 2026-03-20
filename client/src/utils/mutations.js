import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation AddUser(
    $firstname: String!
    $lastname: String!
    $username: String!
    $email: String!
    $password: String!
    $status: String!
    $skills: [String]
    $title: String
  ) {
    addUser(
      firstname: $firstname
      lastname: $lastname
      username: $username
      email: $email
      password: $password
      status: $status
      skills: $skills
      title: $title
    ) {
      user {
        _id
        firstname
        username
        skills
        status
        title
      }
    }
  }
`;
