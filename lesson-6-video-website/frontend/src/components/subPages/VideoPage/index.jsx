import Player from "./Player";
import Description from "./Description";
import RelatedVideos from "./RelatedVideos";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchVideo } from "@rtk/features/video/videoSlice";
import { useParams } from "react-router-dom";
import { Loading } from "@components/reusable";

export default function VideoPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { video, isLoading, isError, error } = useSelector(
    (state) => state.video
  );

  useEffect(() => {
    dispatch(fetchVideo(id));
  }, [dispatch, id]);

  const { id: videoId, title, link, tags } = video || {};

  let content = null;
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  }
  if (!isLoading && !isError && !video?.id) {
    content = <div className="col-span-12">No video found</div>;
  }
  if (!isLoading && !isError && video?.id) {
    content = (
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <div className="col-span-full w-full space-y-8 lg:col-span-2">
              <Player link={link} title={title} />

              <Description video={video} />
            </div>

            <RelatedVideos currentId={videoId} tags={tags} />
          </div>
        </div>
      </section>
    );
  }

  return content;
}
