import axios from "@utils/axios";

export const getBlogs = async ({ sort = "", filter = "" }) => {
  const filterOptions = [];
  if (filter === "saved") {
    filterOptions.push(`isSaved=${true}`);
  }
  if (sort === "newest") {
    filterOptions.push(`_sort=createdAt&_order=desc`);
  }
  if (sort === "most_liked") {
    filterOptions.push(`_sort=likes&_order=desc`);
  }

  const queryString = filterOptions.join("&");

  const res = await axios.get(`/blogs?${queryString}`);

  return res.data;
}
