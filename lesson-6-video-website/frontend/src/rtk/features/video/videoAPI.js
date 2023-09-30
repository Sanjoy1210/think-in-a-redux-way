import axios from "@utils/axios";

export const getVideo = async (id) => {
  const res = await axios(`/videos/${id}`);
  return res.data;
}
