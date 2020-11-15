import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4439"
});

export default instance;
