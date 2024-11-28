import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://api.junstudy.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default AxiosInstance;
