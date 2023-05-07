const NotImplementedError = require("../infrastructure/errors/NotImplementedError");

module.exports = {
  getAllArticles: () => {
    throw new NotImplementedError("Not implemented");
    return "All articles from service";
  },
  createNewArticle: (user) => {
    throw new NotImplementedError("Not implemented");
    return "Create article from servive by " + user;
  },
};
