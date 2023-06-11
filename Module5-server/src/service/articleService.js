const NotImplementedError = require("../infrastructure/errors/NotImplementedError");

module.exports = {
  getAllArticles: () => {
    throw new NotImplementedError("Not implemented");
    return "All articles from service";
  },
  createNewArticle: (user, articleData) => {
    const { name, text } = articleData || {};

    return `Create article with name '${name}' and text '${text}' from service by ${user}`;
  },
};
