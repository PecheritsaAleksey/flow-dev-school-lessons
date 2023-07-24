const ExistingEntityError = require("../infrastructure/errors/ExistingEntityError");
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
  createUser: async (userData) => {
    const existingUser = await userRepository.findUserByEmail(userData.email);
    if (existingUser) {
      throw new ExistingEntityError("User with this email already exist");
    }

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
