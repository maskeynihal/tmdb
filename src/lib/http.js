import axios from "axios";
import endpoints from "../config/api";

const http = axios.create({
  baseURL: endpoints.base,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${endpoints.key}`,
  },
});

export default http;
