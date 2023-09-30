import axios from "@utils/axios";

export const getVideos = async ({tags = [], search = ""}) => {
  const filters = tags?.map((tag) => `tags_like=${tag}`);

  if (search) {
    filters.push(`q=${search}`);
  }

  const queryString = filters?.join("&");

  const res = await axios.get(`/videos?${queryString}`);
  return res.data;
}
