import axios from "axios";

const TOKEN = import.meta.env.VITE_APP_PUBLIC_TOKEN;
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    Accept: "application/json",
  },
});

API.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response && error.response.status >= 400) {
      console.error("Error Response:", error.response.data);
    } else {
      console.error("Unexpected Error:", error.message);
    }
    return Promise.reject(error);
  },
);
