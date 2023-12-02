import { Grid, Typography } from "@mui/material";
import React from "react";

const PageWrapper = ({ title, children }) => {
  return (
    <Grid
      container
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={4}
    >
      <Grid item>
        <Typography variant="h4">{title}</Typography>
      </Grid>
      <Grid item>{children}</Grid>
    </Grid>
  );
};

export default PageWrapper;
