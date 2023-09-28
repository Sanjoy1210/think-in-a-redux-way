const { fetchBooks } = require("./rtk/features/books/booksSlice");
const store = require("./rtk/store");

store.subscribe(() => {});

store.dispatch(fetchBooks());
