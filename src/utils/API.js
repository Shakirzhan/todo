import axios from "axios";

const API = axios.create({
  baseURL: "http://shakirzhan.ru/api/"
});

export default API;