import io from './index';
export const getTopBanners = () => {
    return io({
        url: "/banner"
    })
}

export const getHotRecmmends = (limit) => io({
    url: '/personalized',
    params: {
        limit
    }
})