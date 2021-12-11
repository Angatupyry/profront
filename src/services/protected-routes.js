import axios from "axios";
import Cookies from "js-cookie";

const privateReq = axios.create({
  baseURL: "https://apiproservice.herokuapp.com/v1",
  headers: {
    "Content-type": "application/json",
  },
});

privateReq.interceptors.request.use(function (config) {
  const token = Cookies.get("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export default privateReq;
