import axios from "axios";
import type { AxiosInstance } from "axios";

import type { HYRequestInterceptors, HYRequestConfig } from "./type";

class HYRequest {
  // axios的实例
  instance: AxiosInstance;
  // 拦截器
  interactors?: HYRequestInterceptors;

  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config);
    this.interactors = config.interceptors;
    // 这个拦截器是私有配置的
    this.instance.interceptors.request.use(
      this.interactors?.requestInterceptor,
      this.interactors?.requestInterceptorCatch
    );

    this.instance.interceptors.response.use(
      this.interactors?.responseInterceptor,
      this.interactors?.responseInterceptorCatch
    );
    // 公共的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // console.log("公共的请求拦截器");
        // 添加token
        // config.headers.Authorization = "123123";
        return config;
      },
      (err) => {
        // if(e)
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (data) => {
        // console.log("公共的响应拦截器");
        return data;
      },
      (err) => {
        return err;
      }
    );
  }
  request<T>(config: HYRequestConfig<T>) {
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  get<T>(config: HYRequestConfig<T>) {
    return this.request<T>({ ...config, method: "GET" });
  }
  post<T>(config: HYRequestConfig<T>) {
    return this.request<T>({ ...config, method: "POST" });
  }
  put<T>(config: HYRequestConfig<T>) {
    return this.request<T>({ ...config, method: "PUT" });
  }
  delete<T>(config: HYRequestConfig<T>) {
    return this.request<T>({ ...config, method: "DELETE" });
  }
  patch<T>(config: HYRequestConfig<T>) {
    return this.request<T>({ ...config, method: "PATCH" });
  }
}

export default HYRequest;
