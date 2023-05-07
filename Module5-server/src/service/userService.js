const NotImplementedError = require("../infrastructure/errors/NotImplementedError");

module.exports = {
  getAllUsers: () => {
    throw new NotImplementedError("Not implemented");
    return "All users from service";
  },
  createUser: () => {
    throw new NotImplementedError("Not implemented");
    return "Create user from servive";
  },
};
