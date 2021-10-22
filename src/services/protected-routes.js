import axios from "axios";

const privateReq = axios.create({
  baseURL: "http://localhost:8080/v1",
  headers: {
    "Content-type": "application/json",
  },
});

privateReq.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export default privateReq;
