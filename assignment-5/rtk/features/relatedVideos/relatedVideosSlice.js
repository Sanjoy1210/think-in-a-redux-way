const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");
const { default: fetch } = require("node-fetch");
const { sortByViews } = require("../../../utils/sortByViews");

// initial state
const initialState = {
  loading: false,
  videos: [],
  error: "",
}

// async thunk function
const fetchRelatedVideos = createAsyncThunk("relatedVideos/fetchRelatedVideos", async (query) => {
  const res = await fetch(`http://localhost:9000/videos?${query}`);
  const videos = await res.json();

  return videos.sort(sortByViews);
});

const relatedVideosSlice = createSlice({
  name: "relatedVideos",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRelatedVideos.pending, (state, action) => {
      state.loading = true;
      state.error = "";
      state.videos = [];
    });
    
    builder.addCase(fetchRelatedVideos.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.videos = action.payload;
    });
    
    builder.addCase(fetchRelatedVideos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.videos = [];
    });
  }
});

module.exports = relatedVideosSlice.reducer;
module.exports.fetchRelatedVideos = fetchRelatedVideos;
