const { Router } = require("express");
const { getAllUsers, registerUser } = require("./controller");

const router = Router();

router.get("/", getAllUsers);

router.post("/", registerUser);

module.exports = router;
