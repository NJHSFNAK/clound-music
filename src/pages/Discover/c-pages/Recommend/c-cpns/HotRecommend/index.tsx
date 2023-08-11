import React, { memo, useState } from "react";
import type { FC, ReactNode } from "react";

import { useAppSeletor, useAppDispatch, shallowEqualApp } from "@/store";

import { HotRecommendWrapper } from "./styled";
import AreaHeaderV1 from "@/components/area-header-v1";
import SongsItemV1 from "@/components/songs-item-v1";

// 约束Props类型
interface IProps {
  children?: ReactNode;
}

const HotRecommend: FC<IProps> = () => {
  const [keywords] = useState<string[]>(["华语", "流行", "摇滚", "民谣", "电子"]);
  const moreLink = "/";
  const moreText = "更多";
  const { hotRecommends } = useAppSeletor(
    (state) => ({
      hotRecommends: state.recommned.hotRecommends
    }),
    shallowEqualApp
  );
  return (
    <HotRecommendWrapper>
      <AreaHeaderV1 title="热门推荐" keywords={keywords} moreText={moreText} moreLink={moreLink}></AreaHeaderV1>
      <div className="recommend-list">
        {hotRecommends.map((item) => {
          return <SongsItemV1 itemData={item} key={item.id}></SongsItemV1>;
        })}
      </div>
    </HotRecommendWrapper>
  );
};

// 默认Props值
HotRecommend.defaultProps = {};

export default memo(HotRecommend);
