import type { IHeaderTitle } from "./type";

const headerTitle: IHeaderTitle[] = [
  {
    path: "/discover",
    type: "path",
    title: "发现音乐"
  },
  {
    path: "/mine",
    type: "path",
    title: "我的音乐"
  },
  {
    path: "/focus",
    type: "path",
    title: "关注"
  },
  {
    path: "https://music.163.com/store/product",
    type: "link",
    title: "商城"
  },
  {
    path: "https://music.163.com/st/musician",
    type: "link",
    title: "音乐人"
  },
  {
    path: "https://music.163.com/st/ad-song/login",
    type: "link",
    title: "云推歌"
  },
  {
    path: "/download",
    type: "path",
    title: "下载客户端"
  }
];

export default headerTitle;
