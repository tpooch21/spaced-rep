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
    async addProblem(parent, args) {
      const problem = await createProblem(
        args.name,
        args.url,
        args.difficulty,
        args.leetcodeId,
        args.userId
      );
      await createAttemptDate(problem.id);
      return problem;
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
