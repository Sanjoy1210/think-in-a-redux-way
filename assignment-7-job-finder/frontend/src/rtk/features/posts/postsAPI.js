import axios from "@utils/axios";

export const getPosts = async (type) => {
  let res;
  if (type === '') {
    res = await axios.get(`/jobs`);  
  } else {
    res = await axios.get(`/jobs?type_like=${type}`);
  }
  return res.data;
}

export const getAPost = async (id) => {
  const res = await axios.get(`/jobs/${id}`);
  return res.data;
}

export const addPost = async (data) => {
  const res = await axios.post("/jobs", data);

  return res.data;
}

export const editPost = async (id, data) => {
  const res = await axios.put(`/jobs/${id}`, data);

  return res.data;
}

export const removePost = async (id) => {
  const res = await axios.delete(`/jobs/${id}`);
  
  return res.data;
}
