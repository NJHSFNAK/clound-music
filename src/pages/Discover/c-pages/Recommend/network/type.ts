// getSwiperData的返回值类型
export interface IGetSwiperDataRes {
  code: number;
  banners: any[];
}

// getHotRecommendData返回值类型
export interface IGetHotRecommendDataRes {
  code: number;
  result: any[];
  [key: string]: any;
}

// getNewAlbumData返回值类型
export interface IGetNewAlbumDataRes {
  albums: any[];
  code: number;
}

// getAllRankingData 返回值类型
export interface IGetAllRankingDataRes {
  code: number;
  artistToplist: any;
  list: any[];
}
//getRankingSongsData的playlist类型
export interface IPlayList {
  id: number;
  tracks: any[];
  coverImgUrl: string;
  [key: string]: any;
}
//getRankingSongsData 返回值类型
export interface IGetRankingSongsDataRes {
  code: number;
  playlist: IPlayList;
  privileges: any[];
  [key: string]: any;
}

// getSettleArtistData返回值类型
export interface IGetSettleArtistDataRes {
  artists: any[];
  more: boolean;
  code: number;
}
// getHotAnchorData返回值类型
interface IGetHotAnchorData {
  list: any[];
  [key: string]: any;
}
export interface IGetHotAnchorDataRes {
  code: number;
  msg: string;
  data: IGetHotAnchorData;
}
