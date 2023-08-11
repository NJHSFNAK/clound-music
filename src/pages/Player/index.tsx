import React, { memo, useEffect } from "react";
import type { FC, ReactNode } from "react";

// 约束Props类型
interface IProps {
  children?: ReactNode;
}

const Player: FC<IProps> = (props) => {
  const { children } = props;
  return <div>Player</div>;
};

// 默认Props值
Player.defaultProps = {};

export default memo(Player);
