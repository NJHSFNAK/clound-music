import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { parseLyric } from "@/util/parseLyric";
import type { ILyric } from "@/util/parseLyric";

import { getSongDetailData, getSongLyricData } from "../network";

interface IInitialState {
  songDetail: any;
  songLyric: string;
}

const initialState: IInitialState = {
  songDetail: {},
  songLyric: ""
};

export const getSongDetailAction = createAsyncThunk("songsDetail", async (_, { dispatch }) => {
  const ID = 212233;
  // 获取歌曲详情数据
  getSongDetailData(ID).then(({ songs }) => {
    dispatch(setSongDetailAction(songs[0]));
  });
  // 获取歌词数据
  getSongLyricData(ID).then((res) => {
    const lyric = res.lrc.lyric;
    // 对歌词进行处理
    const data: ILyric[] = parseLyric(lyric);
    dispatch(setSongLyricDataAction(data));
  });
});

const playSlice = createSlice({
  name: "playSlice",
  initialState,
  reducers: {
    // 保存歌曲详情数据
    setSongDetailAction(state, { payload }: PayloadAction<any>) {
      state.songDetail = payload;
    },
    // 保存歌词数据
    setSongLyricDataAction(state, { payload }: PayloadAction<any>) {
      state.songLyric = payload;
      console.log(payload);
    }
  }
});

export default playSlice.reducer;
export const { setSongDetailAction, setSongLyricDataAction } = playSlice.actions;
