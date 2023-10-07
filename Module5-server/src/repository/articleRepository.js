const { Article } = require("../database/models");

module.exports = {
  createArticle: async (article) => {
    const newArticle = new Article(article);
    const result = await newArticle.save();
    return result;
  },

  findAllArticles: async () => {
    const articles = await Article.find({ isDeleted: { $ne: true } });
    return articles;
  },

  findArticle: async (articleId) => {
    const article = await Article.findOne({
      _id: articleId,
      isDeleted: { $ne: true },
    });
    return article;
  },

  findUsersArticles: async (userId) => {
    const articles = await Article.find({
      user: userId,
      isDeleted: { $ne: true },
    });
    return articles;
  },

  findUsersArticle: async (articleId, userId) => {
    const article = await Article.findOne({
      _id: articleId,
      user: userId,
      isDeleted: { $ne: true },
    });
    return article;
  },

  updateArticle: async (articleId, data) => {
    const updatedArticle = await Article.findByIdAndUpdate(articleId, data, {
      new: true,
    });

    return updatedArticle;
  },

  removeArticle: async (articleId) => {
    await Article.findByIdAndUpdate(articleId, { isDeleted: true });
  },

  removeArticleForce: async (articleId) => {
    await Article.findByIdAndRemove(articleId);
  },
};
