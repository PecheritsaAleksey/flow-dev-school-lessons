import React, { useState } from "react";
import PageWrapper from "../../Common/PageWrapper";
import { Button, Grid, Typography } from "@mui/material";
import Login from "./Login";
import Registger from "./Registger";

const AuthWrapper = () => {
  const [type, setType] = useState("login");

  const typeChangeHandler = () => {
    setType((prev) => (prev === "login" ? "register" : "login"));
  };

  return (
    <PageWrapper title={type === "login" ? "Login" : "Register"}>
      <Grid
        container
        item
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        spacing={4}
        xs={12}
        md={6}
        lg={4}
      >
        <Grid item width={"100%"}>{type === "login" ? <Login /> : <Registger />}</Grid>
        <Grid container item flexDirection={"column"} alignItems={"center"}>
          <Grid item>
            <Typography variant="body2">
              {type === "login"
                ? "Don`t have an account?"
                : "Already have an account? "}
            </Typography>
          </Grid>
          <Grid item>
            <Button onClick={typeChangeHandler}>
              {type === "login" ? "Register" : "Login"}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </PageWrapper>
  );
};

export default AuthWrapper;
