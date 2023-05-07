module.exports = {
  getAllUsers: (req, res) => {
    res.send("All users from controller!");
  },
  createNewUser: (req, res) => {
    res.send("Create user from controller!");
  },
};
