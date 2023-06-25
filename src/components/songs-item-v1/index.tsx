import React, { memo } from "react";
import type { FC, ReactNode } from "react";

import { ItemV1Wrapper } from "./styled";
import { formatCount } from "@/util/format";

// 约束Props类型
interface IProps {
  children?: ReactNode;
  itemData: any;
}
type imageUrlType = (url: string, width: number, height: number) => string;
const setImageSize: imageUrlType = (url, width, height) => `${url}?param=${width}*${height}`;

const SongsItemV1: FC<IProps> = (props) => {
  const { itemData } = props;
  return (
    <ItemV1Wrapper>
      <div className="cover-top">
        <img src={setImageSize(itemData.picUrl, 140, 140)} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon headset"></i>
              {formatCount(itemData.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">{itemData.name}</div>
    </ItemV1Wrapper>
  );
};

// 默认Props值
SongsItemV1.defaultProps = {};

export default memo(SongsItemV1);
