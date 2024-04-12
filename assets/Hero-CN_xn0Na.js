function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Preview-InKUJMDn.js","assets/index-BZh9yZGJ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{u as p,R as T,j as i,g as Pt,r as _,_ as Ot,d as G,e as Tt,a as le,f as St,b as ce,h as jt,i as Et,k as $t,l as kt,m as Ct,N as At}from"./index-BZh9yZGJ.js";import{c as Mt,C as Ee}from"./sprite-Bi6D5Nm1.js";const Rt="/movie-site-react/assets/hero_mob-D4bsknua.jpg",Lt="/movie-site-react/assets/hero_mob_2x-DVLF-0vp.jpg",It="/movie-site-react/assets/hero_tab-Bns2UM_L.jpg",Dt="/movie-site-react/assets/hero_tab_2x-r4FNr-wk.jpg",Ut="/movie-site-react/assets/hero-BM7XBHXv.jpg",Nt="/movie-site-react/assets/hero_2x-CuRl-OTU.jpg",Ht=p.section`
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 auto;
  background: #6b5f5f;
  background-size: cover;

  background-image: url(${Rt});

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${Lt});
  }
  @media screen and (max-width: 767px) {
    max-width: 320px;
    height: 380px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 768px;
    height: 432px;
    background: linear-gradient(83deg, #111 39.6%, rgba(17, 17, 17, 0) 72.95%),
      url(${It}) lightgray 99.376% 104.171% no-repeat;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: linear-gradient(83deg, #111 39.6%, rgba(17, 17, 17, 0) 72.95%),
        url(${Dt}) lightgray 60.002px -7.221px / 92.376% 104.171% no-repeat;
    }
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    width: 1280px;
    height: 720px;
    background: linear-gradient(83deg, #111 36.85%, rgba(17, 17, 17, 0) 60.05%),
      url(${Ut}) lightgray 91.116% 101.072% no-repeat;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: linear-gradient(
          83deg,
          #111 36.85%,
          rgba(17, 17, 17, 0) 60.05%
        ),
        url(${Nt}) lightgray 116.549px -4px / 91.116% 101.072% no-repeat;
    }
  }
`,zt=p.div`
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
`,$e=p.h1`
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
`,Bt=p.div``;p.input`
  display: none;
`;const ke=p.p`
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
`,Ce=p.div`
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
`,Vt=p.div`
  display: flex;
  gap: 8px;
`,ae=p.button`
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
`,Ae=p.div`
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
`,Ft=p.div`
  translate: -50% -50%;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1200;
  overflow: visible;
  padding: 52px 16px 52px 16px;
  min-width: 280px;
  border-radius: 16px;
  background: ${({theme:e})=>e.color.pageBg};
  box-shadow: ${({theme:e})=>e.modalBoxShadow.modal};

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 704px;
    height: 488px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    width: 704px;
    height: 588px;
  }
`,Kt=p.div`
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
`,Wt=p.div`
  display: flex;
  flex-direction: column;
  gap: 22px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    flex-direction: row;
    gap: 16px;
    justify-content: center;
    align-items: center;
  }
`,Yt=p.button`
  position: absolute;
  top: 24px;
  right: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: transparent;
  cursor: pointer;
`,Xt=p.svg`
  width: 100%;
  height: 100%;
  stroke: ${({theme:e})=>e.color.logoText};
  transition: stroke ${({theme:e})=>e.transition.main};

  &:hover,
  &:focus {
    stroke: ${({theme:e})=>e.color.orange};
  }
`,qt=p.img`
  border-radius: 5px;
  display: block;
  width: 248px;
  height: 315px;
  margin: 0 auto;
  box-shadow: ${({theme:e})=>e.modalBoxShadow.modal};

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 294px;
    height: 400px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    width: 375px;
    height: 478px;
  }
`,Gt=p.h1`
color: ${({theme:e})=>e.color.textchange};
font-family: Roboto;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin: 0;
margin-bottom: 29px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 24px;
    margin-bottom: 24px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    line-height: 32px;
    margin-bottom: 28px;
  }
`,J=p.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 15px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    margin-bottom: 13.5px;
  }
`,z=p.h2`
  color: ${({theme:e})=>e.color.textchange};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  margin: 0;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    line-height: normal;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    font-size: 16px;
  }
`,Z=p.p`
  color: ${({theme:e})=>e.color.textchange};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  text-align: end;
  margin: 0;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    font-size: 16px;
  }
`,Jt=p.p`
  color: ${({theme:e})=>e.color.textchange};
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin: 0;
`,Zt=p.button`
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
  color: ${({theme:e})=>e.color.textchange};
  cursor: pointer;
  margin-top: 16px;
  transition: background ${({theme:e})=>e.transition.main};

  &:hover,
  &:focus {
    background: ${({theme:e})=>e.color.gradientHover};
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    line-height: 16px;
    margin-top: 24px;
  }
`;var Me={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ge=T.createContext&&T.createContext(Me),Qt=["attr","size","title"];function er(e,t){if(e==null)return{};var r=tr(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function tr(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,o;for(o=0;o<n.length;o++)a=n[o],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}function F(){return F=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},F.apply(this,arguments)}function be(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function K(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?be(Object(r),!0).forEach(function(n){rr(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):be(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function rr(e,t,r){return t=nr(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function nr(e){var t=ar(e,"string");return typeof t=="symbol"?t:String(t)}function ar(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Re(e){return e&&e.map((t,r)=>T.createElement(t.tag,K({key:r},t.attr),Re(t.child)))}function pe(e){return t=>T.createElement(or,F({attr:K({},e.attr)},t),Re(e.child))}function or(e){var t=r=>{var{attr:n,size:a,title:o}=e,s=er(e,Qt),c=a||r.size||"1em",l;return r.className&&(l=r.className),e.className&&(l=(l?l+" ":"")+e.className),T.createElement("svg",F({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,s,{className:l,style:K(K({color:e.color||r.color},r.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),o&&T.createElement("title",null,o),e.children)};return ge!==void 0?T.createElement(ge.Consumer,null,r=>t(r)):t(Me)}function ir(e){return pe({tag:"svg",attr:{viewBox:"0 0 536 512"},child:[{tag:"path",attr:{d:"M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"},child:[]}]})(e)}function sr(e){return pe({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(e)}function lr(e){return pe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"},child:[]}]})(e)}const cr=({currentRate:e})=>{const t=Array.from({length:5},(r,n)=>{let a=n+.5,o=n+1;return i.jsx("span",{children:e>=o?i.jsx(sr,{size:20,color:"#f87719"}):e>=a?i.jsx(ir,{size:20,color:"#f87719"}):i.jsx(lr,{size:20,color:"#f87719"})},n)});return i.jsx(i.Fragment,{children:t})};var pr=function(t){return ur(t)&&!dr(t)};function ur(e){return!!e&&typeof e=="object"}function dr(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||yr(e)}var fr=typeof Symbol=="function"&&Symbol.for,hr=fr?Symbol.for("react.element"):60103;function yr(e){return e.$$typeof===hr}function mr(e){return Array.isArray(e)?[]:{}}function L(e,t){return t.clone!==!1&&t.isMergeableObject(e)?k(mr(e),e,t):e}function gr(e,t,r){return e.concat(t).map(function(n){return L(n,r)})}function br(e,t){if(!t.customMerge)return k;var r=t.customMerge(e);return typeof r=="function"?r:k}function vr(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function ve(e){return Object.keys(e).concat(vr(e))}function Le(e,t){try{return t in e}catch{return!1}}function _r(e,t){return Le(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function wr(e,t,r){var n={};return r.isMergeableObject(e)&&ve(e).forEach(function(a){n[a]=L(e[a],r)}),ve(t).forEach(function(a){_r(e,a)||(Le(e,a)&&r.isMergeableObject(t[a])?n[a]=br(a,r)(e[a],t[a],r):n[a]=L(t[a],r))}),n}function k(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||gr,r.isMergeableObject=r.isMergeableObject||pr,r.cloneUnlessOtherwiseSpecified=L;var n=Array.isArray(t),a=Array.isArray(e),o=n===a;return o?n?r.arrayMerge(e,t,r):wr(e,t,r):L(t,r)}k.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(n,a){return k(n,a,r)},{})};var xr=k,Ie=xr,_e=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function Pr(e,t){return!!(e===t||_e(e)&&_e(t))}function Or(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!Pr(e[r],t[r]))return!1;return!0}function Tr(e,t){t===void 0&&(t=Or);var r,n=[],a,o=!1;function s(){for(var c=[],l=0;l<arguments.length;l++)c[l]=arguments[l];return o&&r===this&&t(c,n)||(a=e.apply(this,c),o=!0,r=this,n=c),a}return s}const Sr=Object.freeze(Object.defineProperty({__proto__:null,default:Tr},Symbol.toStringTag,{value:"Module"})),jr=Pt(Sr);var Er=typeof Element<"u",$r=typeof Map=="function",kr=typeof Set=="function",Cr=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function V(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,n,a;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(n=r;n--!==0;)if(!V(e[n],t[n]))return!1;return!0}var o;if($r&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(o=e.entries();!(n=o.next()).done;)if(!t.has(n.value[0]))return!1;for(o=e.entries();!(n=o.next()).done;)if(!V(n.value[1],t.get(n.value[0])))return!1;return!0}if(kr&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(o=e.entries();!(n=o.next()).done;)if(!t.has(n.value[0]))return!1;return!0}if(Cr&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(r=e.length,r!=t.length)return!1;for(n=r;n--!==0;)if(e[n]!==t[n])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(a=Object.keys(e),r=a.length,r!==Object.keys(t).length)return!1;for(n=r;n--!==0;)if(!Object.prototype.hasOwnProperty.call(t,a[n]))return!1;if(Er&&e instanceof Element)return!1;for(n=r;n--!==0;)if(!((a[n]==="_owner"||a[n]==="__v"||a[n]==="__o")&&e.$$typeof)&&!V(e[a[n]],t[a[n]]))return!1;return!0}return e!==e&&t!==t}var De=function(t,r){try{return V(t,r)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}},Ue={exports:{}},Ar="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Mr=Ar,Rr=Mr;function Ne(){}function He(){}He.resetWarningCache=Ne;var Lr=function(){function e(n,a,o,s,c,l){if(l!==Rr){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:He,resetWarningCache:Ne};return r.PropTypes=r,r};Ue.exports=Lr();var Ir=Ue.exports,Dr=Object.create,W=Object.defineProperty,Ur=Object.getOwnPropertyDescriptor,Nr=Object.getOwnPropertyNames,Hr=Object.getPrototypeOf,zr=Object.prototype.hasOwnProperty,Br=(e,t)=>{for(var r in t)W(e,r,{get:t[r],enumerable:!0})},ze=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Nr(t))!zr.call(e,a)&&a!==r&&W(e,a,{get:()=>t[a],enumerable:!(n=Ur(t,a))||n.enumerable});return e},Vr=(e,t,r)=>(r=e!=null?Dr(Hr(e)):{},ze(t||!e||!e.__esModule?W(r,"default",{value:e,enumerable:!0}):r,e)),Fr=e=>ze(W({},"__esModule",{value:!0}),e),Be={};Br(Be,{defaultProps:()=>Yr,propTypes:()=>Wr});var Ve=Fr(Be),Kr=Vr(Ir);const{string:y,bool:b,number:S,array:Q,oneOfType:A,shape:w,object:g,func:f,node:we}=Kr.default,Wr={url:A([y,Q,g]),playing:b,loop:b,controls:b,volume:S,muted:b,playbackRate:S,width:A([y,S]),height:A([y,S]),style:g,progressInterval:S,playsinline:b,pip:b,stopOnUnmount:b,light:A([b,y,g]),playIcon:we,previewTabIndex:S,previewAriaLabel:y,fallback:we,oEmbedUrl:y,wrapper:A([y,f,w({render:f.isRequired})]),config:w({soundcloud:w({options:g}),youtube:w({playerVars:g,embedOptions:g,onUnstarted:f}),facebook:w({appId:y,version:y,playerId:y,attributes:g}),dailymotion:w({params:g}),vimeo:w({playerOptions:g,title:y}),mux:w({attributes:g,version:y}),file:w({attributes:g,tracks:Q,forceVideo:b,forceAudio:b,forceHLS:b,forceSafariHLS:b,forceDisableHls:b,forceDASH:b,forceFLV:b,hlsOptions:g,hlsVersion:y,dashVersion:y,flvVersion:y}),wistia:w({options:g,playerId:y,customControls:Q}),mixcloud:w({options:g}),twitch:w({options:g,playerId:y}),vidyard:w({options:g})}),onReady:f,onStart:f,onPlay:f,onPause:f,onBuffer:f,onBufferEnd:f,onEnded:f,onError:f,onDuration:f,onSeek:f,onPlaybackRateChange:f,onPlaybackQualityChange:f,onProgress:f,onClickPreview:f,onEnablePIP:f,onDisablePIP:f},m=()=>{},Yr={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:m},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:m,onStart:m,onPlay:m,onPause:m,onBuffer:m,onBufferEnd:m,onEnded:m,onError:m,onDuration:m,onSeek:m,onPlaybackRateChange:m,onPlaybackQualityChange:m,onProgress:m,onClickPreview:m,onEnablePIP:m,onDisablePIP:m};var Xr=function(t,r,n){var a=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");typeof r=="function"&&(n=r,r={}),r=r||{},n=n||function(){},o.type=r.type||"text/javascript",o.charset=r.charset||"utf8",o.async="async"in r?!!r.async:!0,o.src=t,r.attrs&&qr(o,r.attrs),r.text&&(o.text=""+r.text);var s="onload"in o?xe:Gr;s(o,n),o.onload||xe(o,n),a.appendChild(o)};function qr(e,t){for(var r in t)e.setAttribute(r,t[r])}function xe(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function Gr(e,t){e.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,t(null,e))}}var Jr=Object.create,Y=Object.defineProperty,Zr=Object.getOwnPropertyDescriptor,Qr=Object.getOwnPropertyNames,en=Object.getPrototypeOf,tn=Object.prototype.hasOwnProperty,rn=(e,t)=>{for(var r in t)Y(e,r,{get:t[r],enumerable:!0})},Fe=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Qr(t))!tn.call(e,a)&&a!==r&&Y(e,a,{get:()=>t[a],enumerable:!(n=Zr(t,a))||n.enumerable});return e},ue=(e,t,r)=>(r=e!=null?Jr(en(e)):{},Fe(t||!e||!e.__esModule?Y(r,"default",{value:e,enumerable:!0}):r,e)),nn=e=>Fe(Y({},"__esModule",{value:!0}),e),Ke={};rn(Ke,{callPlayer:()=>_n,getConfig:()=>bn,getSDK:()=>gn,isBlobUrl:()=>xn,isMediaStream:()=>wn,lazy:()=>ln,omit:()=>vn,parseEndTime:()=>hn,parseStartTime:()=>fn,queryString:()=>mn,randomString:()=>yn,supportsWebKitPresentationMode:()=>Pn});var X=nn(Ke),an=ue(_),on=ue(Xr),sn=ue(Ie);const ln=e=>an.default.lazy(async()=>{const t=await e();return typeof t.default=="function"?t:t.default}),cn=/[?&#](?:start|t)=([0-9hms]+)/,pn=/[?&#]end=([0-9hms]+)/,oe=/(\d+)(h|m|s)/g,un=/^\d+$/;function We(e,t){if(e instanceof Array)return;const r=e.match(t);if(r){const n=r[1];if(n.match(oe))return dn(n);if(un.test(n))return parseInt(n)}}function dn(e){let t=0,r=oe.exec(e);for(;r!==null;){const[,n,a]=r;a==="h"&&(t+=parseInt(n,10)*60*60),a==="m"&&(t+=parseInt(n,10)*60),a==="s"&&(t+=parseInt(n,10)),r=oe.exec(e)}return t}function fn(e){return We(e,cn)}function hn(e){return We(e,pn)}function yn(){return Math.random().toString(36).substr(2,5)}function mn(e){return Object.keys(e).map(t=>`${t}=${e[t]}`).join("&")}function ee(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const j={},gn=function(t,r,n=null,a=()=>!0,o=on.default){const s=ee(r);return s&&a(s)?Promise.resolve(s):new Promise((c,l)=>{if(j[t]){j[t].push({resolve:c,reject:l});return}j[t]=[{resolve:c,reject:l}];const v=h=>{j[t].forEach(x=>x.resolve(h))};if(n){const h=window[n];window[n]=function(){h&&h(),v(ee(r))}}o(t,h=>{h?(j[t].forEach(x=>x.reject(h)),j[t]=null):n||v(ee(r))})})};function bn(e,t){return(0,sn.default)(t.config,e.config)}function vn(e,...t){const r=[].concat(...t),n={},a=Object.keys(e);for(const o of a)r.indexOf(o)===-1&&(n[o]=e[o]);return n}function _n(e,...t){if(!this.player||!this.player[e]){let r=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c – `;return this.player?this.player[e]||(r+="The method was not available"):r+="The player was not available",console.warn(r,"font-weight: bold",""),null}return this.player[e](...t)}function wn(e){return typeof window<"u"&&typeof window.MediaStream<"u"&&e instanceof window.MediaStream}function xn(e){return/^blob:/.test(e)}function Pn(e=document.createElement("video")){const t=/iPhone|iPod/.test(navigator.userAgent)===!1;return e.webkitSupportsPresentationMode&&typeof e.webkitSetPresentationMode=="function"&&t}var On=Object.create,I=Object.defineProperty,Tn=Object.getOwnPropertyDescriptor,Sn=Object.getOwnPropertyNames,jn=Object.getPrototypeOf,En=Object.prototype.hasOwnProperty,$n=(e,t,r)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,kn=(e,t)=>{for(var r in t)I(e,r,{get:t[r],enumerable:!0})},Ye=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Sn(t))!En.call(e,a)&&a!==r&&I(e,a,{get:()=>t[a],enumerable:!(n=Tn(t,a))||n.enumerable});return e},Xe=(e,t,r)=>(r=e!=null?On(jn(e)):{},Ye(t||!e||!e.__esModule?I(r,"default",{value:e,enumerable:!0}):r,e)),Cn=e=>Ye(I({},"__esModule",{value:!0}),e),d=(e,t,r)=>($n(e,typeof t!="symbol"?t+"":t,r),r),qe={};kn(qe,{default:()=>q});var An=Cn(qe),Pe=Xe(_),Mn=Xe(De),Ge=Ve,Rn=X;const Ln=5e3;let q=class extends Pe.Component{constructor(){super(...arguments),d(this,"mounted",!1),d(this,"isReady",!1),d(this,"isPlaying",!1),d(this,"isLoading",!0),d(this,"loadOnReady",null),d(this,"startOnPlay",!0),d(this,"seekOnPlay",null),d(this,"onDurationCalled",!1),d(this,"handlePlayerMount",t=>{if(this.player){this.progress();return}this.player=t,this.player.load(this.props.url),this.progress()}),d(this,"getInternalPlayer",t=>this.player?this.player[t]:null),d(this,"progress",()=>{if(this.props.url&&this.player&&this.isReady){const t=this.getCurrentTime()||0,r=this.getSecondsLoaded(),n=this.getDuration();if(n){const a={playedSeconds:t,played:t/n};r!==null&&(a.loadedSeconds=r,a.loaded=r/n),(a.playedSeconds!==this.prevPlayed||a.loadedSeconds!==this.prevLoaded)&&this.props.onProgress(a),this.prevPlayed=a.playedSeconds,this.prevLoaded=a.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)}),d(this,"handleReady",()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:t,playing:r,volume:n,muted:a}=this.props;t(),!a&&n!==null&&this.player.setVolume(n),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):r&&this.player.play(),this.handleDurationCheck()}),d(this,"handlePlay",()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:t,onPlay:r,playbackRate:n}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&n!==1&&this.player.setPlaybackRate(n),t(),this.startOnPlay=!1),r(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()}),d(this,"handlePause",t=>{this.isPlaying=!1,this.isLoading||this.props.onPause(t)}),d(this,"handleEnded",()=>{const{activePlayer:t,loop:r,onEnded:n}=this.props;t.loopOnEnded&&r&&this.seekTo(0),r||(this.isPlaying=!1,n())}),d(this,"handleError",(...t)=>{this.isLoading=!1,this.props.onError(...t)}),d(this,"handleDurationCheck",()=>{clearTimeout(this.durationCheckTimeout);const t=this.getDuration();t?this.onDurationCalled||(this.props.onDuration(t),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)}),d(this,"handleLoaded",()=>{this.isLoading=!1})}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(t){if(!this.player)return;const{url:r,playing:n,volume:a,muted:o,playbackRate:s,pip:c,loop:l,activePlayer:v,disableDeferredLoading:h}=this.props;if(!(0,Mn.default)(t.url,r)){if(this.isLoading&&!v.forceLoad&&!h&&!(0,Rn.isMediaStream)(r)){console.warn(`ReactPlayer: the attempt to load ${r} is being deferred until the player has loaded`),this.loadOnReady=r;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(r,this.isReady)}!t.playing&&n&&!this.isPlaying&&this.player.play(),t.playing&&!n&&this.isPlaying&&this.player.pause(),!t.pip&&c&&this.player.enablePIP&&this.player.enablePIP(),t.pip&&!c&&this.player.disablePIP&&this.player.disablePIP(),t.volume!==a&&a!==null&&this.player.setVolume(a),t.muted!==o&&(o?this.player.mute():(this.player.unmute(),a!==null&&setTimeout(()=>this.player.setVolume(a)))),t.playbackRate!==s&&this.player.setPlaybackRate&&this.player.setPlaybackRate(s),t.loop!==l&&this.player.setLoop&&this.player.setLoop(l)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(t,r,n){if(!this.isReady){t!==0&&(this.seekOnPlay=t,setTimeout(()=>{this.seekOnPlay=null},Ln));return}if(r?r==="fraction":t>0&&t<1){const o=this.player.getDuration();if(!o){console.warn("ReactPlayer: could not seek using fraction – duration not yet available");return}this.player.seekTo(o*t,n);return}this.player.seekTo(t,n)}render(){const t=this.props.activePlayer;return t?Pe.default.createElement(t,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}};d(q,"displayName","Player");d(q,"propTypes",Ge.propTypes);d(q,"defaultProps",Ge.defaultProps);var In=Object.create,D=Object.defineProperty,Dn=Object.getOwnPropertyDescriptor,Un=Object.getOwnPropertyNames,Nn=Object.getPrototypeOf,Hn=Object.prototype.hasOwnProperty,zn=(e,t,r)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Bn=(e,t)=>{for(var r in t)D(e,r,{get:t[r],enumerable:!0})},Je=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Un(t))!Hn.call(e,a)&&a!==r&&D(e,a,{get:()=>t[a],enumerable:!(n=Dn(t,a))||n.enumerable});return e},U=(e,t,r)=>(r=e!=null?In(Nn(e)):{},Je(t||!e||!e.__esModule?D(r,"default",{value:e,enumerable:!0}):r,e)),Vn=e=>Je(D({},"__esModule",{value:!0}),e),u=(e,t,r)=>(zn(e,typeof t!="symbol"?t+"":t,r),r),Ze={};Bn(Ze,{createReactPlayer:()=>Zn});var Fn=Vn(Ze),$=U(_),Kn=U(Ie),te=U(jr),Oe=U(De),R=Ve,Qe=X,Wn=U(An);const Yn=(0,Qe.lazy)(()=>Ot(()=>import("./Preview-InKUJMDn.js").then(e=>e.P),__vite__mapDeps([0,1]))),Xn=typeof window<"u"&&window.document&&typeof document<"u",qn=typeof G<"u"&&G.window&&G.window.document,Gn=Object.keys(R.propTypes),Jn=Xn||qn?$.Suspense:()=>null,M=[],Zn=(e,t)=>{var r;return r=class extends $.Component{constructor(){super(...arguments),u(this,"state",{showPreview:!!this.props.light}),u(this,"references",{wrapper:n=>{this.wrapper=n},player:n=>{this.player=n}}),u(this,"handleClickPreview",n=>{this.setState({showPreview:!1}),this.props.onClickPreview(n)}),u(this,"showPreview",()=>{this.setState({showPreview:!0})}),u(this,"getDuration",()=>this.player?this.player.getDuration():null),u(this,"getCurrentTime",()=>this.player?this.player.getCurrentTime():null),u(this,"getSecondsLoaded",()=>this.player?this.player.getSecondsLoaded():null),u(this,"getInternalPlayer",(n="player")=>this.player?this.player.getInternalPlayer(n):null),u(this,"seekTo",(n,a,o)=>{if(!this.player)return null;this.player.seekTo(n,a,o)}),u(this,"handleReady",()=>{this.props.onReady(this)}),u(this,"getActivePlayer",(0,te.default)(n=>{for(const a of[...M,...e])if(a.canPlay(n))return a;return t||null})),u(this,"getConfig",(0,te.default)((n,a)=>{const{config:o}=this.props;return Kn.default.all([R.defaultProps.config,R.defaultProps.config[a]||{},o,o[a]||{}])})),u(this,"getAttributes",(0,te.default)(n=>(0,Qe.omit)(this.props,Gn))),u(this,"renderActivePlayer",n=>{if(!n)return null;const a=this.getActivePlayer(n);if(!a)return null;const o=this.getConfig(n,a.key);return $.default.createElement(Wn.default,{...this.props,key:a.key,ref:this.references.player,config:o,activePlayer:a.lazyPlayer||a,onReady:this.handleReady})})}shouldComponentUpdate(n,a){return!(0,Oe.default)(this.props,n)||!(0,Oe.default)(this.state,a)}componentDidUpdate(n){const{light:a}=this.props;!n.light&&a&&this.setState({showPreview:!0}),n.light&&!a&&this.setState({showPreview:!1})}renderPreview(n){if(!n)return null;const{light:a,playIcon:o,previewTabIndex:s,oEmbedUrl:c,previewAriaLabel:l}=this.props;return $.default.createElement(Yn,{url:n,light:a,playIcon:o,previewTabIndex:s,previewAriaLabel:l,oEmbedUrl:c,onClick:this.handleClickPreview})}render(){const{url:n,style:a,width:o,height:s,fallback:c,wrapper:l}=this.props,{showPreview:v}=this.state,h=this.getAttributes(n),x=typeof l=="string"?this.references.wrapper:void 0;return $.default.createElement(l,{ref:x,style:{...a,width:o,height:s},...h},$.default.createElement(Jn,{fallback:c},v?this.renderPreview(n):this.renderActivePlayer(n)))}},u(r,"displayName","ReactPlayer"),u(r,"propTypes",R.propTypes),u(r,"defaultProps",R.defaultProps),u(r,"addCustomPlayer",n=>{M.push(n)}),u(r,"removeCustomPlayers",()=>{M.length=0}),u(r,"canPlay",n=>{for(const a of[...M,...e])if(a.canPlay(n))return!0;return!1}),u(r,"canEnablePIP",n=>{for(const a of[...M,...e])if(a.canEnablePIP&&a.canEnablePIP(n))return!0;return!1}),r};var de=Object.defineProperty,Qn=Object.getOwnPropertyDescriptor,ea=Object.getOwnPropertyNames,ta=Object.prototype.hasOwnProperty,ra=(e,t)=>{for(var r in t)de(e,r,{get:t[r],enumerable:!0})},na=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of ea(t))!ta.call(e,a)&&a!==r&&de(e,a,{get:()=>t[a],enumerable:!(n=Qn(t,a))||n.enumerable});return e},aa=e=>na(de({},"__esModule",{value:!0}),e),et={};ra(et,{AUDIO_EXTENSIONS:()=>fe,DASH_EXTENSIONS:()=>ht,FLV_EXTENSIONS:()=>yt,HLS_EXTENSIONS:()=>ye,MATCH_URL_DAILYMOTION:()=>pt,MATCH_URL_FACEBOOK:()=>at,MATCH_URL_FACEBOOK_WATCH:()=>ot,MATCH_URL_KALTURA:()=>ft,MATCH_URL_MIXCLOUD:()=>ut,MATCH_URL_MUX:()=>nt,MATCH_URL_SOUNDCLOUD:()=>tt,MATCH_URL_STREAMABLE:()=>it,MATCH_URL_TWITCH_CHANNEL:()=>ct,MATCH_URL_TWITCH_VIDEO:()=>lt,MATCH_URL_VIDYARD:()=>dt,MATCH_URL_VIMEO:()=>rt,MATCH_URL_WISTIA:()=>st,MATCH_URL_YOUTUBE:()=>ie,VIDEO_EXTENSIONS:()=>he,canPlay:()=>ia});var oa=aa(et),Te=X;const ie=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,tt=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,rt=/vimeo\.com\/(?!progressive_redirect).+/,nt=/stream\.mux\.com\/(\w+)/,at=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,ot=/^https?:\/\/fb\.watch\/.+$/,it=/streamable\.com\/([a-z0-9]+)$/,st=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,lt=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,ct=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,pt=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,ut=/mixcloud\.com\/([^/]+\/[^/]+)/,dt=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,ft=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,fe=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,he=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,ye=/\.(m3u8)($|\?)/i,ht=/\.(mpd)($|\?)/i,yt=/\.(flv)($|\?)/i,se=e=>{if(e instanceof Array){for(const t of e)if(typeof t=="string"&&se(t)||se(t.src))return!0;return!1}return(0,Te.isMediaStream)(e)||(0,Te.isBlobUrl)(e)?!0:fe.test(e)||he.test(e)||ye.test(e)||ht.test(e)||yt.test(e)},ia={youtube:e=>e instanceof Array?e.every(t=>ie.test(t)):ie.test(e),soundcloud:e=>tt.test(e)&&!fe.test(e),vimeo:e=>rt.test(e)&&!he.test(e)&&!ye.test(e),mux:e=>nt.test(e),facebook:e=>at.test(e)||ot.test(e),streamable:e=>it.test(e),wistia:e=>st.test(e),twitch:e=>lt.test(e)||ct.test(e),dailymotion:e=>pt.test(e),mixcloud:e=>ut.test(e),vidyard:e=>dt.test(e),kaltura:e=>ft.test(e),file:se};var sa=Object.create,N=Object.defineProperty,la=Object.getOwnPropertyDescriptor,ca=Object.getOwnPropertyNames,pa=Object.getPrototypeOf,ua=Object.prototype.hasOwnProperty,da=(e,t,r)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,fa=(e,t)=>{for(var r in t)N(e,r,{get:t[r],enumerable:!0})},mt=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of ca(t))!ua.call(e,a)&&a!==r&&N(e,a,{get:()=>t[a],enumerable:!(n=la(t,a))||n.enumerable});return e},ha=(e,t,r)=>(r=e!=null?sa(pa(e)):{},mt(t||!e||!e.__esModule?N(r,"default",{value:e,enumerable:!0}):r,e)),ya=e=>mt(N({},"__esModule",{value:!0}),e),P=(e,t,r)=>(da(e,typeof t!="symbol"?t+"":t,r),r),gt={};fa(gt,{default:()=>me});var ma=ya(gt),re=ha(_),E=X,bt=oa;const ga="https://www.youtube.com/iframe_api",Se="YT",ba="onYouTubeIframeAPIReady",B=/[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,ne=/user\/([a-zA-Z0-9_-]+)\/?/,va=/youtube-nocookie\.com/,_a="https://www.youtube-nocookie.com";class me extends re.Component{constructor(){super(...arguments),P(this,"callPlayer",E.callPlayer),P(this,"parsePlaylist",t=>{if(t instanceof Array)return{listType:"playlist",playlist:t.map(this.getID).join(",")};if(B.test(t)){const[,r]=t.match(B);return{listType:"playlist",list:r.replace(/^UC/,"UU")}}if(ne.test(t)){const[,r]=t.match(ne);return{listType:"user_uploads",list:r}}return{}}),P(this,"onStateChange",t=>{const{data:r}=t,{onPlay:n,onPause:a,onBuffer:o,onBufferEnd:s,onEnded:c,onReady:l,loop:v,config:{playerVars:h,onUnstarted:x}}=this.props,{UNSTARTED:H,PLAYING:C,PAUSED:O,BUFFERING:vt,ENDED:_t,CUED:wt}=window[Se].PlayerState;if(r===H&&x(),r===C&&(n(),s()),r===O&&a(),r===vt&&o(),r===_t){const xt=!!this.callPlayer("getPlaylist");v&&!xt&&(h.start?this.seekTo(h.start):this.play()),c()}r===wt&&l()}),P(this,"mute",()=>{this.callPlayer("mute")}),P(this,"unmute",()=>{this.callPlayer("unMute")}),P(this,"ref",t=>{this.container=t})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}getID(t){return!t||t instanceof Array||B.test(t)?null:t.match(bt.MATCH_URL_YOUTUBE)[1]}load(t,r){const{playing:n,muted:a,playsinline:o,controls:s,loop:c,config:l,onError:v}=this.props,{playerVars:h,embedOptions:x}=l,H=this.getID(t);if(r){if(B.test(t)||ne.test(t)||t instanceof Array){this.player.loadPlaylist(this.parsePlaylist(t));return}this.player.cueVideoById({videoId:H,startSeconds:(0,E.parseStartTime)(t)||h.start,endSeconds:(0,E.parseEndTime)(t)||h.end});return}(0,E.getSDK)(ga,Se,ba,C=>C.loaded).then(C=>{this.container&&(this.player=new C.Player(this.container,{width:"100%",height:"100%",videoId:H,playerVars:{autoplay:n?1:0,mute:a?1:0,controls:s?1:0,start:(0,E.parseStartTime)(t),end:(0,E.parseEndTime)(t),origin:window.location.origin,playsinline:o?1:0,...this.parsePlaylist(t),...h},events:{onReady:()=>{c&&this.player.setLoop(!0),this.props.onReady()},onPlaybackRateChange:O=>this.props.onPlaybackRateChange(O.data),onPlaybackQualityChange:O=>this.props.onPlaybackQualityChange(O),onStateChange:this.onStateChange,onError:O=>v(O.data)},host:va.test(t)?_a:void 0,...x}))},v),x.events&&console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause")}play(){this.callPlayer("playVideo")}pause(){this.callPlayer("pauseVideo")}stop(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}seekTo(t,r=!1){this.callPlayer("seekTo",t),!r&&!this.props.playing&&this.pause()}setVolume(t){this.callPlayer("setVolume",t*100)}setPlaybackRate(t){this.callPlayer("setPlaybackRate",t)}setLoop(t){this.callPlayer("setLoop",t)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}render(){const{display:t}=this.props,r={width:"100%",height:"100%",display:t};return re.default.createElement("div",{style:r},re.default.createElement("div",{ref:this.ref}))}}P(me,"displayName","YouTube");P(me,"canPlay",bt.canPlay.youtube);var wa=Fn.createReactPlayer,je=ma.default,xa=wa([{key:"youtube",canPlay:je.canPlay,lazyPlayer:je}]);const Pa=Tt(xa),Oa=({onClose:e,movieId:t})=>{const r=le(St),n=ce();_.useEffect(()=>{const o=s=>{s.code==="Escape"&&e()};return window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[e]),_.useEffect(()=>{n(jt(t))},[n,t]);const a=`https://www.youtube.com/embed/${r}`;return i.jsxs(i.Fragment,{children:[i.jsx(Ae,{onClick:e}),i.jsx(Kt,{children:i.jsx(Pa,{url:a,controls:!0})})]})},Ta=({onClose:e,movieId:t})=>{var a;const r=ce(),n=le(Et);return _.useEffect(()=>{const o=s=>{s.code==="Escape"&&e()};return window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[e]),_.useEffect(()=>{r($t(t))},[r,t]),i.jsxs(i.Fragment,{children:[i.jsx(Ae,{onClick:e}),i.jsxs(Ft,{children:[i.jsx(Yt,{children:i.jsx(Xt,{onClick:e,children:i.jsx("use",{href:`${Mt}#icon-outline`})})}),i.jsxs(Wt,{children:[i.jsx("div",{children:i.jsx(qt,{src:`https://image.tmdb.org/t/p/w780${n.poster_path}`,alt:n.original_title})}),i.jsxs("div",{children:[i.jsx(Gt,{children:n.original_title}),i.jsxs(J,{children:[i.jsx(z,{children:"Vote/Votes"}),i.jsx(Z,{children:`${n.vote_average}/${n.vote_count}`})]}),i.jsxs(J,{children:[i.jsx(z,{children:"Popularity"}),i.jsx(Z,{children:n.popularity})]}),i.jsxs(J,{children:[i.jsx(z,{children:"Genre"}),i.jsx("div",{children:(a=n==null?void 0:n.genres)==null?void 0:a.map(o=>i.jsx(Z,{children:o.name},o.id))})]}),i.jsxs("div",{children:[i.jsx(z,{children:"ABOUT"}),i.jsx(Jt,{children:n.overview})]}),i.jsx(Zt,{children:"Add to my library"})]})]})]})]})},Sa=({trends:e,timer:t})=>{let r=e.vote_average*100/10*5/100;const[n,a]=_.useState(!1),[o,s]=_.useState(!1),c=()=>{a(!0),clearTimeout(t)},l=()=>{s(!0),clearTimeout(t)};return i.jsxs(i.Fragment,{children:[i.jsx(zt,{$imgUrl:e.backdrop_path,children:i.jsxs(Ee,{children:[i.jsxs(Ce,{children:[i.jsx(Bt,{children:i.jsx(cr,{currentRate:r})}),i.jsx($e,{children:e.title}),i.jsx(ke,{children:e.overview})]}),i.jsxs(Vt,{children:[i.jsx(ae,{onClick:c,children:"Watch trailer"}),i.jsx(ae,{onClick:l,children:"More details"})]})]})}),n&&i.jsx(Oa,{onClose:()=>a(!1),movieId:e.id}),o&&i.jsx(Ta,{onClose:()=>s(!1),movieId:e.id})]})},ka=()=>{const e=ce(),t=le(kt),[r,n]=_.useState(0),[a,o]=_.useState(null);return _.useEffect(()=>{e(Ct())},[e]),_.useEffect(()=>{const s=setTimeout(()=>{n(r===19?0:r+1)},1e4);return o(s),()=>clearTimeout(a)},[r]),i.jsx(Ht,{children:t!==null&&(t==null?void 0:t.length)>0?i.jsx(Sa,{trends:t[r],timer:a}):i.jsx(i.Fragment,{children:i.jsxs(Ee,{children:[i.jsxs(Ce,{children:[i.jsx($e,{children:"Let’s Make Your Own Cinema"}),i.jsx(ke,{children:"Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers."})]}),i.jsx(ae,{children:i.jsx(At,{to:"/catalog",children:"Get Started"})})]})})})};export{ka as H};
