import { gql } from "@apollo/client";

export const GET_PROBLEMS = gql`
  query($userId: ID!) {
    problems(userId: $userId) {
      name
      url
      difficulty
      leetcodeId
      attemptDates {
        dateFormatted
        solved
        createdAt
      }
    }
  }
`;

export const ADD_PROBLEM = gql`
  mutation(
    $name: String!
    $url: String!
    $difficulty: String
    $leetcodeId: ID
    $userId: ID!
  ) {
    addProblem(
      name: $name
      url: $url
      difficulty: $difficulty
      leetcodeId: $leetcodeId
      userId: $userId
    ) {
      id
      name
      url
      difficulty
      leetcodeId
    }
  }
`;
