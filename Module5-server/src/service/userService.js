const userRepository = require("../repository/userRepository");

module.exports = {
  getAllUsers: async () => {
    const users = await userRepository.findAllUsers();
    return users;
  },
  findUser: async (userId) => {
    const user = await userRepository.findUser(userId);
    return user;
  },
  createNewUser: async (userData) => {
    const newUser = await userRepository.createUser(userData);
    return newUser;
  },
  updateUser: async (userId, data) => {
    const updatedUser = await userRepository.updateUser(userId, data);
    return updatedUser;
  },
  removeUser: async (userId) => {
    await userRepository.removeUser(userId);
  },
  removeUserForce: async (userId) => {
    await userRepository.removeUserForce(userId);
  },
};
