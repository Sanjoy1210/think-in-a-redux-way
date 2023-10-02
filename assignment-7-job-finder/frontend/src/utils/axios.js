import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fake-json-data.onrender.com",
});

export default axiosInstance;
