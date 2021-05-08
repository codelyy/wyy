import React, { memo, } from 'react'
import {
    DiscoverWrapper,
    TopMenu
} from './style'
import { renderRoutes } from 'react-router-config'
import { dicoverMenu } from '@/services/local-data'
import { NavLink } from 'react-router-dom'
export default memo(function (props) {
    return (
        <DiscoverWrapper>
            <div className="top">
                <TopMenu className="w1">
                    {
                        dicoverMenu.map((v, i) => {
                            return <NavLink className="item" key={i} to={v.link}>{v.title}</NavLink>
                        })
                    }
                </TopMenu>
            </div>
            {renderRoutes(props.route.route)}
        </DiscoverWrapper>
    )
})
