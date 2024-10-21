import React, { useEffect } from "react";
import ArticleList from "../Common/ArticleList";
import PageWrapper from "../Common/PageWrapper";
import { useDispatch, useSelector } from "react-redux";
import { getAllArticles } from "../store/slices/articlesSlice";
import Spinner from "../Common/Spinner";

const AllArticles = () => {
  const dispatch = useDispatch();

  const { allArticles, loading } = useSelector((state) => state.articles);

  useEffect(() => {
    if (allArticles.length === 0) {
      dispatch(getAllArticles());
    }
  }, []);

  return (
    <PageWrapper title={"All Articles"}>
      {loading && <Spinner />}
      <ArticleList articles={allArticles} />
    </PageWrapper>
  );
};

export default AllArticles;
