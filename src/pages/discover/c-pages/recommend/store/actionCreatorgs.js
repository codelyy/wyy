import { CHANGE_TOP_BANNERS, CHANGE_HOT_RECOMMEND } from "./constant";
import { getTopBanners, getHotRecmmends } from "network/recommend";

export const changeBannerAction = (topBanners) => ({
  type: CHANGE_TOP_BANNERS,
  topBanners
});
export const changeRecmmendAction=(hotRecommend)=>({
  type:CHANGE_HOT_RECOMMEND,
  hotRecommend
});
export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      dispatch(changeBannerAction(res.banners));
    });
  };
};
export const getHotRecAction = (limit) => {
  return dispatch => {
    getHotRecmmends(limit).then(res => {
      dispatch(changeRecmmendAction(res.result))
    });
  };
};