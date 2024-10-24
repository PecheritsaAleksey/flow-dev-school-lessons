import React, { useEffect } from "react";
import PageWrapper from "../Common/PageWrapper";
import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getArticleById } from "../store/slices/articlesSlice";
import Spinner from "../Common/Spinner";

const Article = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { readedArticle, loading } = useSelector((state) => state.articles);

  useEffect(() => {
    if (!readedArticle || readedArticle._id !== id) {
      dispatch(getArticleById(id));
    }
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (readedArticle) {
    return (
      <PageWrapper>
        <Grid
          container
          item
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={4}
          xs={12}
          md={6}
          lg={4}
        >
          <Grid item>
            <Typography variant="h4">{readedArticle.title}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">{readedArticle.text}</Typography>
          </Grid>
        </Grid>
      </PageWrapper>
    );
  }
};

export default Article;
