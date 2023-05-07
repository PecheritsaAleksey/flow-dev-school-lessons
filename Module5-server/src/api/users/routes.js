const { Router } = require("express");
const { getAllUsers, createNewUser } = require("./controller");

const router = Router();

router.get("/", getAllUsers);

router.post("/", createNewUser);

module.exports = router;
