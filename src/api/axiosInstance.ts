import axios from "axios";
import type { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { ICustomAxiosRequestConfig } from "./types.ts";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
});

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  if (!config) console.error("No axios config");
  if ((config as ICustomAxiosRequestConfig).customProperty) {
    console.log(
      "Custom property:",
      (config as ICustomAxiosRequestConfig).customProperty,
    );
  }
  return config;
});
