import React, { memo } from "react";
import type { FC, ReactNode } from "react";

// 约束Props类型
interface IProps {
  children?: ReactNode;
}

const Rank: FC<IProps> = (props) => {
  const { children } = props;
  return <div>Rank</div>;
};

// 默认Props值
Rank.defaultProps = {};

export default memo(Rank);
