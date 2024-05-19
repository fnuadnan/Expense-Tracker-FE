import axios from "axios";

export default axios.create({
  baseURL: "https://mysterious-bayou-33240-c7cba7d0e9e5.herokuapp.com/api",
  withCredentials: true,
});
