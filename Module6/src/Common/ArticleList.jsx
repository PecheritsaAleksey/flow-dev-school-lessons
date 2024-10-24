import React from "react";
import ArticleCard from "./ArticleCard";
import { Grid } from "@mui/material";

const ArticleList = ({ articles }) => {
  return (
    <Grid
      container
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={4}
      xs={12}
      md={6}
      lg={4}
    >
      {articles.map((article) => {
        return (
          <Grid item sx={{ width: "100%" }}>
            <ArticleCard
              _id={article._id}
              title={article.title}
              text={article.text}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ArticleList;
