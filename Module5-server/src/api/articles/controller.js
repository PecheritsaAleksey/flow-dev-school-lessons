const articleService = require("../../service/articleService");

module.exports = {
  getAllArticles: (req, res) => {
    let articles = articleService.getAllArticles();
    res.send(articles);
  },
  createNewArticle: (req, res) => {
    let article = articleService.createNewArticle();
    res.send(article);
  },
};
