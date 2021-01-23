const AttemptDate = require("../models").AttemptDate;
const dateFormat = require("dateformat");

// Util to add days until next attempt
Date.prototype.addDays = function (days) {
  const date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

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

// Invoked with the addition of a new problem
// Two dates for new problems:
//  1. The result of the user's first attempt, which they indicate as they submit the form
//  2. The next attempt date, which will be 2 days in advance if failed, 5 if succeeded
createPendingAttemptDate = (problemId, prevStatus) => {
  const now = new Date();
  const daysTilNext = prevStatus === "success" ? 5 : 2;
  const next = now.addDays(daysTilNext);

  return AttemptDate.create({
    dateFormatted: dateFormat(next, "shortDate"),
    status: "pending",
    problemId: problemId,
    createdAt: next,
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
  createPendingAttemptDate,
};
