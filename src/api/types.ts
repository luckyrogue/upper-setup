import type { AxiosRequestConfig } from "axios";

export interface ICustomAxiosRequestConfig extends AxiosRequestConfig {
  customProperty?: string;
}
