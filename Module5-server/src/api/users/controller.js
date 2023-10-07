const userService = require("../../service/userService");

module.exports = {
  getAllUsers: async (req, res, next) => {
    try {
      const users = await userService.getAllUsers();
      res.send(users);
    } catch (error) {
      next(error);
    }
  },
  getMe: async (req, res, next) => {
    try {
      const user = req.user;
      const me = await userService.findUserWithArticles(user._id);
      res.send(me);
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

  loginUser: async (req, res, next) => {
    try {
      const data = req.body;
      const user = await userService.loginUser(data);
      res.send(user);
    } catch (error) {
      next(error);
    }
  },
};
