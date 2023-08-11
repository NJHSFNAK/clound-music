import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";

interface HYRequestInterceptors<T = AxiosResponse> {
  requestInterceptor: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig;
  requestInterceptorCatch: (err: any) => any;
  responseInterceptor: (data: T) => T;
  responseInterceptorCatch: (err: any) => any;
}

interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors<T>;
  showLoading?: boolean;
}

export type { HYRequestInterceptors, HYRequestConfig };
