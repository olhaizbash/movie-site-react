import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    max-width: 320px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    max-width: 1280px;
    padding-left: 32px;
    padding-right: 32px;
  }
`;
