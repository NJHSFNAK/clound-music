import React, { memo } from "react";
import type { FC, ReactNode } from "react";

import { RankingItemWrapper } from "./styled";
import type { IPlayList } from "../../network/type";
import { getImageSize } from "@/util/handleImageUrl";
// 约束Props类型
interface IProps {
  children?: ReactNode;
  itemData: IPlayList;
  title: string;
}

const RankingItem: FC<IProps> = (props) => {
  const { itemData, title } = props;
  return (
    <RankingItemWrapper>
      <div className="header">
        <div className="image">
          <img src={getImageSize(itemData?.coverImgUrl, 80)} alt="" className="img" />
          <a href="" className="sprite_cover"></a>
        </div>
        <div className="info">
          <div className="name">{title}</div>
          <div>
            <button className="sprite_02 btn play"></button>
            <button className="sprite_02 btn favor"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {itemData?.tracks.slice(0, 10).map((item: any, index: number) => {
          return (
            <div className="list-item" key={item.id}>
              <div className="rank">{index + 1}</div>
              <div className="info">
                <span className="name text-nowrap">{item.name}</span>
                <div className="operate">
                  <button className="btn sprite_02 play"></button>
                  <button className="btn sprite_icon2 addto"></button>
                  <button className="btn sprite_02 favor"></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <a href="/discover/ranking">查看全部 &gt;</a>
      </div>
    </RankingItemWrapper>
  );
};

// 默认Props值
RankingItem.defaultProps = {};

export default memo(RankingItem);
