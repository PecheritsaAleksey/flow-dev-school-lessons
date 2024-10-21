import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAllArticles as getAll,
  getMyArticles as getMy,
} from "../../services/articleService";

const initialState = {
  loading: false,
  allArticles: [],
  userArticles: [],
};

export const getAllArticles = createAsyncThunk("article/getAll", async () => {
  const response = await getAll();
  return response;
});

export const getMyArticles = createAsyncThunk("article/getMy", async () => {
  const response = await getMy();
  return response;
});

export const slice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllArticles.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getMyArticles.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllArticles.fulfilled, (state, action) => {
      state.allArticles = action.payload;
      state.loading = false;
    });
    builder.addCase(getMyArticles.fulfilled, (state, action) => {
      state.userArticles = action.payload;
      state.loading = false;
    });
  },
});

export default slice.reducer;
