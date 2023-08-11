import React, { memo } from "react";
import type { FC, ReactNode } from "react";

import { HotAnchorWrapper } from "./styled";

import { shallowEqualApp, useAppSeletor } from "@/store";
import AreaHeaderV2 from "@/components/area-header-v2";

// 约束Props类型
interface IProps {
  children?: ReactNode;
}

const HotAnchor: FC<IProps> = () => {
  const { hotAnchor } = useAppSeletor(
    (state) => ({
      hotAnchor: state.recommned.hotAnchor
    }),
    shallowEqualApp
  );
  return (
    <HotAnchorWrapper>
      <AreaHeaderV2 title="热门主播"></AreaHeaderV2>
      <div className="anchor-list">
        {hotAnchor.map((item) => {
          return (
            <div className="item" key={item.id}>
              <a href="/discover/djradio" className="image">
                <img src={item.avatarUrl} alt="" />
              </a>
              <div className="info">
                <div className="name">{item.nickName}</div>
                <div className="position">{!item.position ? "暂无组织" : item.position}</div>
              </div>
            </div>
          );
        })}
      </div>
    </HotAnchorWrapper>
  );
};

// 默认Props值
HotAnchor.defaultProps = {};

export default memo(HotAnchor);
