/**
 * Responsible for creating, reading, updating, deleting user info
 *
 */

const User = require("../models").User;

const createUser = (req, res) => {
  const { firstName, lastName } = req.body;
  return User.create({
    firstName,
    lastName,
  })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};
