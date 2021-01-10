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
    problems(parent, args) {
      return retrieveProblems(args.userId);
    },
  },
  Mutation: {
    addUser(parent, args) {
      return createUser(args.firstName, args.lastName);
    },
    // add problem, then add first date
    addProblem(parent, args) {
      createProblem(
        args.name,
        args.url,
        args.difficulty,
        args.leetcodeId,
        args.userId
      ).then(({ id }) => createAttemptDate(id));
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
