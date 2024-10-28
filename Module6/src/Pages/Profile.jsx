import React, { useEffect, useState, useRef } from "react";
import PageWrapper from "../Common/PageWrapper";
import { Alert, Button, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../store/slices/authSlice";

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const { user, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      setValue("name", user.name);
      setValue("email", user.email);
    }
  }, [user]);

  const onUpdateHandler = (data) => {
    try {
      dispatch(updateUser(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PageWrapper title={"Profile"}>
      <form onSubmit={handleSubmit(onUpdateHandler)}>
        <Grid container spacing={4} justifyContent={"center"}>
          <Grid item width={"100%"}>
            <TextField
              label="User Name"
              sx={{ width: "100%" }}
              {...register("name", {
                required: "Email is required",
                minLength: {
                  value: 5,
                  message: "Name must be at least 5 characters",
                },
              })}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </Grid>
          <Grid item width={"100%"}>
            <TextField
              label="Email"
              sx={{ width: "100%" }}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Grid>
          <Grid item>
            <Button type="submit" variant="contained">
              Update
            </Button>
          </Grid>
        </Grid>
      </form>
      {error && (
        <Grid
          container
          item
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ p: 4 }}
        >
          <Alert severity="error">{error}</Alert>
        </Grid>
      )}
    </PageWrapper>
  );
};

export default Profile;
