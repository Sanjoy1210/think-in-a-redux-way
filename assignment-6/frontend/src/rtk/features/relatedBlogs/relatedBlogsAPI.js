import axios from "@utils/axios";

export const getRelatedBlogs = async ({ tags = [], id = -1 }) => {
  const filterOptions = tags?.map((tag) => `tags_like=${tag}`);
  filterOptions.push(`id_ne=${id}`);

  const queryString = filterOptions.join("&");
  
  const res = await axios.get(`/blogs?${queryString}`);
  return res.data;
}