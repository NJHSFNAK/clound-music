import React, { memo } from "react";
import type { FC } from "react";

import { useRoutes, Link } from "react-router-dom";

// 引入路由配置表
import routes from "./router/index.tsx";

const App: FC = () => {
  // 使用useRoutes加载路由
  return (
    <div>
      <Link to="/discover">发现</Link>
      <Link to="/download">下载</Link>
      <Link to="/focus">关注</Link>
      <Link to="/mine">我的</Link>

      {useRoutes(routes)}
    </div>
  );
};

export default memo(App);
