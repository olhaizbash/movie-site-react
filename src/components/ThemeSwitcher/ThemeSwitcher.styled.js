import styled from "styled-components";

export const ToggleContainer = styled.div`
  width: 44px;
  height: 18px;
  border-radius: 194px;
  padding: 0px;
  background: ${({ theme }) => theme.color.gradient};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 60px;
    height: 24px;
    padding: 5px;
  }
`;

export const TogglerIconLight = styled.svg`
  width: 8px;
  height: 8px;
  animation: togglerLight 0.5s linear;
  transform-origin: center right;
  margin-left: 3px;

  @keyframes togglerLight {
    0% {
      transform: translateX(35px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 11px;
    height: 11px;
  }
`;

export const TogglerIconDark = styled.svg`
  width: 8px;
  height: 8px;
  animation: togglerDark 0.5s linear;
  transform-origin: center left;
  margin-left: 30px;

  @keyframes togglerDark {
    0% {
      transform: translateX(-35px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 11px;
    height: 11px;
  }
`;
