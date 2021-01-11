const Problem = require("../models").Problem;

const createProblem = (name, url, difficulty, leetcodeId, userId) => {
  return Problem.create({
    name,
    url,
    difficulty,
    leetcodeId,
    userId,
  })
    .then((res) => res.get({ plain: true }))
    .catch((err) => {
      throw new Error(err.message);
    });
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
