import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { login } from "../../services/userService";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onLoginHandler = async (data) => {
    try {
      const res = await login(data);
      localStorage.setItem("user", JSON.stringify(res));
    } catch (error) {
      console.log(error?.response?.data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onLoginHandler)}>
      <Grid container spacing={4} justifyContent={"center"}>
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
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained">
            Login
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Login;
