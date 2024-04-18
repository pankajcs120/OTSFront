import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://otsback.onrender.com/api",
  withCredentials: true,
});

export default newRequest;
