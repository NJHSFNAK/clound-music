import React, { memo } from "react";
import type { FC, ReactNode } from "react";

import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

// 约束Props类型
interface IProps {
  children?: ReactNode;
}

const NotFound: FC<IProps> = (props) => {
  const navigate = useNavigate();
  const toHomePageHandle = () => {
    navigate("/");
  };
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="对不起，页面找不到了！"
        extra={
          <Button type="primary" onClick={toHomePageHandle}>
            返回首页
          </Button>
        }
      />
    </div>
  );
};

// 默认Props值
NotFound.defaultProps = {};

export default memo(NotFound);
