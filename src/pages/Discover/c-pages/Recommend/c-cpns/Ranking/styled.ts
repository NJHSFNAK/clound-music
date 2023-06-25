import styled from "styled-components";

export const RankingWrapper = styled.div`
  .content {
    width: 688px;
    height: 472px;
    margin-top: 20px;
    padding-left: 1px;
    /* 使用require引入图片 */
    background-image: url(${require("@/assets/images/recommend-top-bg.png")});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    .box {
      width: 230px;
      &:last-child {
        width: 228px;
      }
    }
  }
`;
