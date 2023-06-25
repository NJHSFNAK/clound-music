import hyRequst from "@/network";
import type {
  IGetSwiperDataRes,
  IGetNewAlbumDataRes,
  IGetHotAnchorDataRes,
  IGetAllRankingDataRes,
  IGetHotRecommendDataRes,
  IGetRankingSongsDataRes,
  IGetSettleArtistDataRes
} from "./type";

// 获取轮播图数据
export const getSwiperData = () => {
  return hyRequst.get<IGetSwiperDataRes>({ url: "/banner" });
};

// 获取热门推荐数据
export const getHotRecommendData = (limit: number) => {
  return hyRequst.get<IGetHotRecommendDataRes>({ url: `/personalized`, params: { limit } });
};

// 获取新碟上架数据
export const getNewAlbumData = () => {
  return hyRequst.get<IGetNewAlbumDataRes>({ url: "/album/newest" });
};

// 获取所有榜单数据
export const getAllRankingData = () => {
  return hyRequst.get<IGetAllRankingDataRes>({ url: "/toplist" });
};

// 获取榜单的歌曲列表
export const getRankingSongsData = (id: number) => {
  return hyRequst.get<IGetRankingSongsDataRes>({ url: "/playlist/detail", params: { id } });
};

// 获取入驻歌手数据
export const getSettleArtistData = () => {
  return hyRequst.get<IGetSettleArtistDataRes>({ url: "/artist/list", params: { type: -1, area: -1, limit: 5 } });
};

// 获取热门主播数据
export const getHotAnchorData = () => {
  return hyRequst.get<IGetHotAnchorDataRes>({ url: "/dj/toplist/newcomer", params: { limit: 5 } });
};
