// controllers
const { createUser } = require("../controllers").user;
const { createProblem } = require("../controllers").problem;
const { createAttemptDate } = require("../controllers").attemptDate;

const testUsers = [
  { firstName: "Trevor", lastName: "Puccini" },
  { firstName: "Johnny", lastName: "Depp" },
];

const testProblems = [
  {
    name: "Two Sum",
    url: "https://leetcode.com/problems/two-sum/",
    difficulty: "Easy",
    leetcodeId: 1,
    userId: 1,
  },
  {
    name: "Rotate Image",
    url: "https://leetcode.com/problems/rotate-image/",
    difficulty: "Medium",
    leetcodeId: 48,
    userId: 1,
  },
];

const testDates = [
  {
    problemId: 1,
  },
  {
    problemId: 2,
  },
];

testUsers.forEach(({ firstName, lastName }) => createUser(firstName, lastName));
testProblems.forEach(({ name, url, difficulty, leetcodeId, userId }) =>
  createProblem(name, url, difficulty, leetcodeId, userId)
);
testDates.forEach(({ problemId }) => createAttemptDate(problemId));
