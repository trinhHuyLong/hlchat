import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://hlchat-jw9f.onrender.com/api",
  withCredentials: true,
});
