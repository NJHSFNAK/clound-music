import hyRequst from "@/network";

import { IGetSongDetailDataRes, IGetSongLyricDataRes } from "./type";

// 获取歌词详情
export const getSongDetailData = (id: number) => {
  return hyRequst.get<IGetSongDetailDataRes>({ url: "/song/detail", params: { ids: id } });
};

// 获取歌词
export const getSongLyricData = (id: number) => {
  return hyRequst.get<IGetSongLyricDataRes>({ url: "/lyric", params: { id } });
};
