import React, { memo, useEffect, useRef, useState,useCallback } from "react";

import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { BannerWrapper, BannerControl, BannerLeft, BannerRight } from "./style";
import { getTopBannerAction } from "../../store/actionCreatorgs";
import { Carousel } from "antd";
export default memo(function Topbanner() {
  const dispatch = useDispatch();
  const [currentIndex,setCurrentIndex] = useState(0)
  const bannerRef = useRef();
  let { topBanners } = useSelector((state) => {
    return {
      topBanners: state.getIn(["recommend", "topBanners"]),
    };
  }, shallowEqual);
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  const bannerChange = useCallback((from,to) => {
    setCurrentIndex(to)
  }, []);
  const bgImage = topBanners[currentIndex]&&(topBanners[currentIndex].imageUrl+'?imageView&blur=40x20')
  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" beforeChange={bannerChange} autoplay ref={bannerRef}>
            {topBanners.map((item, index) => {
              return (
                <div className="banner-item" key={index}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              );
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight />
        <BannerControl>
          <button
            className="btn left"
            onClick={(e) => bannerRef.current.prev()}
          ></button>
          <button
            className="btn right"
            onClick={(e) => bannerRef.current.next()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
});
