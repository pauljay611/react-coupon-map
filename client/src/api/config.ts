import axios from "axios";

export const env = process.env.NODE_ENV as string;

export const endPoint: Record<string, string> = {
  production: "",
  stage: "",
  development: "http://localhost:8000",
};

export const api = axios.create({
  baseURL: endPoint[env],
});
