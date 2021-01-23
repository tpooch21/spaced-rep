const AttemptDate = require("../models").AttemptDate;
const dateFormat = require("dateformat");

const createAttemptDate = (problemId, status) => {
  const now = new Date();
  return AttemptDate.create({
    dateFormatted: dateFormat(now, "shortDate"),
    status: status,
    problemId: problemId,
  })
    .then((res) => res)
    .catch((err) => console.error(err));
};

const retrieveAttemptDates = (problemId) => {
  return AttemptDate.findAll({
    where: {
      problemId: problemId,
    },
    raw: true,
  })
    .then((res) => res)
    .catch((err) => console.error(err));
};

module.exports = {
  createAttemptDate,
  retrieveAttemptDates,
};
