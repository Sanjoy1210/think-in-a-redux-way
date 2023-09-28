const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");

// initial State
const initialState = {
  loading: false,
  posts: [],
  error: "",
};

const fetchPosts = createAsyncThunk("posts/fetchPosts", async() => {
  const res = await fetch("https://jsonplaceholder.typicodes.com/posts?_limit=5");
  const posts = await res.json();

  return posts;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = true;
      state.error = "",
      state.posts = [];
    });

    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "",
      state.posts = action.payload;
    });

    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message,
      state.posts = [];
    });
  }
});

module.exports = postsSlice.reducer;
module.exports.fetchPosts = fetchPosts;
