import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlog, updateBlog } from "./blogAPI";

// initial state
const initialState = {
  blog: {},
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk
export const fetchBlog = createAsyncThunk("blog/fetchBlog", async (id) => {
  const blog = await getBlog(id);
  return blog;
});

export const updateBlogById = createAsyncThunk("blog/updateBlogById", async ({ id, data }) => {
  const blog = await updateBlog({ id, data });
  return blog;
})

const blogSlice = createSlice({
  name: "blog",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlog.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
        state.blog = {};
      })
      .addCase(fetchBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.blog = action.payload;
      })
      .addCase(fetchBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.blog = {};
      })
      .addCase(updateBlogById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.blog = action.payload;
      })
      .addCase(updateBlogById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.blog = {};
      })
  }
});

export default blogSlice.reducer;
