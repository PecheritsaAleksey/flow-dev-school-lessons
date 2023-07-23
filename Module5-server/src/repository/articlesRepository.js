const { Article } = require("../database/models");

module.exports = {
  createArticle: async (article) => {
    const newArticle = new Article(article);
    const result = await newArticle.save();
    return result;
  },

  findAllArticles: async () => {
    const articles = await Article.find({});
    return articles;
  },

  findArticle: async (articleId) => {
    const article = await Article.findById(articleId);
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
