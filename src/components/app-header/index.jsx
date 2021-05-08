import React, { memo } from "react";

import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";

import { nav } from "@/common/local-data";
import { NavLink } from "react-router-dom";
import { Input } from "antd";
import { SearchOutlined } from '@ant-design/icons'
export default memo(function index() {
  const showSelect = (item, index) => {
    if (index < 3) {
      return (
        <NavLink exact key={item.title} to={item.link}>
          {item.title}
          <i className="icon"></i>
        </NavLink>
      );
    } else {
      return (
        <a key={item.title} href={item.link} target="brank">
          {item.title}
        </a>
      );
    }
  };
  return (
    <HeaderWrapper>
      <div className="content w1">
        <HeaderLeft>
          <a href="#/" className="logo" >网易云音乐</a>
          <ul className="select_link">
            {nav.map((item, index) => {
              return <li key={item.title}>{showSelect(item, index)}</li>;
            })}
          </ul>
        </HeaderLeft>
        <HeaderRight>
          <Input placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
          <div className="center">创作者中心</div>
          <div>登录</div>
        </HeaderRight>
      </div>
      <div className="disvier"></div>
    </HeaderWrapper>
  );
});
