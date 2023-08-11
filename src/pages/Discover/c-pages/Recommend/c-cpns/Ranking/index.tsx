import React, { memo } from "react";
import type { FC, ReactNode } from "react";

import AreaHeaderV1 from "@/components/area-header-v1";
import RankingItem from "../RankingItem";
import { RankingWrapper } from "./styled";
import { shallowEqualApp, useAppSeletor } from "@/store";

// 约束Props类型
interface IProps {
  children?: ReactNode;
}

const Ranking: FC<IProps> = () => {
  const title = "榜单";
  const keywords = [""];
  const moreText = "更多";
  const moreLink = "/";
  const { originalSongs, soaringSongs, newSongs } = useAppSeletor(
    (state) => ({
      originalSongs: state.recommned.originalSongs,
      soaringSongs: state.recommned.soaringSongs,
      newSongs: state.recommned.newSongs
    }),
    shallowEqualApp
  );
  return (
    <RankingWrapper>
      <AreaHeaderV1 title={title} keywords={keywords} moreText={moreText} moreLink={moreLink} />
      <div className="content">
        <div className="box">
          <RankingItem title="原创榜" itemData={originalSongs}></RankingItem>
        </div>
        <div className="box">
          <RankingItem title="飙升榜" itemData={soaringSongs}></RankingItem>
        </div>{" "}
        <div className="box">
          <RankingItem title="新歌榜" itemData={newSongs}></RankingItem>
        </div>
      </div>
    </RankingWrapper>
  );
};

// 默认Props值
Ranking.defaultProps = {};

export default memo(Ranking);
