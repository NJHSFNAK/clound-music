import React, { memo } from "react";
import type { FC, ReactNode } from "react";

// 导入重写的函数
import { useAppSeletor, useAppDispatch, shallowEqualApp } from "@/store";
// 导入action
import { increment } from "@/store/features/counter";

// 约束Props类型
interface IProps {
  children?: ReactNode;
}

const Recommend: FC<IProps> = () => {
  // 从store中获取数据
  const { name, age } = useAppSeletor(
    (state) => ({
      name: state.counter.name,
      age: state.counter.age
    }),
    shallowEqualApp
  );
  // 派发action
  const dispatch = useAppDispatch();

  const incrementHandle = () => {
    dispatch(increment(1));
  };
  return (
    <div>
      Recommend----{name}---{age}
      <button onClick={incrementHandle}>+1</button>
    </div>
  );
};

// 默认Props值
Recommend.defaultProps = {};

export default memo(Recommend);
