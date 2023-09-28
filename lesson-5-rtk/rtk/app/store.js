const { configureStore } = require("@reduxjs/toolkit");
const {createLogger} = require("redux-logger");
const counterReducer = require("../features/counter/counterSlice");
const dynamicCounterReducer = require("../features/dynamicCounter/dynamicCounterSlice");
const postsReducer = require("../features/posts/postsSlice");

const logger = createLogger();

const store = configureStore({
  reducer: {
    counter: counterReducer,
    dynamicCounter: dynamicCounterReducer,
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

module.exports = store;
