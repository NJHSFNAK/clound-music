import React, { memo } from "react";
import type { FC, ReactNode } from "react";

// 约束Props类型
interface IProps {
  children?: ReactNode;
}

const DownLoad: FC<IProps> = (props) => {
  return <div>DownLoad</div>;
};

// 默认Props值
DownLoad.defaultProps = {};

export default memo(DownLoad);
