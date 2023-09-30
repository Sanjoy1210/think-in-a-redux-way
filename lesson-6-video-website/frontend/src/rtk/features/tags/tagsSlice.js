import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTags } from "./tagsAPI";

const initialState = {
  tags: [],
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk
export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
  const tags = await getTags();

  return tags;
});

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTags.pending, (state, action) => {
      state.tags = [];
      state.isLoading = true;
      state.isError = false;
      state.error = "";
    }).addCase(fetchTags.fulfilled, (state, action) => {
      state.tags = action.payload;
      state.isLoading = false;
      state.isError = false;
      state.error = "";
    }).addCase(fetchTags.rejected, (state, action) => {
      state.tags = [];
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    })
  }
});

export default tagsSlice.reducer;
