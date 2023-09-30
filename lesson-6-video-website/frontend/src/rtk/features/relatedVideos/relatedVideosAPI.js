import axios from "@utils/axios";

export const getRelatedVideos = async ({tags = [], id = ""}) => {
  const limit = 5;
  let queryString = tags?.reduce((result, tag) => result + `tags_like=${tag}&`, "") || "";

  queryString += `id_ne=${id}&_limit=${limit}`;

  const res = await axios.get(`/videos?${queryString}`);
  return res.data;
}
