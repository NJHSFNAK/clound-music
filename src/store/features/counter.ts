import { createSlice } from "@reduxjs/toolkit";
// PayloadAction是redux-toolkit提供的类型，用于设置action的payload的类型
import type { PayloadAction } from "@reduxjs/toolkit";

import { IInitialState } from "./type";

// 初始值的类型

// 创建初始值
const initialState: IInitialState = {
  name: "hxxx",
  age: 20,
  dirction: "left"
};

// 创建切片
const countSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // 设置payload的类型
    increment: (state, { payload }: PayloadAction<number>) => {
      state.age += payload;
    }
  }
});

// 导出actions
export const { increment } = countSlice.actions;
// 导出reducer
export default countSlice.reducer;
