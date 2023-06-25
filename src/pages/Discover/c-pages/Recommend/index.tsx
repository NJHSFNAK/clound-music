import React, { memo, useEffect } from "react";
import type { FC, ReactNode } from "react";

import { useAppDispatch } from "@/store";
// 引入redux的action
// import { getSwiperDataAction, getHotRecommendAction, getNewAlbumAction } from "./store/index";
import { getRecommendDataAction } from "./store/index";

import Swiper from "./c-cpns/Swiper";
import HotRecommend from "./c-cpns/HotRecommend";
import NewAlbum from "./c-cpns/NewAlbum";
import Ranking from "./c-cpns/Ranking";
import UserLogin from "./c-cpns/UserLogin";
import SettleArtist from "./c-cpns/SettleArtist";
import HotAnchor from "./c-cpns/HotAnchor";
import { RecommendSection, RecommendLeft, RecommendRight } from "./styled";

// 约束Props类型
interface IProps {
  children?: ReactNode;
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    // 传递参数
    dispatch(getRecommendDataAction());
  }, []);

  return (
    <div>
      <Swiper></Swiper>
      <RecommendSection className="wrap-v2">
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
          <Ranking />
        </RecommendLeft>
        <RecommendRight>
          <UserLogin />
          <div className="n-singer">
            <SettleArtist />
            <HotAnchor />
          </div>
        </RecommendRight>
      </RecommendSection>
    </div>
  );
};

// 默认Props值
Recommend.defaultProps = {};

export default memo(Recommend);
