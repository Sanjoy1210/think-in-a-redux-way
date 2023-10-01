import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedBlogs } from "./relatedBlogsAPI";

// initial state
const initialState = {
  relatedBlogs: [],
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk
export const fetchRelatedBlogs = createAsyncThunk("relatedBlogs/fetchRelatedBlogs", async ({ tags, id }) => {
  const relatedBlogs = await getRelatedBlogs({ tags, id });
  return relatedBlogs;
});

// slice
const relatedBlogsSlice = createSlice({
  name: "relatedBlogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.relatedBlogs = action.payload;
      })
      .addCase(fetchRelatedBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.relatedBlogs = [];
      })
  }
});

export default relatedBlogsSlice.reducer;
