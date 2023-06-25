import React, { memo } from "react";
import type { FC, ReactNode } from "react";

import { NavLink } from "react-router-dom";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { HeaderWrapper, HeaderLeft, HeaderRight } from "./styled";

import headerTitle from "@/assets/data/HeaderTitle";
import { IHeaderTitle } from "@/assets/data/HeaderTitle/type";

// 约束Props类型
interface IProps {
  children?: ReactNode;
}

const AppHeader: FC<IProps> = () => {
  // 展示数据
  const showItem = (item: IHeaderTitle) => {
    if (item.type === "path") {
      return (
        // NavLink会自动添加active类名
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={item.path}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      );
    }
    return <a href={item.path}>{item.title}</a>;
  };
  return (
    <HeaderWrapper>
      <div className="content">
        <HeaderLeft>
          <a className="logo sprite_01" href="/">
            网易云音乐
          </a>
          <div className="select-list">
            {headerTitle.map((item) => {
              return (
                <div className="select-item" key={item.title}>
                  {showItem(item)}
                </div>
              );
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className="search" prefix={<SearchOutlined />} placeholder="音乐/视频/电台/用户" />
          <div className="center">创作者中心</div>
          <div className="login">登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
};

export default memo(AppHeader);
