import React, { lazy } from "react";
// router的类型
import type { RouteObject } from "react-router-dom";

import { Navigate } from "react-router-dom";

// 路由懒加载
const Discover = lazy(() => import("@/pages/Discover/index"));
const Download = lazy(() => import("@/pages/Download/index"));
const Focus = lazy(() => import("@/pages/Focus/index"));
const Mine = lazy(() => import("@/pages/Mine/index"));

const Album = lazy(() => import("@/pages/Discover/c-pages/Album"));
const Songs = lazy(() => import("@/pages/Discover/c-pages/Songs"));
const Artist = lazy(() => import("@/pages/Discover/c-pages/Artist"));
const Djradio = lazy(() => import("@/pages/Discover/c-pages/Djradio"));
const Rank = lazy(() => import("@/pages/Discover/c-pages/Recommend"));
const Recommend = lazy(() => import("@/pages/Discover/c-pages/Recommend"));

const routes: RouteObject[] = [
  // 默认路由
  {
    path: "/",
    element: <Navigate to="/discover" />
  },
  {
    path: "/discover",
    element: <Discover />,
    // 二级路由
    children: [
      {
        path: "/discover",
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: "/discover/recommend",
        element: <Recommend />
      },
      {
        path: "/discover/album",
        element: <Album />
      },
      {
        path: "/discover/songs",
        element: <Songs />
      },
      {
        path: "/discover/artist",
        element: <Artist />
      },
      {
        path: "/discover/djradio",
        element: <Djradio />
      },
      {
        path: "/discover/rank",
        element: <Rank />
      }
    ]
  },
  {
    path: "/download",
    element: <Download />
  },
  {
    path: "/focus",
    element: <Focus />
  },
  {
    path: "/mine",
    element: <Mine />
  }
];

export default routes;
