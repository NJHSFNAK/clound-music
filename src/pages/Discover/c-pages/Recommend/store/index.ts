import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// payload类型
import type { PayloadAction } from "@reduxjs/toolkit";

// 引入要发起网络请求的函数
import {
  getSwiperData,
  getNewAlbumData,
  getHotAnchorData,
  getAllRankingData,
  getHotRecommendData,
  getRankingSongsData,
  getSettleArtistData
} from "../network";
import type { IGetRankingSongsDataRes } from "../network/type";

// initialStatede 类型
interface IInitialState {
  banners: any[];
  hotRecommends: any[];
  newAlbum: any[];
  // 原创榜id
  originalId: number;
  // 新歌榜id
  newSongsId: number;
  // 飙升榜id
  soaringId: number;
  //原创榜歌曲
  originalSongs: any;
  // 新歌榜歌曲
  soaringSongs: any;
  // 飙升榜歌曲
  newSongs: any;
  // 入驻歌手
  settleArtist: any[];
  // 热门主播
  hotAnchor: any[];
}

const initialState: IInitialState = {
  banners: [],
  hotRecommends: [],
  newAlbum: [],
  originalId: -1,
  newSongsId: -1,
  soaringId: -1,
  originalSongs: null,
  soaringSongs: null,
  newSongs: null,
  settleArtist: [],
  hotAnchor: []
};

// redux发起网络请求的，异步action
// createAsyncThunk第一个参数时name是独一无二的，第二个参数是一个函数，函数的第一个参数是传递过来的参数，第二个参数是一个对象，对象中有dispatch方
export const getRecommendDataAction = createAsyncThunk("recommendData", (_, { dispatch }) => {
  getSwiperData().then(({ banners }) => {
    dispatch(setSwiperDataAcition(banners));
  });
  getHotRecommendData(8).then(({ result }) => {
    dispatch(setHotRecommendDataAction(result));
  });
  getNewAlbumData().then(({ albums }) => {
    dispatch(setNewAlbumDataAction(albums));
  });
  getAllRankingData().then(({ list }) => {
    const originalId = list.find((item) => item.name === "原创榜").id;
    const newSongsId = list.find((item) => item.name === "新歌榜").id;
    const soaringId = list.find((item) => item.name === "飙升榜").id;
    // 保存各个榜单的id
    dispatch(setRankingIdAction({ key: "originalId", value: originalId }));
    dispatch(setRankingIdAction({ key: "newSongsId", value: newSongsId }));
    dispatch(setRankingIdAction({ key: "soaringId", value: soaringId }));

    const allPromiseData: Promise<IGetRankingSongsDataRes>[] = [];
    for (const id of [originalId, newSongsId, soaringId]) {
      allPromiseData.push(getRankingSongsData(id));
    }
    Promise.all(allPromiseData)
      .then((res) => {
        // 原创榜歌曲数据
        dispatch(setRankingSongsDataAction({ key: "originalSongs", value: res[0].playlist }));
        // 新歌榜歌曲数据
        dispatch(setRankingSongsDataAction({ key: "newSongs", value: res[1].playlist }));
        // 飙升榜歌曲数据
        dispatch(setRankingSongsDataAction({ key: "soaringSongs", value: res[2].playlist }));
      })
      .catch((err) => {
        console.log("请求超时");
      });
  });
  getSettleArtistData().then((res) => {
    dispatch(getSettleArtistDataAction(res.artists));
  });
  getHotAnchorData().then((res) => {
    dispatch(getHotAnchorDataAction(res.data.list));
  });
});

export const RecommendSlice = createSlice({
  name: "discver/recommend",
  initialState,
  reducers: {
    // 保存banners数据
    setSwiperDataAcition(state, { payload }: PayloadAction<any[]>) {
      state.banners = payload;
    },
    // 保存热门推荐数据
    setHotRecommendDataAction(state, { payload }: PayloadAction<any[]>) {
      state.hotRecommends = payload;
    },
    // 保存新碟上架数据
    setNewAlbumDataAction(state, { payload }: PayloadAction<any[]>) {
      state.newAlbum = payload;
    },
    // 保存飙升榜、新歌榜、原创榜的id
    setRankingIdAction(
      state,
      { payload: { key, value } }: PayloadAction<{ key: "originalId" | "newSongsId" | "soaringId"; value: number }>
    ) {
      state[key] = value;
    },
    // 保存飙升榜、新歌榜、原创榜的歌曲数据
    setRankingSongsDataAction(
      state,
      { payload: { key, value } }: PayloadAction<{ key: "originalSongs" | "soaringSongs" | "newSongs"; value: any }>
    ) {
      state[key] = value;
    },
    // 保存入驻歌手数据
    getSettleArtistDataAction(state, { payload }: PayloadAction<any[]>) {
      state.settleArtist = payload;
    },
    // 保存热门主播数据
    getHotAnchorDataAction(state, { payload }: PayloadAction<any[]>) {
      state.hotAnchor = payload;
    }
  }
});

export default RecommendSlice.reducer;
export const {
  setRankingIdAction,
  setSwiperDataAcition,
  setNewAlbumDataAction,
  getHotAnchorDataAction,
  setHotRecommendDataAction,
  setRankingSongsDataAction,
  getSettleArtistDataAction
} = RecommendSlice.actions;
