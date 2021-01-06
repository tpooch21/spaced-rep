/**
 * Responsible for creating, reading, updating, deleting user info
 *
 */

const User = require("../models").User;

const createUser = (req, res) => {
  return User.create({
    firstName: "Trevor",
    lastName: "Puccini",
  })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};

// retrieve a user by id
const retrieveUser = (id) => {
  return User.findOne({
    where: {
      id: id,
    },
    raw: true,
  })
    .then((res) => res)
    .catch((err) => console.error(err));
};

createUser();

module.exports = {
  createUser,
  retrieveUser,
};
