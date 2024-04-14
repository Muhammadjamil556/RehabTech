import axios from "axios";

const Api = axios.create({
  baseURL: "https://puzzled-cyan-headscarf.cyclic.app",
});

export default Api;
