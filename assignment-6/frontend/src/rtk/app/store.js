import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../features/blog/blogSlice";
import blogsReducer from "../features/blogs/blogsSlice";
import filtersReducer from "../features/filters/filtersSlice";
import relatedBlogsReducer from "../features/relatedBlogs/relatedBlogsSlice";

const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blog: blogReducer,
    relatedBlogs: relatedBlogsReducer,
    filters: filtersReducer,
  }
});

export default store;
