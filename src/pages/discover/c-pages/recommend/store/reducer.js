import { Map } from "immutable";
import { CHANGE_TOP_BANNERS, CHANGE_HOT_RECOMMEND } from "./constant";
const defaultState = Map({
  topBanners: [],
  hotRecommend: [],
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_TOP_BANNERS:
      return state.set('topBanners', action.topBanners)
    case CHANGE_HOT_RECOMMEND:
      return state.set('hotRecommend', action.hotRecommend)
    default:
      return state;
  }
}
export default reducer;
