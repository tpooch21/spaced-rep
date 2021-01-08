import { gql } from "@apollo/client";

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
