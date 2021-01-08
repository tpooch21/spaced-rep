// controllers
const { retrieveUser, createUser } = require("../controllers").user;
const { retrieveProblems, createProblem } = require("../controllers").problem;
const {
  retrieveAttemptDates,
  createAttemptDate,
} = require("../controllers").attemptDate;

// custom scalars
const { DateResolver } = require("graphql-scalars");

const resolvers = {
  Date: DateResolver,
  Query: {
    user(parent, args) {
      return retrieveUser(args.id);
    },
  },
  Mutation: {
    addUser(parent, args) {
      return createUser(args.firstName, args.lastName);
    },
  },
  User: {
    problems(parent, args) {
      return retrieveProblems(parent.id);
    },
  },
  Problem: {
    attemptDates(parent, args) {
      return retrieveAttemptDates(parent.id);
    },
  },
};

module.exports = { resolvers };
