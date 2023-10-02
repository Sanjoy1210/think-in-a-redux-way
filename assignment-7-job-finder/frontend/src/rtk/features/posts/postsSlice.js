import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addPost, editPost, getAPost, getPosts, removePost } from "./postsAPI";

// initial state
const initialState = {
  posts: [],
  isLoading: false,
  isError: false,
  error: "",
  post: {},
  filterType: ""
};

// async thunk
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async (type) => {
  const posts = await getPosts(type);
  return posts;
});

export const fetchPost = createAsyncThunk("posts/fetchPost", async (id) => {
  const post = await getAPost(id);
  return post;
})

export const createPost = createAsyncThunk("posts/createPost", async (data) => {
  const post = await addPost(data);
  return post;
});

export const updatePost = createAsyncThunk("posts/updatePost", async ({ id, data }) => {
  const post = await editPost(id, data);
  return post;
});

export const deletePost = createAsyncThunk("posts/deletePost", async (id) => {
  const post = await removePost(id);
  return post;
})

// create slice
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    editActivePost: (state, action) => {
      state.post = action.payload.post;
    },
    editInActivePost: (state) => {
      state.post = {};
    },
    selectedFilterType: (state, action) => {
      state.filterType = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
        state.posts = [];
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.post = action.payload;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
        state.post = {};
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.posts.push(action.payload);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";

        const idx = state.posts.findIndex((post) => post.id === action.payload.id);

        state.posts[idx] = action.payload;
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";

        state.posts = state.posts.filter(post => post.id !== action.meta?.arg);
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
  }
});

export default postsSlice.reducer;
export const { editActivePost, editInActivePost, selectedFilterType } = postsSlice.actions;
