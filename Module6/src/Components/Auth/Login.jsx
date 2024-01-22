import { Button, Grid, TextField } from "@mui/material";
import React from "react";

const Login = () => {
  return (
    <>
      <Grid item width={"100%"}>
        <TextField label="Email" sx={{ width: "100%" }} />
      </Grid>
      <Grid item width={"100%"}>
        <TextField label="Password" sx={{ width: "100%" }} />
      </Grid>
      <Grid item>
        <Button variant="contained">Login</Button>
      </Grid>
    </>
  );
};

export default Login;
