import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlogs } from "./blogsAPI";

// initial state
const initialState = {
  blogs: [],
  isLoading: false,
  isError: false,
  error: ""
};

// async thunk
export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async ({sort, filter}) => {
  const blogs = await getBlogs({sort, filter});
  return blogs;
});

// slice
const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.blogs = [];
        state.error = "";
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.blogs = action.payload;
        state.error = "";
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.blogs = [];
        state.error = action.error.message;
      })
  }
});

export default blogsSlice.reducer;
