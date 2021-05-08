import React, { memo } from 'react'
import { HeaderWrapper } from './style'
import PropTypes from 'prop-types'
const HeaderWarp = memo(function (props) {
    const { title, keyword = [] } = props
    return (
        <HeaderWrapper className="sprite_02">
            <div className="left">
                <h3 className="title">{title}</h3>
                <div className="keyword">
                    {
                        keyword.map((item, index) => {
                            return (
                                <div key={index} className="item">
                                    <a href="todo">{item}</a>
                                    <span className="divider">|</span>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
            <div className="right">
                <a href="todo">更多</a>
                <i className="icon sprite_02"></i>
            </div>
        </HeaderWrapper>
    )
})
HeaderWarp.propTypes = {
    title: PropTypes.string.isRequired,
    keyword: PropTypes.array
}
HeaderWarp.defaultProps={
    keyword:[]
}
export default HeaderWarp