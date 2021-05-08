import { Redirect } from "react-router-dom";
import React from 'react'
import Discover from "@/pages/discover";
import My from "@/pages/mine";
import Firends from "@/pages/friends";

//  二级菜单

import recommend from '../pages/discover/c-pages/recommend'
// import artist from '../pages/discover/c-pages/artist'
import album from '../pages/discover/c-pages/album'
import djradio from '../pages/discover/c-pages/djradio'
import ranking from '../pages/discover/c-pages/ranking'
import songs from '../pages/discover/c-pages/songs'
const routers = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: "/discover",
    component: Discover,
    route: [
      {
        path: "/discover",
        exact: true,
        render: () => (<Redirect to="/discover/recommend" />)
      },
      {
        path: "/discover/recommend",
        component: recommend
      },
      // {
      //   path: "/discover/artist",
      //   component: artist
      // },
      {
        path: "/discover/album",
        component: album
      },
      {
        path: "/discover/djradio",
        component: djradio
      },
      {
        path: "/discover/ranking",
        component: ranking
      },
      {
        path: "/discover/songs",
        component: songs
      },
    ]
  },
  {
    path: "/my",
    component: My,
  },
  {
    path: "/friends",
    component: Firends,
  },
];
export default routers;
