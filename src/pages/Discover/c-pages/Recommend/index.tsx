import React, { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";

import hyRequst from "@/network";

// 约束Props类型
interface IProps {
  children?: ReactNode;
}

const Recommend: FC<IProps> = () => {
  const [mv, setMV] = useState<any[]>();
  useEffect(() => {
    hyRequst.get<any>({ url: "/banner" }).then((res) => {
      console.log(res.banners);
      setMV(res.banners);
    });
  }, []);

  return (
    <div>
      Recommend
      <ul>
        {mv &&
          mv.map((item) => {
            return (
              <li key={item.targetId}>
                <img src={item.imageUrl} alt="" />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

// 默认Props值
Recommend.defaultProps = {};

export default memo(Recommend);
