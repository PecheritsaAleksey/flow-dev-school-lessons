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
  registerUser: async (req, res, next) => {
    try {
      const data = req.body;
      const newUser = await userService.createUser(data);
      res.send(newUser);
    } catch (error) {
      next(error);
    }
  },
};
