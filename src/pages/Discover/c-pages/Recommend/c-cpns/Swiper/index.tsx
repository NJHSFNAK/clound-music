import React, { memo, useRef, useState } from "react";
import type { FC, ReactNode, ElementRef } from "react";

import { Carousel } from "antd";

import { useAppSeletor, shallowEqualApp } from "@/store";
import { SwiperWrapper, SwiperLeft, SwiperRight, SwiperControl } from "./styled";

// 约束Props类型
interface IProps {
  children?: ReactNode;
}

const Swiper: FC<IProps> = () => {
  // 绑定组件
  const swiperRef = useRef<ElementRef<typeof Carousel>>(null);
  const [current, setCurrent] = useState<number>(0);
  const { banners } = useAppSeletor(
    (state) => ({
      banners: state.recommned.banners
    }),
    shallowEqualApp
  );
  //  按钮处理函数
  const handlePrev = () => {
    swiperRef.current?.prev();
  };
  const handleNext = () => {
    swiperRef.current?.next();
  };
  // 轮播图切换事件
  const onSwiperChange = (current: number) => {
    setCurrent(current);
  };
  let bgImage = banners[current]?.imageUrl;
  if (bgImage) {
    bgImage += "?imageView&blur=40x20";
  }
  return (
    <SwiperWrapper style={{ background: `url(${bgImage}) center center/6000px` }}>
      <div className="banner wrap-v2">
        <SwiperLeft>
          <Carousel autoplay dotPosition="bottom" ref={swiperRef} effect="fade" afterChange={onSwiperChange}>
            {banners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img src={item.imageUrl} alt={item.typeTitle} className="image" />
                </div>
              );
            })}
          </Carousel>
        </SwiperLeft>
        <SwiperRight></SwiperRight>
        <SwiperControl>
          <button className="btn left" onClick={handlePrev}></button>
          <button className="btn right" onClick={handleNext}></button>
        </SwiperControl>
      </div>
    </SwiperWrapper>
  );
};

// 默认Props值
Swiper.defaultProps = {};

export default memo(Swiper);
