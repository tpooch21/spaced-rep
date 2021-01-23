// controllers
const { retrieveUser, createUser } = require("../controllers").user;
const { retrieveProblems, createProblem } = require("../controllers").problem;
const {
  retrieveAttemptDates,
  createAttemptDate,
  createPendingAttemptDate,
  updateAttemptDate,
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
      return createProblem(
        args.name,
        args.url,
        args.difficulty,
        args.leetcodeId,
        args.userId
      )
        .then(async (res) => {
          await createAttemptDate(res.id, args.status);
          await createPendingAttemptDate(res.id, args.status);
          return res;
        })
        .catch((err) => {
          throw new Error("Could not add problem to database");
        });
    },
    registerProblemAttempt(parent, args) {
      return updateAttemptDate(args.id, args.status)
        .then((_) => createPendingAttemptDate(args.problemId, args.status))
        .then((res) => {
          return res;
        })
        .catch((err) => {
          throw new Error("Failed to register new problem attempt");
        });
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
