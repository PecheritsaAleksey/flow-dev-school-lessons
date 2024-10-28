const { Router } = require("express");
const {
  getAllUsers,
  registerUser,
  loginUser,
  getMe,
  updateUser,
} = require("./controller");
const { protected } = require("../../middlewares/auth");

const router = Router();

router.get("/", getAllUsers);

router.get("/me", protected, getMe);

router.post("/", registerUser);

router.post("/login", loginUser);

router.put("/", protected, updateUser);

module.exports = router;
