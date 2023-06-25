import styled from "styled-components";

interface BannerProps {
  bgimage?: string;
}
export const SwiperWrapper = styled.div<BannerProps>`
  /* background: url(${(props) => props?.bgimage || ""}) center center/6000px; */
  .banner {
    height: 270px;
    background-color: red;

    display: flex;
    position: relative;
  }
`;
export const SwiperLeft = styled.div`
  position: relative;
  width: 730px;

  .banner-item {
    overflow: hidden;
    height: 270px;
    .image {
      width: 100%;
    }
  }

  .dots {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    > li {
      margin: 0 2px;

      .item {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(${require("@/assets/images/banner_sprite.png")}) 3px -343px;
        cursor: pointer;

        &:hover,
        &.active {
          background-position: -16px -343px;
        }
      }
    }
  }

  .dotClass {
    /deep/ button {
      width: 10px !important;
      height: 10px !important;
      border-radius: 50%;
    }
  }
`;

// 配置attrs等属性
export const SwiperRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: "_blank",
  title: "下载客户端"
})`
  width: 254px;
  height: 270px;
  background: url(${require("@/assets/images/download.png")});
`;

export const SwiperControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require("@/assets/images/banner_sprite.png")});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .left {
    top: -35px;
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    top: -35px;
    right: -68px;
    background-position: 0 -508px;
  }
`;
