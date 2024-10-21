import React, { useEffect } from "react";
import ArticleList from "../Common/ArticleList";
import PageWrapper from "../Common/PageWrapper";
import { useDispatch, useSelector } from "react-redux";
import { getMyArticles } from "../store/slices/articlesSlice";
import Spinner from "../Common/Spinner";

const MyArticles = () => {
  const dispatch = useDispatch();

  const { userArticles, loading } = useSelector((state) => state.articles);

  useEffect(() => {
    if (userArticles.length === 0) {
      dispatch(getMyArticles());
    }
  }, []);

  return (
    <PageWrapper title={"My Articles"}>
      {loading && <Spinner />}
      <ArticleList articles={userArticles} />
    </PageWrapper>
  );
};

export default MyArticles;
