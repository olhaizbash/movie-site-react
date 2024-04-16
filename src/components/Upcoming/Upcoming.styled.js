import styled from "styled-components";

export const SectionUpcoming = styled.section`
  padding: 40px 0px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding-top: 44px;
    padding-bottom: 77px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    padding-top: 60px;
    padding-bottom: 103px;
  }
`;

export const UpcomingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    gap: 28px;
  }
`;

export const UpcomingTitle = styled.h2`
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

export const UpcomingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    flex-direction: row;
    gap: 16px;
    justify-content: center;
    align-items: center;
  }
`;

export const UpcomingPoster = styled.div`
  border-radius: 5px;
  display: block;
  width: 280px;
  height: 406px;
  margin: 0 auto;
  box-shadow: 1px 1px 24px 2px rgba(1, 1, 1, 0.45);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background: linear-gradient(
      307deg,
      rgba(0, 0, 0, 0.2) 23.85%,
      rgba(0, 0, 0, 0) 47.27%
    ),
    url(https://image.tmdb.org/t/p/w500${(props) => props.$imgUrl}) lightgray
      50% / cover no-repeat;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 704px;
    height: 400px;
    background: linear-gradient(
        307deg,
        rgba(0, 0, 0, 0.2) 23.85%,
        rgba(0, 0, 0, 0) 47.27%
      ),
      url(https://image.tmdb.org/t/p/w780${(props) => props.$imgUrl}) lightgray
        50% / cover no-repeat;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 805px;
    height: 458px;
    background: linear-gradient(
        307deg,
        rgba(0, 0, 0, 0.2) 23.85%,
        rgba(0, 0, 0, 0) 47.27%
      ),
      url(https://image.tmdb.org/t/p/w1280${(props) => props.$imgUrl}) lightgray
        50% / cover no-repeat;
  }
`;

export const TitleMovie = styled.h1`
color: ${({ theme }) => theme.color.textchange};
font-family: Roboto;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin: 0;
margin-bottom: 29px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 24px;
    margin-bottom: 24px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    line-height: 32px;
    margin-bottom: 28px;
  }
`;

export const AboutMovieContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-bottom: 15px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    margin-bottom: 13.5px;
  }
`;

export const SubTitleMovie = styled.h2`
  color: ${({ theme }) => theme.color.textchange};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  margin: 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    line-height: normal;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: 16px;
  }
`;

export const SubTitleMovieDesc = styled.p`
  color: ${({ theme }) => theme.color.textchange};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  text-align: end;
  margin: 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: 16px;
  }
`;

export const MovieDesc = styled.p`
  color: ${({ theme }) => theme.color.textchange};
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin: 0;
`;

export const AddLibraryButton = styled.button`
  border-radius: 74px;
  border: 1px solid var(--linear, #ffc226);
  background: transparent;
  padding: 12px 24px;
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: ${({ theme }) => theme.color.textchange};
  cursor: pointer;
  margin-top: 16px;
  transition: background ${({ theme }) => theme.transition.main};

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.color.gradientHover};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    line-height: 16px;
    margin-top: 24px;
  }
`;

export const AboutTextContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 390px;
  }
`;
