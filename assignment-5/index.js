require("util").inspect.defaultOptions.depth = null;

const store = require("./rtk/app/store");
const { fetchVideo } = require("./rtk/features/video/videoSlice");
const { fetchRelatedVideos } = require("./rtk/features/relatedVideos/relatedVideosSlice");

store.subscribe(() => {});

const fetchVideos = async () => {
  try {
    const videoAction = await store.dispatch(fetchVideo());
    
    if (fetchVideo.fulfilled.match(videoAction)) {
      const video = videoAction.payload;
      const tags = video.tags;
      
      // make url query
      // let addAndSign = false;
      // const query = tags.reduce((result, tag) => {
      //   if (addAndSign) {
      //     result += "&";
      //   }
      //   result += "tags_like=" + tag;
      //   addAndSign = true;
      //   return result;
      // }, "");

      await store.dispatch(fetchRelatedVideos(tags));
    }
  } catch (err) {
    console.log(err.message);
  }
}

fetchVideos();
