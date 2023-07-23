const articleService = require("../../service/articleService");

module.exports = {
  getAllArticles: async (req, res) => {
    const articles = await articleService.getAllArticles();
    res.send(articles);
  },
  getArticle: async (req, res) => {
    const articleId = req.params.id;
    const article = await articleService.findArticle(articleId);
    res.send(article);
  },
  createNewArticle: async (req, res) => {
    const user = req.user;
    const data = req.body;

    const article = await articleService.createNewArticle(user, data);
    res.send(article);
  },
  updateArticle: async (req, res) => {
    const articleId = req.params.id;
    const data = req.body;
    const updatedArticle = await articleService.updateArticle(articleId, data);
    res.send(updatedArticle);
  },
  removeArticle: async (req, res) => {
    const articleId = req.params.id;
    await articleService.removeArticle(articleId);
    res.send("Article deleted!");
  },
  removeArticleForce: async (req, res) => {
    const articleId = req.params.id;
    await articleService.removeArticleForce(articleId);
    res.send("Article deleted!");
  },
};
