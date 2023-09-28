const { configureStore } = require("@reduxjs/toolkit");
const { createLogger } = require("redux-logger");
const videoReducer = require("../features/video/videoSlice");
const relatedVideosReducer = require("../features/relatedVideos/relatedVideosSlice");

const logger = createLogger();

const store = configureStore({
  reducer: {
    video: videoReducer,
    relatedVideos: relatedVideosReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
