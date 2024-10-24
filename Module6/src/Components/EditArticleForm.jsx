import { Backdrop, Button, Grid, Paper, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addArticle } from "../store/slices/articlesSlice";

const EditArticleForm = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSaveHandler = async (data) => {
    try {
      dispatch(addArticle(data));
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Backdrop open={true} onClick={onClose} sx={{ zIndex: 1000 }}>
      <Paper sx={{ p: 4 }} onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit(onSaveHandler)}>
          <Grid container spacing={4} justifyContent={"center"}>
            <Grid item width={"100%"}>
              <TextField
                label="Title"
                sx={{ width: "100%" }}
                {...register("title", {
                  required: "Title is required",
                })}
                error={!!errors.title}
                helperText={errors.title?.message}
              />
            </Grid>
            <Grid item width={"100%"}>
              <TextField
                label="Text"
                type="text"
                sx={{ width: "100%" }}
                {...register("text", {
                  required: "Text is required",
                })}
                multiline
                rows={4}
                error={!!errors.text}
                helperText={errors.text?.message}
              />
            </Grid>
            <Grid item>
              <Button type="submit" variant="contained">
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Backdrop>
  );
};

export default EditArticleForm;
