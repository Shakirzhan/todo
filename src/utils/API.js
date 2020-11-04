import axios from "axios";

const API = axios.create({
  baseURL: "http://web/api",
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json'
    },
    responseType: 'json',
    timeout: 60000,
    withCredentials: false
});

export default API;