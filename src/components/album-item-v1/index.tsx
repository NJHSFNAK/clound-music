import React, { memo } from "react";
import type { FC, ReactNode } from "react";

import { ItemWrapper } from "./styled";
import { getImageSize } from "@/util/handleImageUrl";

// 约束Props类型
interface IProps {
  children?: ReactNode;
  itemData: any;
}

const AlbumItemV1: FC<IProps> = (props) => {
  const { itemData } = props;
  return (
    <ItemWrapper>
      <div className="album-image">
        <img src={getImageSize(itemData.picUrl, 120)} alt="" />
        <a className="cover sprite_cover">{itemData.name}</a>
      </div>
      <div className="album-info">
        <div className="name">{itemData.name}</div>
        <div className="artist">{itemData.artist.name}</div>
      </div>
    </ItemWrapper>
  );
};

// 默认Props值
AlbumItemV1.defaultProps = {};

export default memo(AlbumItemV1);
