const ExistingEntityError = require("../infrastructure/errors/ExistingEntityError");
const InvalidDataError = require("../infrastructure/errors/InvalidDataError");
const userRepository = require("../repository/userRepository");
const { generateJWTToken } = require("../utils/jwtToken");

module.exports = {
  getAllUsers: async () => {
    const users = await userRepository.findAllUsers();
    return users;
  },
  findUser: async (userId) => {
    const user = await userRepository.findUser(userId);
    return user;
  },
  findUserWithArticles: async (userId) => {
    const user = await userRepository.findUserWithArticles(userId);
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

  loginUser: async (userData) => {
    const { email, password } = userData;
    const existingUser = await userRepository.findUserByEmail(email);
    if (existingUser && (await existingUser.matchPasswords(password))) {
      const jwtToken = generateJWTToken(existingUser._id);

      return {
        _id: existingUser._id,
        name: existingUser.name,
        email: existingUser.email,
        token: jwtToken,
      };
    } else {
      throw new InvalidDataError("Email or password is wrong!");
    }
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
