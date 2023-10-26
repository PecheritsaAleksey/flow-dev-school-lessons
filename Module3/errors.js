const user = {
  name: "Alex",
  age: 28,
  articles: [
    // { title: "Title 1", text: "Article 1 text" },
    // { title: "Title 2", text: "Article 2 text" },
  ],
};

try {
  if (user.articles) {
    switch (user.articles.length) {
      case 0:
        console.log("No articles");
        break;
      case 1:
        console.log("Just one");
        break;
      case 2:
        console.log("Good!");
        break;
      default:
        console.log("Awesome!");
        break;
    }
  }
} catch (error) {
  console.log("Some error happend!");
} finally {
  console.log("Task was done");
}

function logFirstArticle(user) {
  //   if (!user.articles || !user.articles[0]) return;

  // ?.

  console.log(user.articles?.[0]?.title);
}

logFirstArticle(user);
