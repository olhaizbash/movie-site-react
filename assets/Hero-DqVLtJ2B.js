import{u as s,R as c,j as i,a as w,d as P,b as v,r as l,g as S,e as E,f as _,N as C}from"./index-BoPlhJZW.js";import{C as j}from"./Container-CsVc7dYz.js";const M="/movie-site-react/assets/hero_mob-D4bsknua.jpg",T="/movie-site-react/assets/hero_mob_2x-DVLF-0vp.jpg",L="/movie-site-react/assets/hero_tab-Bns2UM_L.jpg",I="/movie-site-react/assets/hero_tab_2x-r4FNr-wk.jpg",B="/movie-site-react/assets/hero-BM7XBHXv.jpg",D="/movie-site-react/assets/hero_2x-CuRl-OTU.jpg",N=s.section`
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 auto;
  background: #6b5f5f;
  background-size: cover;

  background-image: url(${M});

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${T});
  }
  @media screen and (max-width: 767px) {
    max-width: 320px;
    height: 380px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 768px;
    height: 432px;
    background: linear-gradient(83deg, #111 39.6%, rgba(17, 17, 17, 0) 72.95%),
      url(${L}) lightgray 99.376% 104.171% no-repeat;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: linear-gradient(83deg, #111 39.6%, rgba(17, 17, 17, 0) 72.95%),
        url(${I}) lightgray 60.002px -7.221px / 92.376% 104.171% no-repeat;
    }
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    width: 1280px;
    height: 720px;
    background: linear-gradient(83deg, #111 36.85%, rgba(17, 17, 17, 0) 60.05%),
      url(${B}) lightgray 91.116% 101.072% no-repeat;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: linear-gradient(
          83deg,
          #111 36.85%,
          rgba(17, 17, 17, 0) 60.05%
        ),
        url(${D}) lightgray 116.549px -4px / 91.116% 101.072% no-repeat;
    }
  }
`,F=s.div`
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 auto;
  background-size: cover;
background: linear-gradient(86deg, #111 33.63%, rgba(17, 17, 17, 0.00) 76.86%), url(https://image.tmdb.org/t/p/w500${e=>e.$imgUrl}) transparent -56.778px 0px / 150% 100% no-repeat;


  @media screen and (max-width: 767px) {
    width: 320px;
    height: 380px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 768px;
    height: 432px;
    background: linear-gradient(83deg, #111 39.6%, rgba(17, 17, 17, 0) 72.95%),
      url(https://image.tmdb.org/t/p/w780${e=>e.$imgUrl}) transparent 99.376% 104.171% no-repeat;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    width: 1280px;
    height: 720px;
    background: linear-gradient(83deg, #111 36.85%, rgba(17, 17, 17, 0) 60.05%),
      url(https://image.tmdb.org/t/p/w1280${e=>e.$imgUrl}) transparent  91.116% 101.072% no-repeat;
    }
  }
`,k=s.h1`
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
    height: 114px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 44px;
    width: 332px;
    height: 104px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    font-size: 64px;
    width: 464px;
    height: 150px;
  }
`,H=s.div``;s.input`
  display: none;
`;const y=s.p`
  color: ${({theme:e})=>e.color.white};
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

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 357px;
    font-size: 14px;
    height: 150px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    width: 464px;
    font-size: 16px;
    height: 150px;
  }
`,O=s.div`
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
`,U=s.div`
  display: flex;
  gap: 8px;
`,m=s.button`
  color: ${({theme:e})=>e.color.lightBlack};
  text-align: center;
  font-style: normal;
  font-weight: 500;
  
  
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
`,R=s.div`
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
  background: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`,W=s.div`
  translate: -50% -50%;
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 280px;
  max-height: 90vh;
  background: var(--primery-color-white);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: auto;
  z-index: 1200;

  @media screen and (min-width: 768px) {
    min-width: 592px;
  }
`,A=s.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;var $={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},b=c.createContext&&c.createContext($),K=["attr","size","title"];function G(e,t){if(e==null)return{};var r=V(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function V(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,o;for(o=0;o<n.length;o++)a=n[o],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},g.apply(this,arguments)}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?f(Object(r),!0).forEach(function(n){X(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function X(e,t,r){return t=Y(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Y(e){var t=q(e,"string");return typeof t=="symbol"?t:String(t)}function q(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function z(e){return e&&e.map((t,r)=>c.createElement(t.tag,h({key:r},t.attr),z(t.child)))}function u(e){return t=>c.createElement(J,g({attr:h({},e.attr)},t),z(e.child))}function J(e){var t=r=>{var{attr:n,size:a,title:o}=e,d=G(e,K),x=a||r.size||"1em",p;return r.className&&(p=r.className),e.className&&(p=(p?p+" ":"")+e.className),c.createElement("svg",g({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,d,{className:p,style:h(h({color:e.color||r.color},r.style),e.style),height:x,width:x,xmlns:"http://www.w3.org/2000/svg"}),o&&c.createElement("title",null,o),e.children)};return b!==void 0?c.createElement(b.Consumer,null,r=>t(r)):t($)}function Q(e){return u({tag:"svg",attr:{viewBox:"0 0 536 512"},child:[{tag:"path",attr:{d:"M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"},child:[]}]})(e)}function Z(e){return u({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(e)}function ee(e){return u({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"},child:[]}]})(e)}const te=({currentRate:e})=>{const t=Array.from({length:5},(r,n)=>{let a=n+.5,o=n+1;return i.jsx("span",{children:e>=o?i.jsx(Z,{size:20,color:"#f87719"}):e>=a?i.jsx(Q,{size:20,color:"#f87719"}):i.jsx(ee,{size:20,color:"#f87719"})},n)});return i.jsx(i.Fragment,{children:t})},re=({onClose:e,movieId:t})=>{const r=w(P),n=v();l.useEffect(()=>{const o=d=>{d.code==="Escape"&&e()};return window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[e]),l.useEffect(()=>{n(S(t))},[n,t]);const a=`https://www.youtube.com/embed/${r}`;return i.jsxs(i.Fragment,{children:[i.jsx(R,{onClick:e}),i.jsx(W,{children:i.jsx(A,{src:a,allowFullScreen:!0})})]})},ne=({trends:e,timer:t})=>{let r=e.vote_average*100/10*5/100;const[n,a]=l.useState(!1),o=()=>{a(!0),clearTimeout(t)};return i.jsxs(i.Fragment,{children:[i.jsx(F,{$imgUrl:e.backdrop_path,children:i.jsxs(j,{children:[i.jsxs(O,{children:[i.jsx(H,{children:i.jsx(te,{currentRate:r})}),i.jsx(k,{children:e.title}),i.jsx(y,{children:e.overview})]}),i.jsxs(U,{children:[i.jsx(m,{onClick:o,children:"Watch trailer"}),i.jsx(m,{children:"More details"})]})]})}),n&&i.jsx(re,{onClose:()=>a(!1),movieId:e.id})]})},oe=()=>{const e=v(),t=w(E),[r,n]=l.useState(0),[a,o]=l.useState(null);return l.useEffect(()=>{e(_())},[e]),l.useEffect(()=>{const d=setTimeout(()=>{n(r===19?0:r+1)},1e4);return o(d),()=>clearTimeout(a)},[r]),i.jsx(N,{children:t!==null&&(t==null?void 0:t.length)>0?i.jsx(ne,{trends:t[r],timer:a}):i.jsx(i.Fragment,{children:i.jsxs(j,{children:[i.jsxs(O,{children:[i.jsx(k,{children:"Let’s Make Your Own Cinema"}),i.jsx(y,{children:"Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers."})]}),i.jsx(m,{children:i.jsx(C,{to:"/catalog",children:"Get Started"})})]})})})};export{oe as H};
