import React, { memo } from "react";
import Banner from "./c-cpns/topbanner/topbanner";
import Hotrecommend from "./c-cpns/hot-recommend";
import Newalbum from './c-cpns/new-album'
import RecommendsRanking from './c-cpns/recommend-ranking'
import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";
function Recommend(props) {
  return (
    <RecommendWrapper>
      <Banner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <Hotrecommend />
          <Newalbum />
          <RecommendsRanking />
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  );
}
export default memo(Recommend);
