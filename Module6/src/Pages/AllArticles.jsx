import React, { useEffect, useState } from "react";
import ArticleList from "../Common/ArticleList";
import PageWrapper from "../Common/PageWrapper";
import { getAllArticles } from "../services/articleService";

const AllArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function getArticles() {
      const articles = await getAllArticles();
      setArticles(articles);
    }

    getArticles();
  }, []);

  return (
    <PageWrapper title={"All Articles"}>
      <ArticleList articles={articles} />
    </PageWrapper>
  );
};

export default AllArticles;
