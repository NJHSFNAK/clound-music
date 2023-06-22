import React, { memo } from "react";
import type { FC, ReactNode } from "react";

// 约束Props类型
interface IProps {
  children?: ReactNode;
}

const Djradio: FC<IProps> = (props) => {
  const { children } = props;
  return <div> Djradio</div>;
};

// 默认Props值 Djradio.defaultProps = {};

export default memo(Djradio);
