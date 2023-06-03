import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://opentdb.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.response.use((response) => {
  if (response) {
    return response.data;
  }
});

export default axiosClient;
