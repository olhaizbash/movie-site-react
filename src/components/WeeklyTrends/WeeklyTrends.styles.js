import styled from "styled-components";
import { Link } from "react-router-dom";

export const SectionWeeklyTrends = styled.section`
  padding-top: 40px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding-top: 52px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    padding-top: 80px;
  }
`;

export const WeeklyTrendsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    gap: 28px;
  }
`;

export const WeeklyTrendsHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WeeklyTrendsTitle = styled.h2`
  color: ${({ theme }) => theme.color.textchange};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 24px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: 28px;
  }
`;

export const WeeklyTrendsLinkCategory = styled(Link)`
  color: ${({ theme }) => theme.color.orange};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 24px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: 28px;
  }
`;

export const WeeklyTrendsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    flex-direction: row;
    gap: 16px;
  }
`;

export const WeeklyTrendsItem = styled.li`
  width: 280px;
  height: 406px;
  border-radius: 5px;
  box-shadow: 1px 1px 24px 2px rgba(1, 1, 1, 0.45);
  cursor: pointer;
  position: relative;

  &:hover {
    -webkit-box-shadow: ${({ theme }) => theme.modalBoxShadow.cards};
    -moz-box-shadow: ${({ theme }) => theme.modalBoxShadow.cards};
    box-shadow: ${({ theme }) => theme.modalBoxShadow.cards};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 224px;
    height: 325px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 395px;
    height: 574px;
  }
`;

export const WeeklyTrendsImg = styled.img`
  display: block;
  border-radius: 5px;
  width: 100%;
`;

export const WeeklyTrendsInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  position: absolute;
  left: 0px;
  bottom: 0px;
  background: rgb(94, 90, 92);
  background: radial-gradient(
    circle,
    rgba(94, 90, 92, 1) 0%,
    rgba(0, 0, 0, 0.14889705882352944) 44%
  );
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding: 20px;
  }
`;

export const WeeklyTrendsInfoTitle = styled.h3`
  color: ${({ theme }) => theme.color.white};
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  text-transform: uppercase;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    line-height: 18px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    line-height: normal;
    font-size: 20px;
  }
`;
