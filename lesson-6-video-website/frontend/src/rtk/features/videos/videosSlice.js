import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { getVideos } from "./videosAPI";

const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk
export const fetchVideos = createAsyncThunk("videos/fetchVideos", async({tags, search}) => {
  const videos = await getVideos({tags, search});
  return videos;
});

const videosSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchVideos.pending, (state, action) => {
      state.isError = false;
      state.error = "";
      state.videos = [];
      state.isLoading = true;
    }).addCase(fetchVideos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.videos = action.payload;
      state.isError = false;
      state.error = "";
    }).addCase(fetchVideos.rejected, (state, action) => {
      state.isError = true;
      state.error = action.error.message;
      state.videos = [];
      state.isLoading = false;
    })
  }
})

export default videosSlice.reducer;
