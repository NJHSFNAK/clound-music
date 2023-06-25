import React, { memo, Suspense, useEffect } from "react";
import type { FC } from "react";

import { useRoutes } from "react-router-dom";
import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";

import AppPlayerBar from "./pages/Player/AppPlayerBar";
// 引入路由配置表
import routes from "./router";
import { useAppDispatch } from "./store";
import { getSongDetailAction } from "@/pages/Player/store";

const App: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getSongDetailAction());
  }, []);
  // 使用useRoutes加载路由
  return (
    <div>
      <AppHeader />
      {/* 路由懒加载时下载js是有时间的，因此需要配置异步路由来显示内容，防止白屏 */}
      <Suspense fallback="loading......">{useRoutes(routes)}</Suspense>
      <AppPlayerBar />
      {/* <AppFooter /> */}
    </div>
  );
};

export default memo(App);
