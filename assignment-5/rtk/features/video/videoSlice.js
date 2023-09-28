const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");

// initial state
const initialState = {
  loading: false,
  video: {},
  error: "",
};

// async thunk function
const fetchVideo = createAsyncThunk("video/fetchVideo", async () => {
  const res = await fetch("http://localhost:9000/videos");
  const video = await res.json();
  return video;
});

const videoSlice = createSlice({
  name: "video",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchVideo.pending, (state, action) => {
      state.loading = true;
      state.error = "";
      state.video = {};
    });
    
    builder.addCase(fetchVideo.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.video = action.payload;
    });

    builder.addCase(fetchVideo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.video = {};
    });
  }
});

module.exports = videoSlice.reducer;
module.exports.fetchVideo = fetchVideo;
