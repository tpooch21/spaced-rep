const graphql = require("graphql");
const _ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

const fakeUsers = [
  {
    id: 1,
    firstName: "Trevor",
    lastName: "Puccini",
  },
  {
    id: 2,
    firstName: "Johnny",
    lastName: "Depp",
  },
];

const fakeProblems = [
  {
    id: 1,
    name: "Two Sum",
    url: "https://leetcode.com/problems/two-sum/",
    difficulty: "Easy",
    leetcodeId: 1,
    userId: 1,
  },
  {
    id: 2,
    name: "Rotate Image",
    url: "https://leetcode.com/problems/rotate-image/",
    difficulty: "Easy",
    leetcodeId: 48,
    userId: 1,
  },
];

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
        console.log(parent.id);
        return fakeProblems.filter(({ userId }) => userId === parent.id);
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
        return _.find(fakeUsers, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
