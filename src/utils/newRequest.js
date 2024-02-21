import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://otsweb.onrender.com/api/",
  withCredentials: true,
});

export default newRequest;
