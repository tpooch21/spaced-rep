import { gql } from "@apollo/client";

export const GET_USER_INFO = gql`
  query($userId: Int!) {
    user(id: $userId) {
      firstName
      problems {
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
  }
`;
