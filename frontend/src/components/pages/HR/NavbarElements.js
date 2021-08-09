import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

export const Nav = styled.nav`
  background: #000;
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw-100px) / 2);
  z-index: 10;

`
export const NavLink = styled(Link)`
  color: #fff;    //color of personal , eductaion,skills, etc ..
  display: flex;
  align-items: center;
  text-decoration: none;
  // padding: 25px 20px;
  padding-left : 20px;
  padding-top : 12px;
  height: 100%;
  cursor: pointer;
  &.active {
      color: #fffff;  // the color when we click on logo personal,education,etc
  }
`
export const Bars = styled(FaBars)`
  display: none;
  color: #010606;
  @media screen and (max-width:768px) {
      display: block;
      position: absolute;
      top= 0;
      right= 0;
      transform: translated(-100%, 75%);
      font-size: 1.8rem;
      cursor: pointer;
  }
`
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
      display: none;
  }
`
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
      display: none;
  }
`
export const NavBtnLink = styled(Link)`
  border-radius: 40px;
  margin: 10px;
  width: 111px;
  font-size: 18px;
  padding: 6px 22px;
  color: #fff;
  border: 0px;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  text-decoration: none;
  &:hover {
    color: #94beb2;
  }
`;
