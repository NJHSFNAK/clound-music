import React, { Suspense, memo } from "react";
import type { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";

import NavBar from "./c-cpns/NavBar";

// 约束Props类型
interface IProps {
  children?: ReactNode;
}

const Discover: FC<IProps> = () => {
  return (
    <div>
      <NavBar></NavBar>
      {/* 异步路由 */}
      <Suspense fallback="loading2222222....">
        <Outlet />
      </Suspense>
    </div>
  );
};

export default memo(Discover);
