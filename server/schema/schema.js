const graphql = require("graphql");
const _ = require("lodash");

// controllers
const { retrieveUser, createUser } = require("../controllers").user;
const { retrieveProblems, createProblem } = require("../controllers").problem;
const { createAttemptDate } = require("../controllers").attemptDate;

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    problems: {
      type: new GraphQLList(ProblemType),
      args: { userId: { type: GraphQLInt } },
      resolve: (parent, args) => {
        return retrieveProblems(parent.id);
      },
    },
  }),
});

const ProblemType = new GraphQLObjectType({
  name: "Problem",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    url: { type: GraphQLString },
    difficulty: { type: GraphQLString },
    leetcodeId: { type: GraphQLID },
    userId: { type: GraphQLInt },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLInt } },
      resolve: (parent, args) => {
        return retrieveUser(args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
