import { gql } from "@apollo/client";

export const PROBLEMS = () => {
  return gql`
    query GetProblems {
      name
      url
      difficulty
      leetcodeId
    }
  `;
};
