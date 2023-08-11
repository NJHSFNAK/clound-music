import React, { memo } from "react";
import type { FC, ReactNode } from "react";

// 约束Props类型
interface IProps {
  children?: ReactNode;
}

const Songs: FC<IProps> = (props) => {
  return <div>Songs</div>;
};

// 默认Props值
Songs.defaultProps = {};

export default memo(Songs);
