import axios from "axios";

export default axios.create({
  baseURL: "https://apiproservice.herokuapp.com/v1",
  headers: {
    "Content-type": "application/json",
  },
});
