const articleService = require("../../service/articleService");

module.exports = {
  getAllArticles: (req, res) => {
    let articles = articleService.getAllArticles();
    res.send(articles);
  },
  createNewArticle: (req, res) => {
    let user = req.user;
    let article = articleService.createNewArticle(user);
    res.send(article);
  },
};
