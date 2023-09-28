const { configureStore } = require("@reduxjs/toolkit");
const { createLogger } = require("redux-logger");
const booksReducer = require("./features/books/booksSlice");

const logger = createLogger();

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
