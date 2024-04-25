import styled from "styled-components";

export const FooterSection = styled.section`
  padding: 20px 0px;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const TextFooterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const TextFooter = styled.p`
  color: ${({ theme }) => theme.color.textchange};
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const FooterIconLove = styled.svg`
  width: 24px;
  height: 24px;
`;

export const FooterIconSocial = styled.svg`
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.color.logoText};
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    fill: ${({ theme }) => theme.color.orange};
  }
`;

export const FooterList = styled.ul`
  display: flex;
  gap: 10px;
`;

export const FooterLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`;
