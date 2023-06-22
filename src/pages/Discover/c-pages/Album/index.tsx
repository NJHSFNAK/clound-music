import React, { memo } from "react";
import type { FC, ReactNode } from "react";

// 约束Props类型
interface IProps {
  children?: ReactNode;
}

const Album: FC<IProps> = (props) => {
  return <div>Album</div>;
};

// 默认Props值
Album.defaultProps = {};

export default memo(Album);
