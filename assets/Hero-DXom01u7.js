import{u as t,j as i}from"./index-CowjYem8.js";import{C as n}from"./Container-BaXvtXEI.js";const r="/movie-site-react/assets/hero_mob-D4bsknua.jpg",o="/movie-site-react/assets/hero_mob_2x-DVLF-0vp.jpg",a="/movie-site-react/assets/hero_tab-Bns2UM_L.jpg",d="/movie-site-react/assets/hero_tab_2x-r4FNr-wk.jpg",p="/movie-site-react/assets/hero-BM7XBHXv.jpg",s="/movie-site-react/assets/hero_2x-CuRl-OTU.jpg",x=t.section`
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 auto;
  background: #6b5f5f;
  background-size: cover;

  background-image: url(${r});

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${o});
  }
  @media screen and (max-width: 767px) {
    max-width: 320px;
    height: 380px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 768px;
    height: 432px;
    background: linear-gradient(83deg, #111 39.6%, rgba(17, 17, 17, 0) 72.95%),
      url(${a}) lightgray 99.376% 104.171% no-repeat;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: linear-gradient(83deg, #111 39.6%, rgba(17, 17, 17, 0) 72.95%),
        url(${d}) lightgray 60.002px -7.221px / 92.376% 104.171% no-repeat;
    }
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    width: 1280px;
    height: 720px;
    background: linear-gradient(83deg, #111 36.85%, rgba(17, 17, 17, 0) 60.05%),
      url(${p}) lightgray 91.116% 101.072% no-repeat;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: linear-gradient(
          83deg,
          #111 36.85%,
          rgba(17, 17, 17, 0) 60.05%
        ),
        url(${s}) lightgray 116.549px -4px / 91.116% 101.072% no-repeat;
    }
  }
`,c=t.h1`
  color: ${({theme:e})=>e.color.white};
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

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 44px;
    width: 332px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    font-size: 64px;
    width: 464px;
  }
`,m=t.p`
  color: ${({theme:e})=>e.color.white};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 32px;

  @media screen and (max-width: 767px) {
    font-size: 14px;
    width: 166px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 357px;
    font-size: 14px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    width: 464px;
    font-size: 16px;
  }
`,g=t.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (max-width: 767px) {
    padding-top: 40px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding-top: 62px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    padding-top: 169px;
    gap: 16px;
  }
`,h=t.button`
  color: ${({theme:e})=>e.color.lightBlack};
  text-align: center;
  font-style: normal;
  font-weight: 600;
  text-transform: uppercase;
  
  
  border-radius: 74px;
  background: ${({theme:e})=>e.color.gradient}; 
  transition: background ${({theme:e})=>e.transition.main};
  
  &:hover,
  &:focus{
    background: ${({theme:e})=>e.color.gradientHover};
  }
  );

  @media screen and (max-width: 767px) {
    font-size: 12px;
    line-height: normal;
    padding: 12px 24px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 14px;
    line-height: 20px;
    padding: 10px 24px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    font-size: 16px;
    line-height: 24px;
    padding: 12px 24px;
  }
`,u=()=>i.jsxs(x,{children:[i.jsxs(n,{children:[i.jsxs(g,{children:[i.jsx(c,{children:"Let’s Make Your Own Cinema"}),i.jsxs(m,{children:["Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers."," "]})]}),i.jsx(h,{children:"Get Started"})]}),i.jsx("div",{})]});export{u as H};
