import HYRequest from "./request";

import { BASE_URL, TIME_OUT } from "./request/config";

const hyRequst = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // console.log("私有的请求拦截器");
      return config;
    },
    requestInterceptorCatch: (err) => ({ err }),
    responseInterceptor: (data) => {
      // console.log("私有的响应拦截器");
      return data.data;
    },
    responseInterceptorCatch: (err) => err
  }
});

export default hyRequst;
