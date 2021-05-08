import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getHotRecAction } from '../../store/actionCreatorgs'

import { RecommendWrapper } from './style';
import ThemeHeader from '@/components/theme-header-rcm';

export default memo(function () {
    const dispatch = useDispatch();
    useSelector(state => {
        console.log(state);
        return {}
    }, shallowEqual)
    useEffect(() => {
        dispatch(getHotRecAction(8))
    }, [dispatch])
    return (
        <RecommendWrapper>
            <ThemeHeader title="热门推荐" keyword={['华语', '流行', '民谣', '摇滚', '电子']} />
        </RecommendWrapper>
    )
});


