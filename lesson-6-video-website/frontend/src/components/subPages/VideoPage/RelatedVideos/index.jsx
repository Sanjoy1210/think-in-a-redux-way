import { useDispatch, useSelector } from "react-redux";
import RelatedVideo from "./RelatedVideo";
import { useEffect } from "react";
import { fetchRelatedVideos } from "@rtk/features/relatedVideos/relatedVideosSlice";
import { Loading } from "@components/reusable";

export default function RelatedVideos({ currentId, tags }) {
  const dispatch = useDispatch();
  const { isLoading, isError, error, relatedVideos } = useSelector((state) => state.relatedVideos);

  useEffect(() => {
    dispatch(fetchRelatedVideos({tags, id: currentId}));
  }, [dispatch, tags, currentId]);

  // describe what to render
  let content = null;
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  }
  if (!isLoading && !isError && relatedVideos?.length === 0) {
    content = <div className="col-span-12">NO related videos found</div>;
  }
  if (!isLoading && !isError && relatedVideos?.length > 0) {
    content = relatedVideos?.map((video) => <RelatedVideo key={video?.id} {...video} />);
  }

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
}
