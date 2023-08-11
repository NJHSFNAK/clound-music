import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";

import "normalize.css";
import "./assets/css/index.less";
import { BrowserRouter } from "react-router-dom";
// redux
import { Provider } from "react-redux";

// 配置主题颜色
import { ThemeProvider } from "styled-components";
import store from "./store";
import theme from "./assets/theme";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  // 设置路由的方式
  <BrowserRouter>
    {/* 共享store */}
    <Provider store={store}>
      {/* 配置主题颜色 */}
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);
