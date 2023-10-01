import axios from "@utils/axios";

export const getBlog = async (id) => {
  const res = await axios.get(`/blogs/${id}`);
  return res.data;
}

export const updateBlog = async ({id, data}) => {
  const res = await axios.patch(`/blogs/${id}`, data);
  return res.data;
}
