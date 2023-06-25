import React, { memo } from "react";
import type { FC, ReactNode } from "react";

import { SettleArtistWrapper } from "./styled";
import { getImageSize } from "@/util/handleImageUrl";
import AreaHeaderV2 from "@/components/area-header-v2";

import { shallowEqualApp, useAppSeletor } from "@/store";

// 约束Props类型
interface IProps {
  children?: ReactNode;
}

const SettleArtist: FC<IProps> = (props) => {
  const { children } = props;
  const title = "入驻歌手";
  const moreLink = "/discover/artist";
  const moreText = "查看全部";

  const { settleArtist } = useAppSeletor(
    (state) => ({
      settleArtist: state.recommned.settleArtist
    }),
    shallowEqualApp
  );
  return (
    <SettleArtistWrapper>
      <AreaHeaderV2 title={title} moreLink={moreLink} moreText={moreText} />
      <div className="singer-list">
        {settleArtist.map((item) => {
          return (
            <a href="/singer" key={item.id} className="item">
              <img src={getImageSize(item.img1v1Url, 62)} alt="" />
              <div className="info">
                <div className="singer">{item.name}</div>
                <div className="desc">{item.alias.join("") || item.name}</div>
              </div>
            </a>
          );
        })}
      </div>
      <div className="apply-for">
        <a href="">申请成为网易音乐人</a>
      </div>
    </SettleArtistWrapper>
  );
};

// 默认Props值
SettleArtist.defaultProps = {};

export default memo(SettleArtist);
