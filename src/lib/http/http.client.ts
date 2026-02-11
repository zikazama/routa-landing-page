import axios, { AxiosError } from "axios";
import { HttpError } from "./http.error";
import type {
  HttpClient,
  HttpClientFactoryOptions,
  HttpRequestConfig,
  HttpResponse,
} from "./http.types";

const DEFAULT_TIMEOUT_MS = 15000;

function resolveBaseUrl(): string {
  return (
    import.meta.env.VITE_API_BASE_URL ||
    import.meta.env.VITE_BASE_URL ||
    ""
  );
}

export function createHttpClient(
  options: HttpClientFactoryOptions = {}
): HttpClient {
  const client = axios.create({
    baseURL: options.baseURL ?? resolveBaseUrl(),
    timeout: options.timeoutMs ?? DEFAULT_TIMEOUT_MS,
    headers: options.headers,
  });

  client.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response) {
        throw new HttpError(
          error.message,
          error.response.status,
          error.response.data
        );
      }
      throw new HttpError(error.message, null, null);
    }
  );

  return client;
}

export const httpClient = createHttpClient();

export async function httpRequest<TResponse, TBody = unknown>(
  config: HttpRequestConfig<TBody>
): Promise<HttpResponse<TResponse>> {
  return httpClient.request<TResponse, HttpResponse<TResponse>, TBody>(config);
}

export async function httpGet<TResponse>(
  url: string,
  config?: HttpRequestConfig
): Promise<TResponse> {
  const response = await httpRequest<TResponse>({
    ...config,
    method: "GET",
    url,
  });
  return response.data;
}

export async function httpPost<TResponse, TBody>(
  url: string,
  body: TBody,
  config?: HttpRequestConfig<TBody>
): Promise<TResponse> {
  const response = await httpRequest<TResponse, TBody>({
    ...config,
    method: "POST",
    url,
    data: body,
  });
  return response.data;
}

export async function httpPut<TResponse, TBody>(
  url: string,
  body: TBody,
  config?: HttpRequestConfig<TBody>
): Promise<TResponse> {
  const response = await httpRequest<TResponse, TBody>({
    ...config,
    method: "PUT",
    url,
    data: body,
  });
  return response.data;
}

export async function httpPatch<TResponse, TBody>(
  url: string,
  body: TBody,
  config?: HttpRequestConfig<TBody>
): Promise<TResponse> {
  const response = await httpRequest<TResponse, TBody>({
    ...config,
    method: "PATCH",
    url,
    data: body,
  });
  return response.data;
}

export async function httpDelete<TResponse>(
  url: string,
  config?: HttpRequestConfig
): Promise<TResponse> {
  const response = await httpRequest<TResponse>({
    ...config,
    method: "DELETE",
    url,
  });
  return response.data;
}

export function setHttpAuthToken(token: string | null): void {
  if (token) {
    httpClient.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete httpClient.defaults.headers.common.Authorization;
  }
}
