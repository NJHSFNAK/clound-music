import React, { Suspense, memo } from "react";
import type { FC, ReactNode } from "react";
import { Outlet, Link } from "react-router-dom";

// 约束Props类型
interface IProps {
  children?: ReactNode;
}

const Discover: FC<IProps> = (props) => {
  return (
    <div>
      <Link to="/discover/recommend">推荐</Link>
      <Link to="/discover/rank">排行榜</Link>
      <Link to="/discover/songs">歌单</Link>
      <Link to="/discover/djradio">主播电台</Link>
      <Link to="/discover/artist">歌手</Link>
      <Link to="/discover/album">新碟上架</Link>
      {/* 异步路由 */}
      <Suspense fallback="loading2222222....">
        <Outlet />
      </Suspense>
    </div>
  );
};

// 默认Props值
Discover.defaultProps = {};

export default memo(Discover);
