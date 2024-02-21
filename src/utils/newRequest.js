import axios from "axios";

const newRequest = axios.create({
  baseURL: "ots-front-eta.vercel.app/api/",
  withCredentials: true,
});

export default newRequest;
