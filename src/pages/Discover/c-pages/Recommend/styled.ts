import styled from "styled-components";

export const RecommendWrapper = styled.div``;

export const RecommendSection = styled.div`
  border: 1px solid #d3d3d3;
  width: 980px;
  background-image: url(${require("@/assets/images/wrap-bg.png")});
  display: flex;
`;
export const RecommendLeft = styled.div`
  padding: 20px;
  width: 729px;
`;
export const RecommendRight = styled.div`
  width: 250px;
  .n-singer {
    margin-top: 15px;
    padding: 0 20px;
  }
`;
