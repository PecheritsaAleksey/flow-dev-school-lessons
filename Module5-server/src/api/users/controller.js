const userService = require("../../service/userService");

module.exports = {
  getAllUsers: (req, res, next) => {
    try {
      const users = userService.getAllUsers();
      res.send(users);
    } catch (error) {
      next(error);
    }
  },
  createNewUser: (req, res, next) => {
    try {
      const newUser = userService.createUser();
      res.send(newUser);
    } catch (error) {
      next(error);
    }
  },
};
