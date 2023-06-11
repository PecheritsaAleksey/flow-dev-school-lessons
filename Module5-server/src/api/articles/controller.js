const articleService = require("../../service/articleService");

module.exports = {
  getAllArticles: (req, res) => {
    let articles = articleService.getAllArticles();
    res.send(articles);
  },
  createNewArticle: (req, res) => {
    let user = req.user;
    let data = req.body;

    let article = articleService.createNewArticle(user, data);
    res.send(article);
  },
};
