import { createSlice } from "@reduxjs/toolkit";

// 创建切片
const countSlice = createSlice({
  name: "counter",
  initialState: {
    name: "hxxx",
    age: 20
  },
  reducers: {
    increment: (state, { payload }) => {
      state.age += payload;
    }
  }
});

// 导出actions
export const { increment } = countSlice.actions;
// 导出reducer
export default countSlice.reducer;
