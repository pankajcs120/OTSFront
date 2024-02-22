import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://finalots.onrender.com/api/",
  withCredentials: true,
});

export default newRequest;
