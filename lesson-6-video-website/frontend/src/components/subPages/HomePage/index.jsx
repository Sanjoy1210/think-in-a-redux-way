import { Pagination } from "@components/reusable";
import Tags from "./Tags";
import VideoGrid from "./VideoGrid";

export default function HomePage() {
  return (
    <>
      <Tags />
      <VideoGrid />
      <Pagination />
    </>
  );
}
