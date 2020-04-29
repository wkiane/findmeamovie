import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  timeout: 1000,
  headers: { "Content-Type": "application/json;charset=utf-8" },
});

export default api;
