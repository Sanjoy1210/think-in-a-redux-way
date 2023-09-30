import { useEffect } from "react";
import VideoItem from "./VideoItem";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "@components/reusable";
import { fetchVideos } from "@rtk/features/videos/videosSlice";

export default function VideoGrid() {
  const dispatch = useDispatch();
  const { isLoading, isError, videos, error } = useSelector(
    (state) => state.videos
  );
  const { tags, search } = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(fetchVideos({ tags, search }));
  }, [dispatch, tags, search]);

  let content = null;
  if (isLoading) {
    return <Loading />;
  }
  if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  }
  if (!isLoading && !isError && videos?.length === 0) {
    content = <div className="col-span-12">NO videos found</div>;
  }
  if (!isLoading && !isError && videos?.length > 0) {
    content = videos?.map((video) => <VideoItem key={video?.id} {...video} />);
  }

  return (
    <section className="pt-12">
      <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
        {content}
      </div>
    </section>
  );
}
