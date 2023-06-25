import React, { memo, useRef } from "react";
import type { FC, ReactNode, ElementRef } from "react";
import { Carousel } from "antd";

import { useAppSeletor, shallowEqualApp } from "@/store";

import AreaHeaderV1 from "@/components/area-header-v1";
import AlbumItemV1 from "@/components/album-item-v1";
import { NewAlbumWrapper } from "./styled";

// 约束Props类型
interface IProps {
  children?: ReactNode;
}

const NewAlbum: FC<IProps> = () => {
  const title = "新碟上架";
  const keywords: string[] = [""];
  const moreText = "更多";
  const moreLink = "/discover/album";

  const albumRef = useRef<ElementRef<typeof Carousel>>(null);

  // 事件处理函数
  // 上一页
  const swiperLeftHandle = () => {
    albumRef.current?.prev();
  };
  // 下一页
  const swiperRightHandle = () => {
    albumRef.current?.next();
  };

  // 获取redux中的数据
  const { NewAlbums } = useAppSeletor(
    (state) => ({
      NewAlbums: state.recommned.newAlbum
    }),
    shallowEqualApp
  );

  return (
    <NewAlbumWrapper>
      <AreaHeaderV1 title={title} keywords={keywords} moreText={moreText} moreLink={moreLink}></AreaHeaderV1>
      <div className="content">
        <div className="arrow arrow-left sprite_02" onClick={swiperLeftHandle}></div>
        <div className="album">
          <Carousel ref={albumRef} speed={1500} dots={false} infinite>
            {[0, 1].map((item) => {
              return (
                <div className="page" key={item}>
                  {NewAlbums.slice(item * 5, (item + 1) * 5).map((item) => {
                    return <AlbumItemV1 key={item.id} itemData={item} />;
                  })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="arrow arrow-right sprite_02" onClick={swiperRightHandle}></div>
      </div>
    </NewAlbumWrapper>
  );
};

// 默认Props值
NewAlbum.defaultProps = {};

export default memo(NewAlbum);
