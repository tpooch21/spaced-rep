const Problem = require("../models").Problem;

const createProblem = (req, res) => {
  return Problem.create({
    name: "Two Sum",
    url: "this",
    difficulty: "Easy",
    leetcodeId: 1,
    userId: 1,
  })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};

const retrieveProblems = (userId) => {
  return Problem.findAll({
    where: {
      userId: userId,
    },
    raw: true,
  })
    .then((res) => res)
    .catch((err) => console.error(err));
};

module.exports = {
  createProblem,
  retrieveProblems,
};
