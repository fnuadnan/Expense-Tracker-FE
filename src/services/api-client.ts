import axios from "axios";

export default axios.create({
  baseURL: "https://heroku-expense-tracker-505675df9672.herokuapp.com/api",
  withCredentials: true,
});
