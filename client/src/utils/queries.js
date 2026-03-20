import { gql } from "@apollo/client";

export const QUERY_POSTS = gql`
  query MentorPosts {
    mentorPosts {
      author {
        username
        skills
        status
      }
      content
      title
    }
  }
`;
