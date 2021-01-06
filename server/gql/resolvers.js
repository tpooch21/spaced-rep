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
  Query: {
    user(parent, args) {
      return retrieveUser(args.id);
    },
  },
  User: {
    problems(parent) {
      return retrieveProblems(parent.id);
    },
  },
  Problem: {
    attemptDates(parent) {
      return retrieveAttemptDates(parent.id);
    },
  },
};

module.exports = { resolvers };
