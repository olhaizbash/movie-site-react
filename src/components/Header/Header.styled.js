import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
  padding-bottom: 8px;
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding-top: 12px;
    padding-bottom: 12px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.desctop}) {
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

  @media (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 32px;
    height: 32px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-right: 8px;
    width: 48px;
    height: 48px;
  }
`;

export const LogoText = styled.span`
  display: none;
  color: ${({ theme }) => theme.color.logoText};

  @media (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    display: inline-block;
    font-weight: 400;
    font-size: 24px;
    line-height: 1.16;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.color.orange};
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
color:  ${({ theme }) => theme.color.menuBtn};
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
      background-color: ${({ theme }) => theme.color.pageBg};
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
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    display: flex;
    gap: 32px;
  }
`;

export const NavListItem = styled.li`
  color: ${({ theme }) => theme.color.textchange};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.orange};
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
    &.backdrop-open {
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
`;
