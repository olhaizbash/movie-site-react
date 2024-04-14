function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Preview-CuVRWqk3.js","assets/index-HkNwJyxK.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{u as p,R as T,j as o,g as Ot,r as v,_ as Tt,d as J,e as St,a as F,f as jt,b as ce,h as Et,i as $t,k as kt,l as Ct,m as At,n as Mt,o as Rt,p as Lt,N as It}from"./index-HkNwJyxK.js";import{c as Dt,C as $e}from"./sprite-BXhZ5gOv.js";const Ut="/movie-site-react/assets/hero_mob-D4bsknua.jpg",Nt="/movie-site-react/assets/hero_mob_2x-DVLF-0vp.jpg",Ht="/movie-site-react/assets/hero_tab-Bns2UM_L.jpg",zt="/movie-site-react/assets/hero_tab_2x-r4FNr-wk.jpg",Bt="/movie-site-react/assets/hero-BM7XBHXv.jpg",Vt="/movie-site-react/assets/hero_2x-CuRl-OTU.jpg",Ft=p.section`
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 auto;
  background: #6b5f5f;
  background-size: cover;

  background-image: url(${Ut});

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${Nt});
  }
  @media screen and (max-width: 767px) {
    max-width: 320px;
    height: 380px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 768px;
    height: 432px;
    background: linear-gradient(83deg, #111 39.6%, rgba(17, 17, 17, 0) 72.95%),
      url(${Ht}) lightgray 99.376% 104.171% no-repeat;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: linear-gradient(83deg, #111 39.6%, rgba(17, 17, 17, 0) 72.95%),
        url(${zt}) lightgray 60.002px -7.221px / 92.376% 104.171% no-repeat;
    }
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    width: 1280px;
    height: 720px;
    background: linear-gradient(83deg, #111 36.85%, rgba(17, 17, 17, 0) 60.05%),
      url(${Bt}) lightgray 91.116% 101.072% no-repeat;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: linear-gradient(
          83deg,
          #111 36.85%,
          rgba(17, 17, 17, 0) 60.05%
        ),
        url(${Vt}) lightgray 116.549px -4px / 91.116% 101.072% no-repeat;
    }
  }
`,Kt=p.div`
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
`,ke=p.h1`
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
`,Wt=p.div``;p.input`
  display: none;
`;const Ce=p.p`
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
`,Ae=p.div`
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
`,Yt=p.div`
  display: flex;
  gap: 8px;
`,ie=p.button`
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
`,Me=p.div`
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
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
`,Xt=p.div`
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
  transition: ${({theme:e})=>e.transition.modal};

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 704px;
    height: 488px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    width: 704px;
    height: 588px;
  }
`,qt=p.div`
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
`,Gt=p.div`
  display: flex;
  flex-direction: column;
  gap: 22px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    flex-direction: row;
    gap: 16px;
    justify-content: center;
    align-items: center;
  }
`,Jt=p.button`
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
`,Zt=p.svg`
  width: 100%;
  height: 100%;
  stroke: ${({theme:e})=>e.color.logoText};
  transition: stroke ${({theme:e})=>e.transition.main};

  &:hover,
  &:focus {
    stroke: ${({theme:e})=>e.color.orange};
  }
`,Qt=p.img`
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
`,er=p.h1`
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
`,Z=p.div`
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
`,Q=p.p`
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
`,tr=p.p`
  color: ${({theme:e})=>e.color.textchange};
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin: 0;
`,ge=p.button`
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
`;var Re={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},be=T.createContext&&T.createContext(Re),rr=["attr","size","title"];function nr(e,t){if(e==null)return{};var r=ar(e,t),n,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function ar(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,i;for(i=0;i<n.length;i++)a=n[i],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}function K(){return K=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},K.apply(this,arguments)}function ve(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ve(Object(r),!0).forEach(function(n){ir(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ve(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function ir(e,t,r){return t=or(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function or(e){var t=sr(e,"string");return typeof t=="symbol"?t:String(t)}function sr(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Le(e){return e&&e.map((t,r)=>T.createElement(t.tag,W({key:r},t.attr),Le(t.child)))}function pe(e){return t=>T.createElement(lr,K({attr:W({},e.attr)},t),Le(e.child))}function lr(e){var t=r=>{var{attr:n,size:a,title:i}=e,l=nr(e,rr),c=a||r.size||"1em",s;return r.className&&(s=r.className),e.className&&(s=(s?s+" ":"")+e.className),T.createElement("svg",K({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,l,{className:s,style:W(W({color:e.color||r.color},r.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),i&&T.createElement("title",null,i),e.children)};return be!==void 0?T.createElement(be.Consumer,null,r=>t(r)):t(Re)}function cr(e){return pe({tag:"svg",attr:{viewBox:"0 0 536 512"},child:[{tag:"path",attr:{d:"M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"},child:[]}]})(e)}function pr(e){return pe({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(e)}function ur(e){return pe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"},child:[]}]})(e)}const dr=({currentRate:e})=>{const t=Array.from({length:5},(r,n)=>{let a=n+.5,i=n+1;return o.jsx("span",{children:e>=i?o.jsx(pr,{size:20,color:"#f87719"}):e>=a?o.jsx(cr,{size:20,color:"#f87719"}):o.jsx(ur,{size:20,color:"#f87719"})},n)});return o.jsx(o.Fragment,{children:t})};var fr=function(t){return hr(t)&&!yr(t)};function hr(e){return!!e&&typeof e=="object"}function yr(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||br(e)}var mr=typeof Symbol=="function"&&Symbol.for,gr=mr?Symbol.for("react.element"):60103;function br(e){return e.$$typeof===gr}function vr(e){return Array.isArray(e)?[]:{}}function L(e,t){return t.clone!==!1&&t.isMergeableObject(e)?k(vr(e),e,t):e}function _r(e,t,r){return e.concat(t).map(function(n){return L(n,r)})}function wr(e,t){if(!t.customMerge)return k;var r=t.customMerge(e);return typeof r=="function"?r:k}function xr(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function _e(e){return Object.keys(e).concat(xr(e))}function Ie(e,t){try{return t in e}catch{return!1}}function Pr(e,t){return Ie(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function Or(e,t,r){var n={};return r.isMergeableObject(e)&&_e(e).forEach(function(a){n[a]=L(e[a],r)}),_e(t).forEach(function(a){Pr(e,a)||(Ie(e,a)&&r.isMergeableObject(t[a])?n[a]=wr(a,r)(e[a],t[a],r):n[a]=L(t[a],r))}),n}function k(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||_r,r.isMergeableObject=r.isMergeableObject||fr,r.cloneUnlessOtherwiseSpecified=L;var n=Array.isArray(t),a=Array.isArray(e),i=n===a;return i?n?r.arrayMerge(e,t,r):Or(e,t,r):L(t,r)}k.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(n,a){return k(n,a,r)},{})};var Tr=k,De=Tr,we=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function Sr(e,t){return!!(e===t||we(e)&&we(t))}function jr(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!Sr(e[r],t[r]))return!1;return!0}function Er(e,t){t===void 0&&(t=jr);var r,n=[],a,i=!1;function l(){for(var c=[],s=0;s<arguments.length;s++)c[s]=arguments[s];return i&&r===this&&t(c,n)||(a=e.apply(this,c),i=!0,r=this,n=c),a}return l}const $r=Object.freeze(Object.defineProperty({__proto__:null,default:Er},Symbol.toStringTag,{value:"Module"})),kr=Ot($r);var Cr=typeof Element<"u",Ar=typeof Map=="function",Mr=typeof Set=="function",Rr=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function V(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,n,a;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(n=r;n--!==0;)if(!V(e[n],t[n]))return!1;return!0}var i;if(Ar&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i=e.entries();!(n=i.next()).done;)if(!t.has(n.value[0]))return!1;for(i=e.entries();!(n=i.next()).done;)if(!V(n.value[1],t.get(n.value[0])))return!1;return!0}if(Mr&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i=e.entries();!(n=i.next()).done;)if(!t.has(n.value[0]))return!1;return!0}if(Rr&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(r=e.length,r!=t.length)return!1;for(n=r;n--!==0;)if(e[n]!==t[n])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(a=Object.keys(e),r=a.length,r!==Object.keys(t).length)return!1;for(n=r;n--!==0;)if(!Object.prototype.hasOwnProperty.call(t,a[n]))return!1;if(Cr&&e instanceof Element)return!1;for(n=r;n--!==0;)if(!((a[n]==="_owner"||a[n]==="__v"||a[n]==="__o")&&e.$$typeof)&&!V(e[a[n]],t[a[n]]))return!1;return!0}return e!==e&&t!==t}var Ue=function(t,r){try{return V(t,r)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}},Ne={exports:{}},Lr="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ir=Lr,Dr=Ir;function He(){}function ze(){}ze.resetWarningCache=He;var Ur=function(){function e(n,a,i,l,c,s){if(s!==Dr){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:ze,resetWarningCache:He};return r.PropTypes=r,r};Ne.exports=Ur();var Nr=Ne.exports,Hr=Object.create,Y=Object.defineProperty,zr=Object.getOwnPropertyDescriptor,Br=Object.getOwnPropertyNames,Vr=Object.getPrototypeOf,Fr=Object.prototype.hasOwnProperty,Kr=(e,t)=>{for(var r in t)Y(e,r,{get:t[r],enumerable:!0})},Be=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Br(t))!Fr.call(e,a)&&a!==r&&Y(e,a,{get:()=>t[a],enumerable:!(n=zr(t,a))||n.enumerable});return e},Wr=(e,t,r)=>(r=e!=null?Hr(Vr(e)):{},Be(t||!e||!e.__esModule?Y(r,"default",{value:e,enumerable:!0}):r,e)),Yr=e=>Be(Y({},"__esModule",{value:!0}),e),Ve={};Kr(Ve,{defaultProps:()=>Gr,propTypes:()=>qr});var Fe=Yr(Ve),Xr=Wr(Nr);const{string:m,bool:_,number:S,array:ee,oneOfType:A,shape:w,object:b,func:f,node:xe}=Xr.default,qr={url:A([m,ee,b]),playing:_,loop:_,controls:_,volume:S,muted:_,playbackRate:S,width:A([m,S]),height:A([m,S]),style:b,progressInterval:S,playsinline:_,pip:_,stopOnUnmount:_,light:A([_,m,b]),playIcon:xe,previewTabIndex:S,previewAriaLabel:m,fallback:xe,oEmbedUrl:m,wrapper:A([m,f,w({render:f.isRequired})]),config:w({soundcloud:w({options:b}),youtube:w({playerVars:b,embedOptions:b,onUnstarted:f}),facebook:w({appId:m,version:m,playerId:m,attributes:b}),dailymotion:w({params:b}),vimeo:w({playerOptions:b,title:m}),mux:w({attributes:b,version:m}),file:w({attributes:b,tracks:ee,forceVideo:_,forceAudio:_,forceHLS:_,forceSafariHLS:_,forceDisableHls:_,forceDASH:_,forceFLV:_,hlsOptions:b,hlsVersion:m,dashVersion:m,flvVersion:m}),wistia:w({options:b,playerId:m,customControls:ee}),mixcloud:w({options:b}),twitch:w({options:b,playerId:m}),vidyard:w({options:b})}),onReady:f,onStart:f,onPlay:f,onPause:f,onBuffer:f,onBufferEnd:f,onEnded:f,onError:f,onDuration:f,onSeek:f,onPlaybackRateChange:f,onPlaybackQualityChange:f,onProgress:f,onClickPreview:f,onEnablePIP:f,onDisablePIP:f},g=()=>{},Gr={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:g},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:g,onStart:g,onPlay:g,onPause:g,onBuffer:g,onBufferEnd:g,onEnded:g,onError:g,onDuration:g,onSeek:g,onPlaybackRateChange:g,onPlaybackQualityChange:g,onProgress:g,onClickPreview:g,onEnablePIP:g,onDisablePIP:g};var Jr=function(t,r,n){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");typeof r=="function"&&(n=r,r={}),r=r||{},n=n||function(){},i.type=r.type||"text/javascript",i.charset=r.charset||"utf8",i.async="async"in r?!!r.async:!0,i.src=t,r.attrs&&Zr(i,r.attrs),r.text&&(i.text=""+r.text);var l="onload"in i?Pe:Qr;l(i,n),i.onload||Pe(i,n),a.appendChild(i)};function Zr(e,t){for(var r in t)e.setAttribute(r,t[r])}function Pe(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function Qr(e,t){e.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,t(null,e))}}var en=Object.create,X=Object.defineProperty,tn=Object.getOwnPropertyDescriptor,rn=Object.getOwnPropertyNames,nn=Object.getPrototypeOf,an=Object.prototype.hasOwnProperty,on=(e,t)=>{for(var r in t)X(e,r,{get:t[r],enumerable:!0})},Ke=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of rn(t))!an.call(e,a)&&a!==r&&X(e,a,{get:()=>t[a],enumerable:!(n=tn(t,a))||n.enumerable});return e},ue=(e,t,r)=>(r=e!=null?en(nn(e)):{},Ke(t||!e||!e.__esModule?X(r,"default",{value:e,enumerable:!0}):r,e)),sn=e=>Ke(X({},"__esModule",{value:!0}),e),We={};on(We,{callPlayer:()=>Pn,getConfig:()=>wn,getSDK:()=>_n,isBlobUrl:()=>Tn,isMediaStream:()=>On,lazy:()=>un,omit:()=>xn,parseEndTime:()=>gn,parseStartTime:()=>mn,queryString:()=>vn,randomString:()=>bn,supportsWebKitPresentationMode:()=>Sn});var q=sn(We),ln=ue(v),cn=ue(Jr),pn=ue(De);const un=e=>ln.default.lazy(async()=>{const t=await e();return typeof t.default=="function"?t:t.default}),dn=/[?&#](?:start|t)=([0-9hms]+)/,fn=/[?&#]end=([0-9hms]+)/,oe=/(\d+)(h|m|s)/g,hn=/^\d+$/;function Ye(e,t){if(e instanceof Array)return;const r=e.match(t);if(r){const n=r[1];if(n.match(oe))return yn(n);if(hn.test(n))return parseInt(n)}}function yn(e){let t=0,r=oe.exec(e);for(;r!==null;){const[,n,a]=r;a==="h"&&(t+=parseInt(n,10)*60*60),a==="m"&&(t+=parseInt(n,10)*60),a==="s"&&(t+=parseInt(n,10)),r=oe.exec(e)}return t}function mn(e){return Ye(e,dn)}function gn(e){return Ye(e,fn)}function bn(){return Math.random().toString(36).substr(2,5)}function vn(e){return Object.keys(e).map(t=>`${t}=${e[t]}`).join("&")}function te(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const j={},_n=function(t,r,n=null,a=()=>!0,i=cn.default){const l=te(r);return l&&a(l)?Promise.resolve(l):new Promise((c,s)=>{if(j[t]){j[t].push({resolve:c,reject:s});return}j[t]=[{resolve:c,reject:s}];const h=y=>{j[t].forEach(x=>x.resolve(y))};if(n){const y=window[n];window[n]=function(){y&&y(),h(te(r))}}i(t,y=>{y?(j[t].forEach(x=>x.reject(y)),j[t]=null):n||h(te(r))})})};function wn(e,t){return(0,pn.default)(t.config,e.config)}function xn(e,...t){const r=[].concat(...t),n={},a=Object.keys(e);for(const i of a)r.indexOf(i)===-1&&(n[i]=e[i]);return n}function Pn(e,...t){if(!this.player||!this.player[e]){let r=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c – `;return this.player?this.player[e]||(r+="The method was not available"):r+="The player was not available",console.warn(r,"font-weight: bold",""),null}return this.player[e](...t)}function On(e){return typeof window<"u"&&typeof window.MediaStream<"u"&&e instanceof window.MediaStream}function Tn(e){return/^blob:/.test(e)}function Sn(e=document.createElement("video")){const t=/iPhone|iPod/.test(navigator.userAgent)===!1;return e.webkitSupportsPresentationMode&&typeof e.webkitSetPresentationMode=="function"&&t}var jn=Object.create,I=Object.defineProperty,En=Object.getOwnPropertyDescriptor,$n=Object.getOwnPropertyNames,kn=Object.getPrototypeOf,Cn=Object.prototype.hasOwnProperty,An=(e,t,r)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Mn=(e,t)=>{for(var r in t)I(e,r,{get:t[r],enumerable:!0})},Xe=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of $n(t))!Cn.call(e,a)&&a!==r&&I(e,a,{get:()=>t[a],enumerable:!(n=En(t,a))||n.enumerable});return e},qe=(e,t,r)=>(r=e!=null?jn(kn(e)):{},Xe(t||!e||!e.__esModule?I(r,"default",{value:e,enumerable:!0}):r,e)),Rn=e=>Xe(I({},"__esModule",{value:!0}),e),d=(e,t,r)=>(An(e,typeof t!="symbol"?t+"":t,r),r),Ge={};Mn(Ge,{default:()=>G});var Ln=Rn(Ge),Oe=qe(v),In=qe(Ue),Je=Fe,Dn=q;const Un=5e3;let G=class extends Oe.Component{constructor(){super(...arguments),d(this,"mounted",!1),d(this,"isReady",!1),d(this,"isPlaying",!1),d(this,"isLoading",!0),d(this,"loadOnReady",null),d(this,"startOnPlay",!0),d(this,"seekOnPlay",null),d(this,"onDurationCalled",!1),d(this,"handlePlayerMount",t=>{if(this.player){this.progress();return}this.player=t,this.player.load(this.props.url),this.progress()}),d(this,"getInternalPlayer",t=>this.player?this.player[t]:null),d(this,"progress",()=>{if(this.props.url&&this.player&&this.isReady){const t=this.getCurrentTime()||0,r=this.getSecondsLoaded(),n=this.getDuration();if(n){const a={playedSeconds:t,played:t/n};r!==null&&(a.loadedSeconds=r,a.loaded=r/n),(a.playedSeconds!==this.prevPlayed||a.loadedSeconds!==this.prevLoaded)&&this.props.onProgress(a),this.prevPlayed=a.playedSeconds,this.prevLoaded=a.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)}),d(this,"handleReady",()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:t,playing:r,volume:n,muted:a}=this.props;t(),!a&&n!==null&&this.player.setVolume(n),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):r&&this.player.play(),this.handleDurationCheck()}),d(this,"handlePlay",()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:t,onPlay:r,playbackRate:n}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&n!==1&&this.player.setPlaybackRate(n),t(),this.startOnPlay=!1),r(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()}),d(this,"handlePause",t=>{this.isPlaying=!1,this.isLoading||this.props.onPause(t)}),d(this,"handleEnded",()=>{const{activePlayer:t,loop:r,onEnded:n}=this.props;t.loopOnEnded&&r&&this.seekTo(0),r||(this.isPlaying=!1,n())}),d(this,"handleError",(...t)=>{this.isLoading=!1,this.props.onError(...t)}),d(this,"handleDurationCheck",()=>{clearTimeout(this.durationCheckTimeout);const t=this.getDuration();t?this.onDurationCalled||(this.props.onDuration(t),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)}),d(this,"handleLoaded",()=>{this.isLoading=!1})}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(t){if(!this.player)return;const{url:r,playing:n,volume:a,muted:i,playbackRate:l,pip:c,loop:s,activePlayer:h,disableDeferredLoading:y}=this.props;if(!(0,In.default)(t.url,r)){if(this.isLoading&&!h.forceLoad&&!y&&!(0,Dn.isMediaStream)(r)){console.warn(`ReactPlayer: the attempt to load ${r} is being deferred until the player has loaded`),this.loadOnReady=r;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(r,this.isReady)}!t.playing&&n&&!this.isPlaying&&this.player.play(),t.playing&&!n&&this.isPlaying&&this.player.pause(),!t.pip&&c&&this.player.enablePIP&&this.player.enablePIP(),t.pip&&!c&&this.player.disablePIP&&this.player.disablePIP(),t.volume!==a&&a!==null&&this.player.setVolume(a),t.muted!==i&&(i?this.player.mute():(this.player.unmute(),a!==null&&setTimeout(()=>this.player.setVolume(a)))),t.playbackRate!==l&&this.player.setPlaybackRate&&this.player.setPlaybackRate(l),t.loop!==s&&this.player.setLoop&&this.player.setLoop(s)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(t,r,n){if(!this.isReady){t!==0&&(this.seekOnPlay=t,setTimeout(()=>{this.seekOnPlay=null},Un));return}if(r?r==="fraction":t>0&&t<1){const i=this.player.getDuration();if(!i){console.warn("ReactPlayer: could not seek using fraction – duration not yet available");return}this.player.seekTo(i*t,n);return}this.player.seekTo(t,n)}render(){const t=this.props.activePlayer;return t?Oe.default.createElement(t,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}};d(G,"displayName","Player");d(G,"propTypes",Je.propTypes);d(G,"defaultProps",Je.defaultProps);var Nn=Object.create,D=Object.defineProperty,Hn=Object.getOwnPropertyDescriptor,zn=Object.getOwnPropertyNames,Bn=Object.getPrototypeOf,Vn=Object.prototype.hasOwnProperty,Fn=(e,t,r)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Kn=(e,t)=>{for(var r in t)D(e,r,{get:t[r],enumerable:!0})},Ze=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of zn(t))!Vn.call(e,a)&&a!==r&&D(e,a,{get:()=>t[a],enumerable:!(n=Hn(t,a))||n.enumerable});return e},U=(e,t,r)=>(r=e!=null?Nn(Bn(e)):{},Ze(t||!e||!e.__esModule?D(r,"default",{value:e,enumerable:!0}):r,e)),Wn=e=>Ze(D({},"__esModule",{value:!0}),e),u=(e,t,r)=>(Fn(e,typeof t!="symbol"?t+"":t,r),r),Qe={};Kn(Qe,{createReactPlayer:()=>ta});var Yn=Wn(Qe),$=U(v),Xn=U(De),re=U(kr),Te=U(Ue),R=Fe,et=q,qn=U(Ln);const Gn=(0,et.lazy)(()=>Tt(()=>import("./Preview-CuVRWqk3.js").then(e=>e.P),__vite__mapDeps([0,1]))),Jn=typeof window<"u"&&window.document&&typeof document<"u",Zn=typeof J<"u"&&J.window&&J.window.document,Qn=Object.keys(R.propTypes),ea=Jn||Zn?$.Suspense:()=>null,M=[],ta=(e,t)=>{var r;return r=class extends $.Component{constructor(){super(...arguments),u(this,"state",{showPreview:!!this.props.light}),u(this,"references",{wrapper:n=>{this.wrapper=n},player:n=>{this.player=n}}),u(this,"handleClickPreview",n=>{this.setState({showPreview:!1}),this.props.onClickPreview(n)}),u(this,"showPreview",()=>{this.setState({showPreview:!0})}),u(this,"getDuration",()=>this.player?this.player.getDuration():null),u(this,"getCurrentTime",()=>this.player?this.player.getCurrentTime():null),u(this,"getSecondsLoaded",()=>this.player?this.player.getSecondsLoaded():null),u(this,"getInternalPlayer",(n="player")=>this.player?this.player.getInternalPlayer(n):null),u(this,"seekTo",(n,a,i)=>{if(!this.player)return null;this.player.seekTo(n,a,i)}),u(this,"handleReady",()=>{this.props.onReady(this)}),u(this,"getActivePlayer",(0,re.default)(n=>{for(const a of[...M,...e])if(a.canPlay(n))return a;return t||null})),u(this,"getConfig",(0,re.default)((n,a)=>{const{config:i}=this.props;return Xn.default.all([R.defaultProps.config,R.defaultProps.config[a]||{},i,i[a]||{}])})),u(this,"getAttributes",(0,re.default)(n=>(0,et.omit)(this.props,Qn))),u(this,"renderActivePlayer",n=>{if(!n)return null;const a=this.getActivePlayer(n);if(!a)return null;const i=this.getConfig(n,a.key);return $.default.createElement(qn.default,{...this.props,key:a.key,ref:this.references.player,config:i,activePlayer:a.lazyPlayer||a,onReady:this.handleReady})})}shouldComponentUpdate(n,a){return!(0,Te.default)(this.props,n)||!(0,Te.default)(this.state,a)}componentDidUpdate(n){const{light:a}=this.props;!n.light&&a&&this.setState({showPreview:!0}),n.light&&!a&&this.setState({showPreview:!1})}renderPreview(n){if(!n)return null;const{light:a,playIcon:i,previewTabIndex:l,oEmbedUrl:c,previewAriaLabel:s}=this.props;return $.default.createElement(Gn,{url:n,light:a,playIcon:i,previewTabIndex:l,previewAriaLabel:s,oEmbedUrl:c,onClick:this.handleClickPreview})}render(){const{url:n,style:a,width:i,height:l,fallback:c,wrapper:s}=this.props,{showPreview:h}=this.state,y=this.getAttributes(n),x=typeof s=="string"?this.references.wrapper:void 0;return $.default.createElement(s,{ref:x,style:{...a,width:i,height:l},...y},$.default.createElement(ea,{fallback:c},h?this.renderPreview(n):this.renderActivePlayer(n)))}},u(r,"displayName","ReactPlayer"),u(r,"propTypes",R.propTypes),u(r,"defaultProps",R.defaultProps),u(r,"addCustomPlayer",n=>{M.push(n)}),u(r,"removeCustomPlayers",()=>{M.length=0}),u(r,"canPlay",n=>{for(const a of[...M,...e])if(a.canPlay(n))return!0;return!1}),u(r,"canEnablePIP",n=>{for(const a of[...M,...e])if(a.canEnablePIP&&a.canEnablePIP(n))return!0;return!1}),r};var de=Object.defineProperty,ra=Object.getOwnPropertyDescriptor,na=Object.getOwnPropertyNames,aa=Object.prototype.hasOwnProperty,ia=(e,t)=>{for(var r in t)de(e,r,{get:t[r],enumerable:!0})},oa=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of na(t))!aa.call(e,a)&&a!==r&&de(e,a,{get:()=>t[a],enumerable:!(n=ra(t,a))||n.enumerable});return e},sa=e=>oa(de({},"__esModule",{value:!0}),e),tt={};ia(tt,{AUDIO_EXTENSIONS:()=>fe,DASH_EXTENSIONS:()=>yt,FLV_EXTENSIONS:()=>mt,HLS_EXTENSIONS:()=>ye,MATCH_URL_DAILYMOTION:()=>ut,MATCH_URL_FACEBOOK:()=>it,MATCH_URL_FACEBOOK_WATCH:()=>ot,MATCH_URL_KALTURA:()=>ht,MATCH_URL_MIXCLOUD:()=>dt,MATCH_URL_MUX:()=>at,MATCH_URL_SOUNDCLOUD:()=>rt,MATCH_URL_STREAMABLE:()=>st,MATCH_URL_TWITCH_CHANNEL:()=>pt,MATCH_URL_TWITCH_VIDEO:()=>ct,MATCH_URL_VIDYARD:()=>ft,MATCH_URL_VIMEO:()=>nt,MATCH_URL_WISTIA:()=>lt,MATCH_URL_YOUTUBE:()=>se,VIDEO_EXTENSIONS:()=>he,canPlay:()=>ca});var la=sa(tt),Se=q;const se=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,rt=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,nt=/vimeo\.com\/(?!progressive_redirect).+/,at=/stream\.mux\.com\/(\w+)/,it=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,ot=/^https?:\/\/fb\.watch\/.+$/,st=/streamable\.com\/([a-z0-9]+)$/,lt=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,ct=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,pt=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,ut=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,dt=/mixcloud\.com\/([^/]+\/[^/]+)/,ft=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,ht=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,fe=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,he=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,ye=/\.(m3u8)($|\?)/i,yt=/\.(mpd)($|\?)/i,mt=/\.(flv)($|\?)/i,le=e=>{if(e instanceof Array){for(const t of e)if(typeof t=="string"&&le(t)||le(t.src))return!0;return!1}return(0,Se.isMediaStream)(e)||(0,Se.isBlobUrl)(e)?!0:fe.test(e)||he.test(e)||ye.test(e)||yt.test(e)||mt.test(e)},ca={youtube:e=>e instanceof Array?e.every(t=>se.test(t)):se.test(e),soundcloud:e=>rt.test(e)&&!fe.test(e),vimeo:e=>nt.test(e)&&!he.test(e)&&!ye.test(e),mux:e=>at.test(e),facebook:e=>it.test(e)||ot.test(e),streamable:e=>st.test(e),wistia:e=>lt.test(e),twitch:e=>ct.test(e)||pt.test(e),dailymotion:e=>ut.test(e),mixcloud:e=>dt.test(e),vidyard:e=>ft.test(e),kaltura:e=>ht.test(e),file:le};var pa=Object.create,N=Object.defineProperty,ua=Object.getOwnPropertyDescriptor,da=Object.getOwnPropertyNames,fa=Object.getPrototypeOf,ha=Object.prototype.hasOwnProperty,ya=(e,t,r)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ma=(e,t)=>{for(var r in t)N(e,r,{get:t[r],enumerable:!0})},gt=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of da(t))!ha.call(e,a)&&a!==r&&N(e,a,{get:()=>t[a],enumerable:!(n=ua(t,a))||n.enumerable});return e},ga=(e,t,r)=>(r=e!=null?pa(fa(e)):{},gt(t||!e||!e.__esModule?N(r,"default",{value:e,enumerable:!0}):r,e)),ba=e=>gt(N({},"__esModule",{value:!0}),e),P=(e,t,r)=>(ya(e,typeof t!="symbol"?t+"":t,r),r),bt={};ma(bt,{default:()=>me});var va=ba(bt),ne=ga(v),E=q,vt=la;const _a="https://www.youtube.com/iframe_api",je="YT",wa="onYouTubeIframeAPIReady",B=/[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,ae=/user\/([a-zA-Z0-9_-]+)\/?/,xa=/youtube-nocookie\.com/,Pa="https://www.youtube-nocookie.com";class me extends ne.Component{constructor(){super(...arguments),P(this,"callPlayer",E.callPlayer),P(this,"parsePlaylist",t=>{if(t instanceof Array)return{listType:"playlist",playlist:t.map(this.getID).join(",")};if(B.test(t)){const[,r]=t.match(B);return{listType:"playlist",list:r.replace(/^UC/,"UU")}}if(ae.test(t)){const[,r]=t.match(ae);return{listType:"user_uploads",list:r}}return{}}),P(this,"onStateChange",t=>{const{data:r}=t,{onPlay:n,onPause:a,onBuffer:i,onBufferEnd:l,onEnded:c,onReady:s,loop:h,config:{playerVars:y,onUnstarted:x}}=this.props,{UNSTARTED:H,PLAYING:C,PAUSED:O,BUFFERING:_t,ENDED:wt,CUED:xt}=window[je].PlayerState;if(r===H&&x(),r===C&&(n(),l()),r===O&&a(),r===_t&&i(),r===wt){const Pt=!!this.callPlayer("getPlaylist");h&&!Pt&&(y.start?this.seekTo(y.start):this.play()),c()}r===xt&&s()}),P(this,"mute",()=>{this.callPlayer("mute")}),P(this,"unmute",()=>{this.callPlayer("unMute")}),P(this,"ref",t=>{this.container=t})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}getID(t){return!t||t instanceof Array||B.test(t)?null:t.match(vt.MATCH_URL_YOUTUBE)[1]}load(t,r){const{playing:n,muted:a,playsinline:i,controls:l,loop:c,config:s,onError:h}=this.props,{playerVars:y,embedOptions:x}=s,H=this.getID(t);if(r){if(B.test(t)||ae.test(t)||t instanceof Array){this.player.loadPlaylist(this.parsePlaylist(t));return}this.player.cueVideoById({videoId:H,startSeconds:(0,E.parseStartTime)(t)||y.start,endSeconds:(0,E.parseEndTime)(t)||y.end});return}(0,E.getSDK)(_a,je,wa,C=>C.loaded).then(C=>{this.container&&(this.player=new C.Player(this.container,{width:"100%",height:"100%",videoId:H,playerVars:{autoplay:n?1:0,mute:a?1:0,controls:l?1:0,start:(0,E.parseStartTime)(t),end:(0,E.parseEndTime)(t),origin:window.location.origin,playsinline:i?1:0,...this.parsePlaylist(t),...y},events:{onReady:()=>{c&&this.player.setLoop(!0),this.props.onReady()},onPlaybackRateChange:O=>this.props.onPlaybackRateChange(O.data),onPlaybackQualityChange:O=>this.props.onPlaybackQualityChange(O),onStateChange:this.onStateChange,onError:O=>h(O.data)},host:xa.test(t)?Pa:void 0,...x}))},h),x.events&&console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause")}play(){this.callPlayer("playVideo")}pause(){this.callPlayer("pauseVideo")}stop(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}seekTo(t,r=!1){this.callPlayer("seekTo",t),!r&&!this.props.playing&&this.pause()}setVolume(t){this.callPlayer("setVolume",t*100)}setPlaybackRate(t){this.callPlayer("setPlaybackRate",t)}setLoop(t){this.callPlayer("setLoop",t)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}render(){const{display:t}=this.props,r={width:"100%",height:"100%",display:t};return ne.default.createElement("div",{style:r},ne.default.createElement("div",{ref:this.ref}))}}P(me,"displayName","YouTube");P(me,"canPlay",vt.canPlay.youtube);var Oa=Yn.createReactPlayer,Ee=va.default,Ta=Oa([{key:"youtube",canPlay:Ee.canPlay,lazyPlayer:Ee}]);const Sa=St(Ta),ja=({onClose:e,movieId:t})=>{const r=F(jt),n=ce();v.useEffect(()=>{const i=l=>{l.code==="Escape"&&e()};return window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i)}},[e]),v.useEffect(()=>{n(Et(t))},[n,t]);const a=`https://www.youtube.com/embed/${r}`;return o.jsxs(o.Fragment,{children:[o.jsx(Me,{onClick:e}),o.jsx(qt,{children:o.jsx(Sa,{url:a,controls:!0})})]})},Ea=({onClose:e,movieId:t})=>{var c;const r=ce(),n=F($t),a=F(kt),[i,l]=v.useState(!1);return v.useEffect(()=>{a.findIndex(h=>h.id===n.id)>=0?l(!0):l(!1)},[a,n]),v.useEffect(()=>{const s=h=>{h.code==="Escape"&&e()};return window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[e]),v.useEffect(()=>{r(Ct(t))},[r,t]),o.jsxs(o.Fragment,{children:[o.jsx(Me,{onClick:e}),o.jsxs(Xt,{children:[o.jsx(Jt,{children:o.jsx(Zt,{onClick:e,children:o.jsx("use",{href:`${Dt}#icon-outline`})})}),o.jsxs(Gt,{children:[o.jsx("div",{children:o.jsx(Qt,{src:`https://image.tmdb.org/t/p/w780${n.poster_path}`,alt:n.original_title})}),o.jsxs("div",{children:[o.jsx(er,{children:n.original_title}),o.jsxs(Z,{children:[o.jsx(z,{children:"Vote/Votes"}),o.jsx(Q,{children:`${n.vote_average}/${n.vote_count}`})]}),o.jsxs(Z,{children:[o.jsx(z,{children:"Popularity"}),o.jsx(Q,{children:n.popularity})]}),o.jsxs(Z,{children:[o.jsx(z,{children:"Genre"}),o.jsx("div",{children:(c=n==null?void 0:n.genres)==null?void 0:c.map(s=>o.jsx(Q,{children:s.name},s.id))})]}),o.jsxs("div",{children:[o.jsx(z,{children:"ABOUT"}),o.jsx(tr,{children:n.overview})]}),i?o.jsx(ge,{onClick:()=>{r(At(n))},children:"Remove from my library"}):o.jsx(ge,{onClick:()=>{r(Mt(n))},children:"Add to my library"})]})]})]})]})},$a=({trends:e,timer:t})=>{let r=e.vote_average*100/10*5/100;const[n,a]=v.useState(!1),[i,l]=v.useState(!1),c=()=>{a(!0),clearTimeout(t)},s=()=>{l(!0),clearTimeout(t)};return o.jsxs(o.Fragment,{children:[o.jsx(Kt,{$imgUrl:e.backdrop_path,children:o.jsxs($e,{children:[o.jsxs(Ae,{children:[o.jsx(Wt,{children:o.jsx(dr,{currentRate:r})}),o.jsx(ke,{children:e.title}),o.jsx(Ce,{children:e.overview})]}),o.jsxs(Yt,{children:[o.jsx(ie,{onClick:c,children:"Watch trailer"}),o.jsx(ie,{onClick:s,children:"More details"})]})]})}),n&&o.jsx(ja,{onClose:()=>a(!1),movieId:e.id}),i&&o.jsx(Ea,{onClose:()=>l(!1),movieId:e.id})]})},Ma=()=>{const e=ce(),t=F(Rt),[r,n]=v.useState(0),[a,i]=v.useState(null);return v.useEffect(()=>{e(Lt())},[e]),v.useEffect(()=>{const l=setTimeout(()=>{n(r===19?0:r+1)},1e4);return i(l),()=>clearTimeout(a)},[r]),o.jsx(Ft,{children:t!==null&&(t==null?void 0:t.length)>0?o.jsx($a,{trends:t[r],timer:a}):o.jsx(o.Fragment,{children:o.jsxs($e,{children:[o.jsxs(Ae,{children:[o.jsx(ke,{children:"Let’s Make Your Own Cinema"}),o.jsx(Ce,{children:"Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers."})]}),o.jsx(ie,{children:o.jsx(It,{to:"/catalog",children:"Get Started"})})]})})})};export{Ma as H};
