const { Router } = require("express");
const {
  getAllArticles,
  createNewArticle,
  getArticle,
  updateArticle,
  removeArticle,
  removeArticleForce,
  getMyArticles,
} = require("./controller");

const { protected } = require("../../middlewares/auth");

const router = Router();

router.get("/", getAllArticles);

router.get("/my", protected, getMyArticles);

router.get("/:id", getArticle);

router.post("/", protected, createNewArticle);

router.put("/:id", protected, updateArticle);

router.delete("/:id", protected, removeArticle);

router.delete("/force/:id", protected, removeArticleForce);

module.exports = router;
