const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type AttemptDate {
    id: ID
    dateFormatted: String!
    solved: Boolean!
    problemId: ID!
    createdAt: String
  }

  type Problem {
    id: ID
    name: String!
    url: String!
    difficulty: String
    leetcodeId: ID
    userId: ID
    attemptDates: [AttemptDate]
  }

  type User {
    id: ID
    firstName: String!
    lastName: String
    problems: [Problem]
  }

  type Query {
    user(id: ID): User
  }
`;

module.exports = {
  typeDefs,
};
