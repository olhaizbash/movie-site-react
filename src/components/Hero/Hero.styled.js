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

  @media screen and (min-width: 768px) {
    width: 768px;
    height: 432px;
    background: linear-gradient(83deg, #111 39.6%, rgba(17, 17, 17, 0) 72.95%),
      url(${heroImgTab}) lightgray 92.376% 104.171% no-repeat;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: linear-gradient(83deg, #111 39.6%, rgba(17, 17, 17, 0) 72.95%),
        url(${heroImgTab2x}) lightgray 58.002px -7.221px / 92.376% 104.171% no-repeat;
    }
  }

  @media screen and (min-width: 1280px) {
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
        url(${heroImgDesc2x}) lightgray 113.549px -4px / 91.116% 101.072% no-repeat;
    }
  }
`;

export const HeroTitle = styled.h1`
  font-family: Roboto;
  color: var(--White, #fff);
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
  }

  @media screen and (min-width: 768px) {
    font-size: 44px;
    width: 332px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 64px;
    width: 464px;
  }
`;

export const HeroParagraph = styled.p`
  color: #f8f8f8;
  font-family: Roboto;

  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-bottom: 32px;

  @media screen and (max-width: 767px) {
    font-size: 14px;
    width: 166px;
  }

  @media screen and (min-width: 768px) {
    width: 357px;
    font-size: 14px;
  }

  @media screen and (min-width: 1280px) {
    width: 464px;
    font-size: 16px;
  }
`;

export const HeroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (max-width: 767px) {
    padding-top: 40px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 62px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 169px;
    gap: 16px;
  }
`;

export const ButtonStart = styled.button`
  color: var(--Background, #111);
  text-align: center;
  font-family: Roboto;
  
  font-style: normal;
  font-weight: 500;
  
  
  border-radius: 74px;
  background: linear-gradient(141deg, #ffc226 9.4%, #f84119 91.91%); 
  
  &:hover{
    background: linear-gradient(141deg, #f84119 9.4%, rgba(248, 159, 25, 0.68) 91.91%) ;}
  );

  @media screen and (max-width: 767px) {
    font-size: 12px;
    line-height: normal;
    padding: 12px 24px;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 20px;
    padding: 10px 24px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    padding: 12px 24px;
  }
`;
