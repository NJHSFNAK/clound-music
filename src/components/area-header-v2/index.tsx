import React, { memo } from "react";
import type { FC, ReactNode } from "react";

import { AreaHeaderWrapper } from "./styled";

// 约束Props类型
interface IProps {
  children?: ReactNode;
  title: string;
  moreLink?: string;
  moreText?: string;
}

const AreaHeaderV2: FC<IProps> = (props) => {
  const { title, moreLink, moreText } = props;
  return (
    <AreaHeaderWrapper>
      <h3 className="title">{title}</h3>
      {moreLink && moreText && <a href={moreLink}>{moreText} &gt;</a>}
    </AreaHeaderWrapper>
  );
};

// 默认Props值
AreaHeaderV2.defaultProps = {};

export default memo(AreaHeaderV2);
