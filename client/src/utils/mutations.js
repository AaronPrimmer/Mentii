import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      user {
        email
        firstname
        username
        title
        status
        skills
        token
      }
    }
  }
`;

export const LOGOUT_USER = gql`
  mutation Logout($username: String!) {
    logout(username: $username)
  }
`;

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
