import styled from "styled-components";
import heroImgMob from "../../images/hero_mob.jpg";
import heroImgMob2x from "../../images/hero_mob_2x.jpg";
import heroImgTab from "../../images/hero_tab.jpg";
import heroImgTab2x from "../../images/hero_tab_2x.jpg";
import heroImgDesc from "../../images/hero.jpg";
import heroImgDesc2x from "../../images/hero_2x.jpg";

export const SectionHero = styled.section`
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 auto;
  background: #6b5f5f;
  background-size: cover;

  background-image: url(${heroImgMob});

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${heroImgMob2x});
  }
  @media screen and (max-width: 767px) {
    max-width: 320px;
    height: 380px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 768px;
    height: 432px;
    background: linear-gradient(83deg, #111 39.6%, rgba(17, 17, 17, 0) 72.95%),
      url(${heroImgTab}) lightgray 99.376% 104.171% no-repeat;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: linear-gradient(83deg, #111 39.6%, rgba(17, 17, 17, 0) 72.95%),
        url(${heroImgTab2x}) lightgray 60.002px -7.221px / 92.376% 104.171% no-repeat;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 1280px;
    height: 720px;
    background: linear-gradient(83deg, #111 36.85%, rgba(17, 17, 17, 0) 60.05%),
      url(${heroImgDesc}) lightgray 91.116% 101.072% no-repeat;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: linear-gradient(
          83deg,
          #111 36.85%,
          rgba(17, 17, 17, 0) 60.05%
        ),
        url(${heroImgDesc2x}) lightgray 116.549px -4px / 91.116% 101.072% no-repeat;
    }
  }
`;

export const Background = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 auto;
  background-size: cover;
background: linear-gradient(86deg, #111 33.63%, rgba(17, 17, 17, 0.00) 76.86%), url(https://image.tmdb.org/t/p/w500${(
  props
) => props.$imgUrl}) transparent -56.778px 0px / 150% 100% no-repeat;


  @media screen and (max-width: 767px) {
    width: 320px;
    height: 380px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 768px;
    height: 432px;
    background: linear-gradient(83deg, #111 39.6%, rgba(17, 17, 17, 0) 72.95%),
      url(https://image.tmdb.org/t/p/w780${(props) =>
        props.$imgUrl}) transparent 99.376% 104.171% no-repeat;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 1280px;
    height: 720px;
    background: linear-gradient(83deg, #111 36.85%, rgba(17, 17, 17, 0) 60.05%),
      url(https://image.tmdb.org/t/p/w1280${(props) =>
        props.$imgUrl}) transparent  91.116% 101.072% no-repeat;
    }
  }
`;

export const HeroTitle = styled.h1`
  color: ${({ theme }) => theme.color.white};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  -webkit-text-stroke-width: 1;
  -webkit-text-stroke-color: #000;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;

  @media screen and (max-width: 767px) {
    font-size: 32px;
    width: 199px;
    height: 114px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 44px;
    width: 332px;
    height: 104px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: 64px;
    width: 464px;
    height: 150px;
  }
`;

export const StartsRate = styled.div``;
export const InputRate = styled.input`
  display: none;
`;

export const HeroParagraph = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 32px;
  text-overflow: ellipsis;
  overflow-y: auto;
  overflow-x: hidden;

  @media screen and (max-width: 767px) {
    font-size: 14px;
    width: 166px;
    height: 80px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 357px;
    font-size: 14px;
    height: 150px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 464px;
    font-size: 16px;
    height: 150px;
  }
`;

export const HeroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (max-width: 767px) {
    padding-top: 40px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding-top: 62px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    padding-top: 169px;
    gap: 16px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const ButtonStart = styled.button`
  color: ${({ theme }) => theme.color.lightBlack};
  text-align: center;
  font-style: normal;
  font-weight: 500;
  
  
  border-radius: 74px;
  background: ${({ theme }) => theme.color.gradient}; 
  transition: background ${({ theme }) => theme.transition.main};
  
  &:hover,
  &:focus{
    background: ${({ theme }) => theme.color.gradientHover};
  }
  );

  @media screen and (max-width: 767px) {
    font-size: 12px;
    line-height: normal;
    padding: 12px 24px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 14px;
    line-height: 20px;
    padding: 10px 24px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: 16px;
    line-height: 24px;
    padding: 12px 24px;
  }
`;

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  position: fixed;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  opacity: 0.2;
  z-index: 1200;
`;
export const ModalContent = styled.div`
  translate: -50% -50%;
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 280px;
  max-height: 100%;
  background: var(--primery-color-white);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: auto;
  z-index: 1200;
  overflow: visible;

  @media screen and (min-width: 768px) {
    min-width: 592px;
  }
`;
