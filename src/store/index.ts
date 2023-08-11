import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch, TypedUseSelectorHook, shallowEqual } from "react-redux";

import counter from "./features/counter";
import RecommendStore from "@/pages/Discover/c-pages/Recommend/store";
import playerStore from "@/pages/Player/store";

// 创建store
const store = configureStore({
  reducer: {
    counter: counter,
    recommned: RecommendStore,
    player: playerStore
  },
  // 是否开始调试模式
  devTools: true
});

// 获取store类型
type storeStateType = typeof store.getState;
// 获取根状态返回值的类型
type RootStateType = ReturnType<storeStateType>;
// 获取dispatch类型
type DispatchType = typeof store.dispatch;

// 重写useSelector、useDispatch、shallowEqual
// 定义useSeletor类型
export const useAppSeletor: TypedUseSelectorHook<RootStateType> = useSelector;
// 定义useDispatch类型
export const useAppDispatch: () => DispatchType = useDispatch;
// 导出shallowEqual
export const shallowEqualApp = shallowEqual;

export default store;
