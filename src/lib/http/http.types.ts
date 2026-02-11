import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type HttpRequestConfig<TBody = unknown> = AxiosRequestConfig<TBody> & {
  method?: HttpMethod;
};

export type HttpResponse<TData = unknown> = AxiosResponse<TData>;

export type HttpClientFactoryOptions = {
  baseURL?: string;
  timeoutMs?: number;
  headers?: Record<string, string>;
};

export type HttpClient = AxiosInstance;
