import { gql } from "@apollo/client";

export const GET_USER_INFO = gql`
  query($userId: ID!) {
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

export const ADD_USER = gql`
  mutation($firstName: String!, $lastName: String!) {
    addUser(firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`;
