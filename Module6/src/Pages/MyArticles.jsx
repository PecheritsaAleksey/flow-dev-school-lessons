import React from "react";
import ArticleList from "../Common/ArticleList";
import PageWrapper from "../Common/PageWrapper";

const articles = [
  {
    title: "Article 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, mollitinventore veritatis numquam omnis a",
  },
  {
    title: "Article 3",
    text: "Lorem  adipisicing elit. Ea, mollitinventore veritatis numquam omnis a",
  },
];

const MyArticles = () => {
  return (
    <PageWrapper title={"My Articles"}>
      <ArticleList articles={articles} />
    </PageWrapper>
  );
};

export default MyArticles;
