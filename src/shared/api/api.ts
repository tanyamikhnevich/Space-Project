import axios from "axios";

export const api = axios.create({
  baseURL: "https://marella-api.herokuapp.com/api",
});
