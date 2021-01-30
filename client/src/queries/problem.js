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
        status
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
    $status: String!
    $userId: ID!
  ) {
    addProblem(
      name: $name
      url: $url
      difficulty: $difficulty
      leetcodeId: $leetcodeId
      status: $status
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
