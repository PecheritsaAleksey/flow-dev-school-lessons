import React from "react";
import { Grid, Typography, Button } from "@mui/material";

const NotFound = () => {
  const returnHandler = () => {
    window.history.back();
  };

  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
      flexDirection={"column"}
    >
      <Typography variant="h4">
        Oops! It seems like this page doesn`t exist
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={returnHandler}
      >
        Go back
      </Button>
    </Grid>
  );
};

export default NotFound;
