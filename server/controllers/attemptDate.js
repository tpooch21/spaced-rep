const AttemptDate = require("../models").AttemptDate;
const dateFormat = require("dateformat");

const createAttemptDate = () => {
  const now = new Date();
  return AttemptDate.create({
    dateFormatted: dateFormat(now, "shortDate"),
    solved: false,
    problemId: 4,
  })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};

createAttemptDate();

module.exports = {
  createAttemptDate,
};
