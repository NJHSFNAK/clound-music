import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";

import "normalize.css";
import "./assets/css/reset.scss";
import { BrowserRouter } from "react-router-dom";
// redux
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  // 设置路由的方式
  <BrowserRouter>
    {/* 路由懒加载时下载js是有时间的，因此需要配置异步路由来显示内容，防止白屏 */}
    <Suspense fallback="loading......">
      {/* 共享store */}
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </BrowserRouter>
);
