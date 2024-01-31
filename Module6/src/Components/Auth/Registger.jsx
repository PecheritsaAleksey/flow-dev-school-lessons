import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onRegisterHandler = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onRegisterHandler)}>
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
        <Grid item width={"100%"}>
          <TextField
            label="Password"
            type="password"
            sx={{ width: "100%" }}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained">
            Register
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Register;
