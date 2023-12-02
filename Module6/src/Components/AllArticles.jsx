import React from "react";
import { Grid, Typography } from "@mui/material";
import ArticleList from "../Common/ArticleList";

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
    <Grid
      container
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={4}
    >
      <Grid item>
        <Typography variant="h4">All Articles</Typography>
      </Grid>
      <Grid item>
        <ArticleList articles={articles} />
      </Grid>
    </Grid>
  );
};

export default AllArticles;
