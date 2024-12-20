import { CircularProgress, Grid } from "@mui/material";
import React from "react";

const Spinner = () => {
  return (
    <Grid container justifyContent={"center"} alignItems={"center"}>
      <Grid item>
        <CircularProgress />
      </Grid>
    </Grid>
  );
};

export default Spinner;
