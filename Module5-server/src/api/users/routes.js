const { Router } = require("express");
const { getAllUsers, registerUser, loginUser } = require("./controller");

const router = Router();

router.get("/", getAllUsers);

router.post("/", registerUser);

router.post("/login", loginUser);

module.exports = router;
