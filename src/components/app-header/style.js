import styled from "styled-components";
export const HeaderWrapper = styled.div`
  height: 75px;
  font-size: 14px;
  background: #242424;
  border-bottom: 1px solid #000;
  position: relative;
  box-sizing: border-box;
  color: #fff;
  & > .content {
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  > .disvier {
    height: 5px;
    background-color: #c20c0c;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  .logo {
    display: inline-block;
    width: 157px;
    height: 69px;
    margin-right: 20px;
    box-sizing: border-box;
    background: url(${require("@/assets/img/topbar.png").default}) no-repeat 0
      9999px;
    background-position: 0 0;
    text-indent:-9999px;
  }
  .select_link {
    display: flex;
    justify-content: space-around;
    align-items: center;
    line-height: 70px;
    margin-bottom: 0px;
    > li {
      box-sizing: border-box;
      height: 100%;
      > a {
        position: relative;
        padding: 0 19px;
        font-size: 16px;
        font-weight: bold;
        color: #ccc;
        text-decoration: none;
        display: inline-block;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        &.active,
        &:hover {
          background: #000;
          cursor: pointer;
          color: #fff;
        }
        &.active {
          & > i {
            display: block;
            position: absolute;
            left: 50%;
            bottom: -2px;
            width: 12px;
            height: 7px;
            margin-left: -6px;
            overflow: hidden;
            background: url(${require("@/assets/img/topbar.png").default})
              no-repeat center;
            background-position: -226px 0;
          }
        }
      }
    }
  }
`;

export const HeaderRight = styled.div`
display:flex;
align-items:center;
  > .ant-input-affix-wrapper {
    width: 200px;
    height: 32px;
    border-radius: 32px;
  }
  >.center{
    margin-left: 17px;
    margin-right: 15px;
    width: 90px;
    height: 32px;
    border-radius:16px;
    border:1px solid #4F4F4F;
    box-sizing:border-box;
    text-align:center;
    line-height:32px;
    transition:all .3s;
    color:#ddd;
    &:hover{
        border-color:#fff;
        color:#fff;
    }
    +div{
        color:#787878;
        transition: all .3s;
        &:hover{
            color:#999;
            text-decoration:underline;
            cursor: pointer;
        }
    }
  }
`;
