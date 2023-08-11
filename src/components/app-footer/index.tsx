import React, { memo } from "react";
import type { FC, ReactNode } from "react";

// 约束Props类型
interface IProps {
  children?: ReactNode;
}

const AppFooter: FC<IProps> = (props) => {
  const { children } = props;
  return <div>AppFooter</div>;
};

// 默认Props值
AppFooter.defaultProps = {};

export default memo(AppFooter);
