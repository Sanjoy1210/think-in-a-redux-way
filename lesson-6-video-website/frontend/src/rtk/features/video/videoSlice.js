import { getVideo } from "./videoAPI";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  video: {},
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk
export const fetchVideo = createAsyncThunk("video/fetchVideo", async (id) => {
  const video = await getVideo(id);
  return video;
})

const videoSlice = createSlice({
  name: "video",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideo.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
        state.video = {};
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.video = action.payload;
      })
      .addCase(fetchVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.video = {};
      })
  }
});

export default videoSlice.reducer;
