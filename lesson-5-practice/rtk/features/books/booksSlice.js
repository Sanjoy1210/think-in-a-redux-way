const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");

// initial state
const initialState = {
  loading: false,
  books: [],
  error: "",
};

const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const res = await fetch("https://fake-json-data.onrender.com/books");
  const books = await res.json();

  return books;
});

const booksSlice = createSlice({
  name: "books",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state, action) => {
      state.loading = true;
      state.books = [];
      state.error = "";
    });
    
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.loading = false;
      state.books = action.payload;
      state.error = "";
    });
    
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.loading = false;
      state.books = [];
      state.error = action.error.message;
    });
  }
});

module.exports = booksSlice.reducer;
module.exports.fetchBooks = fetchBooks;
