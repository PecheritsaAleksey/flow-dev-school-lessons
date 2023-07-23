const { Router } = require("express");
const {
  getAllArticles,
  createNewArticle,
  getArticle,
  updateArticle,
  removeArticle,
  removeArticleForce,
} = require("./controller");

const router = Router();

router.get("/", getAllArticles);

router.get("/:id", getArticle);

router.post("/", createNewArticle);

router.put("/:id", updateArticle);

router.delete("/:id", removeArticle);

router.delete("/force/:id", removeArticleForce);

module.exports = router;
