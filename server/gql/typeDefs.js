const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Date

  type AttemptDate {
    id: ID
    dateFormatted: String!
    solved: Boolean!
    problemId: ID!
    createdAt: Date
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
    problems(userId: ID): [Problem]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String): User
    addProblem(
      name: String!
      url: String!
      difficulty: String
      leetcodeId: ID
      userId: ID!
      status: String!
    ): Problem
    addAttemptDate(problemId: ID!): AttemptDate
  }
`;

module.exports = {
  typeDefs,
};
