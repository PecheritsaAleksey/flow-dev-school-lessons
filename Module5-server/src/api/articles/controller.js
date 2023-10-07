const articleService = require("../../service/articleService");

module.exports = {
  getAllArticles: async (req, res, next) => {
    try {
      const articles = await articleService.getAllArticles();
      res.send(articles);
    } catch (error) {
      next(error);
    }
  },
  getArticle: async (req, res, next) => {
    try {
      const articleId = req.params.id;
      const article = await articleService.findArticle(articleId);
      res.send(article);
    } catch (error) {
      next(error);
    }
  },

  getMyArticles: async (req, res, next) => {
    try {
      const user = req.user;
      const articles = await articleService.getMyArticles(user._id);
      res.send(articles);
    } catch (error) {
      next(error);
    }
  },

  createNewArticle: async (req, res, next) => {
    try {
      const user = req.user;
      const data = { ...req.body, user: user._id };

      const article = await articleService.createNewArticle(data);
      res.send(article);
    } catch (error) {
      next(error);
    }
  },
  updateArticle: async (req, res, next) => {
    try {
      const articleId = req.params.id;
      const user = req.user;
      const data = req.body;
      const updatedArticle = await articleService.updateArticle(
        articleId,
        data,
        user._id
      );
      res.send(updatedArticle);
    } catch (error) {
      next(error);
    }
  },
  removeArticle: async (req, res, next) => {
    try {
      const articleId = req.params.id;
      const user = req.user;
      await articleService.removeArticle(articleId, user._id);
      res.send("Article deleted!");
    } catch (error) {
      next(error);
    }
  },
  removeArticleForce: async (req, res, next) => {
    try {
      const articleId = req.params.id;
      const user = req.user;
      await articleService.removeArticleForce(articleId, user._id);
      res.send("Article deleted!");
    } catch (error) {
      next(error);
    }
  },
};
