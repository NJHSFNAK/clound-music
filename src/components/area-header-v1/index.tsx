import React, { memo } from "react";
import type { FC, ReactNode } from "react";

import { Link } from "react-router-dom";

import { HeaderV1Wrapper } from "./styled";

// 约束Props类型
interface IProps {
  title: string;
  children?: ReactNode;
  keywords: string[];
  moreText: string;
  moreLink: string;
}

const AreaHeaderV1: FC<IProps> = (props) => {
  const { title, keywords, moreLink, moreText } = props;
  return (
    <HeaderV1Wrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keywords">
          {keywords.length > 0 &&
            keywords.map((item) => {
              return (
                <div className="item" key={item}>
                  <span className="link">{item}</span>
                  <span className="divider">|</span>
                </div>
              );
            })}
        </div>
      </div>
      <div className="right">
        <Link to={moreLink}>{moreText}</Link>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderV1Wrapper>
  );
};

// 默认Props值
AreaHeaderV1.defaultProps = {};

export default memo(AreaHeaderV1);
