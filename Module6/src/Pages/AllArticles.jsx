import React from "react";
import ArticleList from "../Common/ArticleList";
import PageWrapper from "../Common/PageWrapper";

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

const AllArticles = () => {
  return (
    <PageWrapper title={"All Articles"}>
      <ArticleList articles={articles} />
    </PageWrapper>
  );
};

export default AllArticles;
