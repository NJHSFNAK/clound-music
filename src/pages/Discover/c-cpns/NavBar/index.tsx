import React, { memo } from "react";
import type { FC, ReactNode } from "react";

import discoverMenu from "@/assets/data/DiscoverMenu";
import { NavLink } from "react-router-dom";

import { DiscoverWrapper } from "./styled";

// 约束Props类型
interface IProps {
  children?: ReactNode;
}

const NavBar: FC<IProps> = () => {
  return (
    <DiscoverWrapper>
      <div className="top">
        <div className="nav wrap-v1">
          {discoverMenu.map((item) => {
            return (
              <div className="item" key={item.title}>
                <NavLink to={item.link} className={({ isActive }) => (isActive ? "active" : "")}>
                  {item.title}
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </DiscoverWrapper>
  );
};

// 默认Props值
NavBar.defaultProps = {};

export default memo(NavBar);
