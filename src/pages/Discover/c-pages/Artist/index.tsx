import React, { memo } from "react";
import type { FC, ReactNode } from "react";

// 约束Props类型
interface IProps {
  children?: ReactNode;
}

const Artist: FC<IProps> = (props) => {
  return <div>Artist</div>;
};

// 默认Props值
Artist.defaultProps = {};

export default memo(Artist);
