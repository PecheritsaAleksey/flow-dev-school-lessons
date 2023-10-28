import React from "react";
import Article from "./Article";

const ArticleList = () => {
  const articles = [
    {
      title: "Article 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, mollitinventore veritatis numquam omnis a",
    },
    {
      title: "Article 2",
      text: "Dolor sit amet consectetur adipisicing elit. Ea, mollitinventore veritatis numquam omnis a",
    },
    {
      title: "Article 3",
      text: "Lorem  adipisicing elit. Ea, mollitinventore veritatis numquam omnis a",
    },
  ];

  return (
    <div>
      <h2>Articles</h2>
      {articles.map((article) => {
        return <Article />;
      })}
    </div>
  );
};

export default ArticleList;
