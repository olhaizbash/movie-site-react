import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
  padding-bottom: 8px;
  position: relative;

  @media (min-width: 768px) {
    padding-top: 12px;
    padding-bottom: 12px;
  }
  @media (min-width: 1280px) {
    padding-top: 6px;
    padding-bottom: 6px;
  }
`;

export const LogoContainer = styled(NavLink)`
  display: flex;
  align-items: center;
`;

export const Logo = styled.svg`
  width: 30px;
  height: 24px;

  @media (min-width: 375px) {
    width: 32px;
    height: 32px;
  }

  @media (min-width: 768px) {
    margin-right: 8px;
    width: 48px;
    height: 48px;
  }
`;

export const LogoText = styled.span`
  display: none;
  color: #282828;

  @media (min-width: 375px) {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }

  @media (min-width: 768px) {
    display: inline-block;
    font-weight: 400;
    font-size: 24px;
    line-height: 1.16;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;

    &:hover,
    &:focus {
      color: #f87719;
    }
  }
`;

export const ButtonMenu = styled.button`
display: none;
    
    @media screen and (max-width: 767px) {
display: block;
outline: none;
background-color: transparent;
border: none;
text-transform: uppercase;
color: #595959;
font-weight: 500;
font-size: 12px;
line-height: 1.16;
    }
}
`;

export const Nav = styled.nav`
  @media screen and (max-width: 767px) {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    display: none;

    &.nav-active {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
      display: block;
      background-color: #fff;
      position: absolute;
      top: 48px;
      left: 0;
      padding: 20px;
      height: 428px;
      border-radius: 0px 0px 8px 0px;
      z-index: 100;
      width: 204px;
      transform: translate(0);
      transition: transform 0.25s ease-in-out;
    }
  }

  @media screen and (max-width: 373px) {
    &.nav-active {
      top: 42px;
    }
  }
`;

export const NavList = styled.ul`
  display: none;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 32px;
  }
`;

export const NavListItem = styled.li`
  &:hover,
  &:focus {
    color: #f87719;
  }
`;

export const NavListPath = styled(NavLink)`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
`;

export const Backdrop = styled.div`
    opacity: 0;
    visibility: hidden;
    pointer-events: none; 

    @media screen and (max-width: 767px) {
&.backdrop-open{
background-color: rgb(0, 0, 0);
opacity: 0.2;
visibility: visible;
pointer-events: auto;
position: absolute;
top: 42;
left: 0;
width: 100%;
height: 100%;
z-index: 2;
}
}
}`;

export const ThemeSwitcher = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
  width: 38px;
  height: 16px;
  background-color: #f87719;
  background: linear-gradient(
    141.22deg,
    #f84119 9.4%,
    rgba(248, 159, 25, 0.68) 91.91%
  );
  border-radius: 194px;
  padding: 5px;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 54px;
    height: 20px;
    gap: 24px;
  }

  @media screen and (min-width: 1280px) {
    width: 60px;
    height: 24px;
    gap: 24px;
  }

  &::before {
    content: "";
    border-radius: 50px;
    background-color: #ffffff;
    position: absolute;

    z-index: 2;

    width: 12px;
    height: 12px;
    transform: translateX(-3px);

    @media screen and (min-width: 768px) {
      top: 20%;
      width: 16px;
      height: 16px;
      transform: translateX(-3px);
    }

    @media screen and (min-width: 1280px) {
      width: 18px;
      height: 18px;
      transform: translateX(-2px);
    }
  }

  &::after {
    content: "";
    position: absolute;
    left: 40px;
    z-index: 2;

    border-width: 0 2px 0 0;
    border-radius: 50px;
    border-style: solid;
    border-color: #f87719;
    background-color: transparent;

    width: 10px;
    height: 10px;
    transform: translateX(-3px) rotate(180deg);

    @media screen and (min-width: 768px) {
      width: 14px;
      height: 14px;
      top: 19%;
      transform: translateX(-3px) rotate(180deg);
    }

    @media screen and (min-width: 1280px) {
      top: 19%;
      width: 15px;
      height: 15px;
      transform: translateX(-2px) rotate(180deg);
    }
  }
`;

export const IconMoon = styled.svg`
  width: 8px;
  height: 8px;

  @media screen and (min-width: 768px) {
    width: 11px;
    height: 11px;
  }
  @media screen and (min-width: 1280px) {
    width: 13px;
    height: 13px;
  }
`;

export const IconSun = styled.svg`
  width: 8px;
  height: 8px;

  @media screen and (min-width: 768px) {
    width: 11px;
    height: 11px;
  }
  @media screen and (min-width: 1280px) {
    width: 13px;
    height: 13px;
  }
`;
