export interface IGetSongDetailDataRes {
  code: number;
  privileges: any[];
  songs: any[];
}

export interface IGetSongLyricDataRes {
  code: number;
  klyric: {
    lyric: string;
    [key: string]: any;
  };
  lrc: {
    lyric: string;
    [key: string]: any;
  };
  [key: string]: any;
}
