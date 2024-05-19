import axios from "axios";

export default axios.create({
  baseURL: "https://expense-tracker-fe-omega.vercel.app/api",
  withCredentials: true,
});
