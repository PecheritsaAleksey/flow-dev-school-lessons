import React from "react";
import Article from "./Article";
import { Grid } from "@mui/material";

const ArticleList = ({ articles }) => {
  return (
    <Grid
      container
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={4}
    >
      {articles.map((article) => {
        return (
          <Grid item sx={{ width: "100%" }}>
            <Article title={article.title} text={article.text} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ArticleList;
