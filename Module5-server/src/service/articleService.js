const articlesRepository = require("../repository/articleRepository");

module.exports = {
  getAllArticles: async () => {
    const articles = await articlesRepository.findAllArticles();
    return articles;
  },
  findArticle: async (articleId) => {
    const article = await articlesRepository.findArticle(articleId);
    return article;
  },
  createNewArticle: async (user, articleData) => {
    const newArticle = await articlesRepository.createArticle(articleData);
    return newArticle;
  },
  updateArticle: async (articleId, data) => {
    const updatedArticle = await articlesRepository.updateArticle(
      articleId,
      data
    );
    return updatedArticle;
  },
  removeArticle: async (articleId) => {
    await articlesRepository.removeArticle(articleId);
  },
  removeArticleForce: async (articleId) => {
    await articlesRepository.removeArticleForce(articleId);
  },
};
