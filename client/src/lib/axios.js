import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "https://hlchat-jw9f.onrender.com"
      : "/api",
  withCredentials: true,
});
