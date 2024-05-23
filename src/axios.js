import axios from "axios";

const Api = axios.create({
  baseURL: "https://rehabtech-backend.vercel.app/",
});

export default Api;
