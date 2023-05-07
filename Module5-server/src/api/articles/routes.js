const { Router } = require("express");
const { getAllArticles, createNewArticle } = require("./controller");

const router = Router();

router.get("/", getAllArticles);

router.post("/", createNewArticle);

module.exports = router;
