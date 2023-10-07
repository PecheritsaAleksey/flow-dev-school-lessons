const { Router } = require("express");
const { getAllUsers, registerUser, loginUser, getMe } = require("./controller");
const { protected } = require("../../middlewares/auth");

const router = Router();

router.get("/", getAllUsers);

router.get("/me", protected, getMe);

router.post("/", registerUser);

router.post("/login", loginUser);

module.exports = router;
