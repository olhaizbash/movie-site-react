function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Preview-D7LGDaHI.js","assets/index-DyG1v5LR.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{u as P,R as T,j as i,g as bt,r as v,_ as vt,d as q,e as Pt,a as Oe,f as wt,b as xe,h as Ot,i as xt,k as Tt,N as St}from"./index-DyG1v5LR.js";import{C as Te}from"./Container-CkU0VT3E.js";const Et="/movie-site-react/assets/hero_mob-D4bsknua.jpg",Ct="/movie-site-react/assets/hero_mob_2x-DVLF-0vp.jpg",jt="/movie-site-react/assets/hero_tab-Bns2UM_L.jpg",At="/movie-site-react/assets/hero_tab_2x-r4FNr-wk.jpg",Rt="/movie-site-react/assets/hero-BM7XBHXv.jpg",Mt="/movie-site-react/assets/hero_2x-CuRl-OTU.jpg",$t=P.section`
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 auto;
  background: #6b5f5f;
  background-size: cover;

  background-image: url(${Et});

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${Ct});
  }
  @media screen and (max-width: 767px) {
    max-width: 320px;
    height: 380px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 768px;
    height: 432px;
    background: linear-gradient(83deg, #111 39.6%, rgba(17, 17, 17, 0) 72.95%),
      url(${jt}) lightgray 99.376% 104.171% no-repeat;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: linear-gradient(83deg, #111 39.6%, rgba(17, 17, 17, 0) 72.95%),
        url(${At}) lightgray 60.002px -7.221px / 92.376% 104.171% no-repeat;
    }
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    width: 1280px;
    height: 720px;
    background: linear-gradient(83deg, #111 36.85%, rgba(17, 17, 17, 0) 60.05%),
      url(${Rt}) lightgray 91.116% 101.072% no-repeat;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: linear-gradient(
          83deg,
          #111 36.85%,
          rgba(17, 17, 17, 0) 60.05%
        ),
        url(${Mt}) lightgray 116.549px -4px / 91.116% 101.072% no-repeat;
    }
  }
`,kt=P.div`
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
`,Se=P.h1`
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
`,Lt=P.div``;P.input`
  display: none;
`;const Ee=P.p`
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
`,Ce=P.div`
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
`,It=P.div`
  display: flex;
  gap: 8px;
`,te=P.button`
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
`,Dt=P.div`
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
`,Ut=P.div`
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
`;var je={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},de=T.createContext&&T.createContext(je),Nt=["attr","size","title"];function Ht(e,t){if(e==null)return{};var r=zt(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function zt(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,o;for(o=0;o<n.length;o++)a=n[o],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}function V(){return V=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},V.apply(this,arguments)}function fe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?fe(Object(r),!0).forEach(function(n){Bt(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):fe(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Bt(e,t,r){return t=Vt(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Vt(e){var t=Ft(e,"string");return typeof t=="symbol"?t:String(t)}function Ft(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ae(e){return e&&e.map((t,r)=>T.createElement(t.tag,F({key:r},t.attr),Ae(t.child)))}function oe(e){return t=>T.createElement(Wt,V({attr:F({},e.attr)},t),Ae(e.child))}function Wt(e){var t=r=>{var{attr:n,size:a,title:o}=e,l=Ht(e,Nt),c=a||r.size||"1em",s;return r.className&&(s=r.className),e.className&&(s=(s?s+" ":"")+e.className),T.createElement("svg",V({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,l,{className:s,style:F(F({color:e.color||r.color},r.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),o&&T.createElement("title",null,o),e.children)};return de!==void 0?T.createElement(de.Consumer,null,r=>t(r)):t(je)}function Yt(e){return oe({tag:"svg",attr:{viewBox:"0 0 536 512"},child:[{tag:"path",attr:{d:"M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"},child:[]}]})(e)}function Kt(e){return oe({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(e)}function Xt(e){return oe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"},child:[]}]})(e)}const qt=({currentRate:e})=>{const t=Array.from({length:5},(r,n)=>{let a=n+.5,o=n+1;return i.jsx("span",{children:e>=o?i.jsx(Kt,{size:20,color:"#f87719"}):e>=a?i.jsx(Yt,{size:20,color:"#f87719"}):i.jsx(Xt,{size:20,color:"#f87719"})},n)});return i.jsx(i.Fragment,{children:t})};var Gt=function(t){return Jt(t)&&!Zt(t)};function Jt(e){return!!e&&typeof e=="object"}function Zt(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||tr(e)}var Qt=typeof Symbol=="function"&&Symbol.for,er=Qt?Symbol.for("react.element"):60103;function tr(e){return e.$$typeof===er}function rr(e){return Array.isArray(e)?[]:{}}function L(e,t){return t.clone!==!1&&t.isMergeableObject(e)?A(rr(e),e,t):e}function nr(e,t,r){return e.concat(t).map(function(n){return L(n,r)})}function ar(e,t){if(!t.customMerge)return A;var r=t.customMerge(e);return typeof r=="function"?r:A}function or(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function he(e){return Object.keys(e).concat(or(e))}function Re(e,t){try{return t in e}catch{return!1}}function ir(e,t){return Re(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function sr(e,t,r){var n={};return r.isMergeableObject(e)&&he(e).forEach(function(a){n[a]=L(e[a],r)}),he(t).forEach(function(a){ir(e,a)||(Re(e,a)&&r.isMergeableObject(t[a])?n[a]=ar(a,r)(e[a],t[a],r):n[a]=L(t[a],r))}),n}function A(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||nr,r.isMergeableObject=r.isMergeableObject||Gt,r.cloneUnlessOtherwiseSpecified=L;var n=Array.isArray(t),a=Array.isArray(e),o=n===a;return o?n?r.arrayMerge(e,t,r):sr(e,t,r):L(t,r)}A.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(n,a){return A(n,a,r)},{})};var lr=A,Me=lr,ye=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function cr(e,t){return!!(e===t||ye(e)&&ye(t))}function ur(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!cr(e[r],t[r]))return!1;return!0}function pr(e,t){t===void 0&&(t=ur);var r,n=[],a,o=!1;function l(){for(var c=[],s=0;s<arguments.length;s++)c[s]=arguments[s];return o&&r===this&&t(c,n)||(a=e.apply(this,c),o=!0,r=this,n=c),a}return l}const dr=Object.freeze(Object.defineProperty({__proto__:null,default:pr},Symbol.toStringTag,{value:"Module"})),fr=bt(dr);var hr=typeof Element<"u",yr=typeof Map=="function",mr=typeof Set=="function",gr=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function B(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,n,a;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(n=r;n--!==0;)if(!B(e[n],t[n]))return!1;return!0}var o;if(yr&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(o=e.entries();!(n=o.next()).done;)if(!t.has(n.value[0]))return!1;for(o=e.entries();!(n=o.next()).done;)if(!B(n.value[1],t.get(n.value[0])))return!1;return!0}if(mr&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(o=e.entries();!(n=o.next()).done;)if(!t.has(n.value[0]))return!1;return!0}if(gr&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(r=e.length,r!=t.length)return!1;for(n=r;n--!==0;)if(e[n]!==t[n])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(a=Object.keys(e),r=a.length,r!==Object.keys(t).length)return!1;for(n=r;n--!==0;)if(!Object.prototype.hasOwnProperty.call(t,a[n]))return!1;if(hr&&e instanceof Element)return!1;for(n=r;n--!==0;)if(!((a[n]==="_owner"||a[n]==="__v"||a[n]==="__o")&&e.$$typeof)&&!B(e[a[n]],t[a[n]]))return!1;return!0}return e!==e&&t!==t}var $e=function(t,r){try{return B(t,r)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}},ke={exports:{}},_r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",br=_r,vr=br;function Le(){}function Ie(){}Ie.resetWarningCache=Le;var Pr=function(){function e(n,a,o,l,c,s){if(s!==vr){var _=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw _.name="Invariant Violation",_}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Ie,resetWarningCache:Le};return r.PropTypes=r,r};ke.exports=Pr();var wr=ke.exports,Or=Object.create,W=Object.defineProperty,xr=Object.getOwnPropertyDescriptor,Tr=Object.getOwnPropertyNames,Sr=Object.getPrototypeOf,Er=Object.prototype.hasOwnProperty,Cr=(e,t)=>{for(var r in t)W(e,r,{get:t[r],enumerable:!0})},De=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Tr(t))!Er.call(e,a)&&a!==r&&W(e,a,{get:()=>t[a],enumerable:!(n=xr(t,a))||n.enumerable});return e},jr=(e,t,r)=>(r=e!=null?Or(Sr(e)):{},De(t||!e||!e.__esModule?W(r,"default",{value:e,enumerable:!0}):r,e)),Ar=e=>De(W({},"__esModule",{value:!0}),e),Ue={};Cr(Ue,{defaultProps:()=>$r,propTypes:()=>Mr});var Ne=Ar(Ue),Rr=jr(wr);const{string:h,bool:g,number:S,array:G,oneOfType:M,shape:b,object:m,func:d,node:me}=Rr.default,Mr={url:M([h,G,m]),playing:g,loop:g,controls:g,volume:S,muted:g,playbackRate:S,width:M([h,S]),height:M([h,S]),style:m,progressInterval:S,playsinline:g,pip:g,stopOnUnmount:g,light:M([g,h,m]),playIcon:me,previewTabIndex:S,previewAriaLabel:h,fallback:me,oEmbedUrl:h,wrapper:M([h,d,b({render:d.isRequired})]),config:b({soundcloud:b({options:m}),youtube:b({playerVars:m,embedOptions:m,onUnstarted:d}),facebook:b({appId:h,version:h,playerId:h,attributes:m}),dailymotion:b({params:m}),vimeo:b({playerOptions:m,title:h}),mux:b({attributes:m,version:h}),file:b({attributes:m,tracks:G,forceVideo:g,forceAudio:g,forceHLS:g,forceSafariHLS:g,forceDisableHls:g,forceDASH:g,forceFLV:g,hlsOptions:m,hlsVersion:h,dashVersion:h,flvVersion:h}),wistia:b({options:m,playerId:h,customControls:G}),mixcloud:b({options:m}),twitch:b({options:m,playerId:h}),vidyard:b({options:m})}),onReady:d,onStart:d,onPlay:d,onPause:d,onBuffer:d,onBufferEnd:d,onEnded:d,onError:d,onDuration:d,onSeek:d,onPlaybackRateChange:d,onPlaybackQualityChange:d,onProgress:d,onClickPreview:d,onEnablePIP:d,onDisablePIP:d},y=()=>{},$r={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:y},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:y,onStart:y,onPlay:y,onPause:y,onBuffer:y,onBufferEnd:y,onEnded:y,onError:y,onDuration:y,onSeek:y,onPlaybackRateChange:y,onPlaybackQualityChange:y,onProgress:y,onClickPreview:y,onEnablePIP:y,onDisablePIP:y};var kr=function(t,r,n){var a=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");typeof r=="function"&&(n=r,r={}),r=r||{},n=n||function(){},o.type=r.type||"text/javascript",o.charset=r.charset||"utf8",o.async="async"in r?!!r.async:!0,o.src=t,r.attrs&&Lr(o,r.attrs),r.text&&(o.text=""+r.text);var l="onload"in o?ge:Ir;l(o,n),o.onload||ge(o,n),a.appendChild(o)};function Lr(e,t){for(var r in t)e.setAttribute(r,t[r])}function ge(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function Ir(e,t){e.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,t(null,e))}}var Dr=Object.create,Y=Object.defineProperty,Ur=Object.getOwnPropertyDescriptor,Nr=Object.getOwnPropertyNames,Hr=Object.getPrototypeOf,zr=Object.prototype.hasOwnProperty,Br=(e,t)=>{for(var r in t)Y(e,r,{get:t[r],enumerable:!0})},He=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Nr(t))!zr.call(e,a)&&a!==r&&Y(e,a,{get:()=>t[a],enumerable:!(n=Ur(t,a))||n.enumerable});return e},ie=(e,t,r)=>(r=e!=null?Dr(Hr(e)):{},He(t||!e||!e.__esModule?Y(r,"default",{value:e,enumerable:!0}):r,e)),Vr=e=>He(Y({},"__esModule",{value:!0}),e),ze={};Br(ze,{callPlayer:()=>on,getConfig:()=>nn,getSDK:()=>rn,isBlobUrl:()=>ln,isMediaStream:()=>sn,lazy:()=>Kr,omit:()=>an,parseEndTime:()=>Qr,parseStartTime:()=>Zr,queryString:()=>tn,randomString:()=>en,supportsWebKitPresentationMode:()=>cn});var K=Vr(ze),Fr=ie(v),Wr=ie(kr),Yr=ie(Me);const Kr=e=>Fr.default.lazy(async()=>{const t=await e();return typeof t.default=="function"?t:t.default}),Xr=/[?&#](?:start|t)=([0-9hms]+)/,qr=/[?&#]end=([0-9hms]+)/,re=/(\d+)(h|m|s)/g,Gr=/^\d+$/;function Be(e,t){if(e instanceof Array)return;const r=e.match(t);if(r){const n=r[1];if(n.match(re))return Jr(n);if(Gr.test(n))return parseInt(n)}}function Jr(e){let t=0,r=re.exec(e);for(;r!==null;){const[,n,a]=r;a==="h"&&(t+=parseInt(n,10)*60*60),a==="m"&&(t+=parseInt(n,10)*60),a==="s"&&(t+=parseInt(n,10)),r=re.exec(e)}return t}function Zr(e){return Be(e,Xr)}function Qr(e){return Be(e,qr)}function en(){return Math.random().toString(36).substr(2,5)}function tn(e){return Object.keys(e).map(t=>`${t}=${e[t]}`).join("&")}function J(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const E={},rn=function(t,r,n=null,a=()=>!0,o=Wr.default){const l=J(r);return l&&a(l)?Promise.resolve(l):new Promise((c,s)=>{if(E[t]){E[t].push({resolve:c,reject:s});return}E[t]=[{resolve:c,reject:s}];const _=f=>{E[t].forEach(w=>w.resolve(f))};if(n){const f=window[n];window[n]=function(){f&&f(),_(J(r))}}o(t,f=>{f?(E[t].forEach(w=>w.reject(f)),E[t]=null):n||_(J(r))})})};function nn(e,t){return(0,Yr.default)(t.config,e.config)}function an(e,...t){const r=[].concat(...t),n={},a=Object.keys(e);for(const o of a)r.indexOf(o)===-1&&(n[o]=e[o]);return n}function on(e,...t){if(!this.player||!this.player[e]){let r=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c – `;return this.player?this.player[e]||(r+="The method was not available"):r+="The player was not available",console.warn(r,"font-weight: bold",""),null}return this.player[e](...t)}function sn(e){return typeof window<"u"&&typeof window.MediaStream<"u"&&e instanceof window.MediaStream}function ln(e){return/^blob:/.test(e)}function cn(e=document.createElement("video")){const t=/iPhone|iPod/.test(navigator.userAgent)===!1;return e.webkitSupportsPresentationMode&&typeof e.webkitSetPresentationMode=="function"&&t}var un=Object.create,I=Object.defineProperty,pn=Object.getOwnPropertyDescriptor,dn=Object.getOwnPropertyNames,fn=Object.getPrototypeOf,hn=Object.prototype.hasOwnProperty,yn=(e,t,r)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,mn=(e,t)=>{for(var r in t)I(e,r,{get:t[r],enumerable:!0})},Ve=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of dn(t))!hn.call(e,a)&&a!==r&&I(e,a,{get:()=>t[a],enumerable:!(n=pn(t,a))||n.enumerable});return e},Fe=(e,t,r)=>(r=e!=null?un(fn(e)):{},Ve(t||!e||!e.__esModule?I(r,"default",{value:e,enumerable:!0}):r,e)),gn=e=>Ve(I({},"__esModule",{value:!0}),e),p=(e,t,r)=>(yn(e,typeof t!="symbol"?t+"":t,r),r),We={};mn(We,{default:()=>X});var _n=gn(We),_e=Fe(v),bn=Fe($e),Ye=Ne,vn=K;const Pn=5e3;let X=class extends _e.Component{constructor(){super(...arguments),p(this,"mounted",!1),p(this,"isReady",!1),p(this,"isPlaying",!1),p(this,"isLoading",!0),p(this,"loadOnReady",null),p(this,"startOnPlay",!0),p(this,"seekOnPlay",null),p(this,"onDurationCalled",!1),p(this,"handlePlayerMount",t=>{if(this.player){this.progress();return}this.player=t,this.player.load(this.props.url),this.progress()}),p(this,"getInternalPlayer",t=>this.player?this.player[t]:null),p(this,"progress",()=>{if(this.props.url&&this.player&&this.isReady){const t=this.getCurrentTime()||0,r=this.getSecondsLoaded(),n=this.getDuration();if(n){const a={playedSeconds:t,played:t/n};r!==null&&(a.loadedSeconds=r,a.loaded=r/n),(a.playedSeconds!==this.prevPlayed||a.loadedSeconds!==this.prevLoaded)&&this.props.onProgress(a),this.prevPlayed=a.playedSeconds,this.prevLoaded=a.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)}),p(this,"handleReady",()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:t,playing:r,volume:n,muted:a}=this.props;t(),!a&&n!==null&&this.player.setVolume(n),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):r&&this.player.play(),this.handleDurationCheck()}),p(this,"handlePlay",()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:t,onPlay:r,playbackRate:n}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&n!==1&&this.player.setPlaybackRate(n),t(),this.startOnPlay=!1),r(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()}),p(this,"handlePause",t=>{this.isPlaying=!1,this.isLoading||this.props.onPause(t)}),p(this,"handleEnded",()=>{const{activePlayer:t,loop:r,onEnded:n}=this.props;t.loopOnEnded&&r&&this.seekTo(0),r||(this.isPlaying=!1,n())}),p(this,"handleError",(...t)=>{this.isLoading=!1,this.props.onError(...t)}),p(this,"handleDurationCheck",()=>{clearTimeout(this.durationCheckTimeout);const t=this.getDuration();t?this.onDurationCalled||(this.props.onDuration(t),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)}),p(this,"handleLoaded",()=>{this.isLoading=!1})}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(t){if(!this.player)return;const{url:r,playing:n,volume:a,muted:o,playbackRate:l,pip:c,loop:s,activePlayer:_,disableDeferredLoading:f}=this.props;if(!(0,bn.default)(t.url,r)){if(this.isLoading&&!_.forceLoad&&!f&&!(0,vn.isMediaStream)(r)){console.warn(`ReactPlayer: the attempt to load ${r} is being deferred until the player has loaded`),this.loadOnReady=r;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(r,this.isReady)}!t.playing&&n&&!this.isPlaying&&this.player.play(),t.playing&&!n&&this.isPlaying&&this.player.pause(),!t.pip&&c&&this.player.enablePIP&&this.player.enablePIP(),t.pip&&!c&&this.player.disablePIP&&this.player.disablePIP(),t.volume!==a&&a!==null&&this.player.setVolume(a),t.muted!==o&&(o?this.player.mute():(this.player.unmute(),a!==null&&setTimeout(()=>this.player.setVolume(a)))),t.playbackRate!==l&&this.player.setPlaybackRate&&this.player.setPlaybackRate(l),t.loop!==s&&this.player.setLoop&&this.player.setLoop(s)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(t,r,n){if(!this.isReady){t!==0&&(this.seekOnPlay=t,setTimeout(()=>{this.seekOnPlay=null},Pn));return}if(r?r==="fraction":t>0&&t<1){const o=this.player.getDuration();if(!o){console.warn("ReactPlayer: could not seek using fraction – duration not yet available");return}this.player.seekTo(o*t,n);return}this.player.seekTo(t,n)}render(){const t=this.props.activePlayer;return t?_e.default.createElement(t,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}};p(X,"displayName","Player");p(X,"propTypes",Ye.propTypes);p(X,"defaultProps",Ye.defaultProps);var wn=Object.create,D=Object.defineProperty,On=Object.getOwnPropertyDescriptor,xn=Object.getOwnPropertyNames,Tn=Object.getPrototypeOf,Sn=Object.prototype.hasOwnProperty,En=(e,t,r)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Cn=(e,t)=>{for(var r in t)D(e,r,{get:t[r],enumerable:!0})},Ke=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of xn(t))!Sn.call(e,a)&&a!==r&&D(e,a,{get:()=>t[a],enumerable:!(n=On(t,a))||n.enumerable});return e},U=(e,t,r)=>(r=e!=null?wn(Tn(e)):{},Ke(t||!e||!e.__esModule?D(r,"default",{value:e,enumerable:!0}):r,e)),jn=e=>Ke(D({},"__esModule",{value:!0}),e),u=(e,t,r)=>(En(e,typeof t!="symbol"?t+"":t,r),r),Xe={};Cn(Xe,{createReactPlayer:()=>Un});var An=jn(Xe),j=U(v),Rn=U(Me),Z=U(fr),be=U($e),k=Ne,qe=K,Mn=U(_n);const $n=(0,qe.lazy)(()=>vt(()=>import("./Preview-D7LGDaHI.js").then(e=>e.P),__vite__mapDeps([0,1]))),kn=typeof window<"u"&&window.document&&typeof document<"u",Ln=typeof q<"u"&&q.window&&q.window.document,In=Object.keys(k.propTypes),Dn=kn||Ln?j.Suspense:()=>null,$=[],Un=(e,t)=>{var r;return r=class extends j.Component{constructor(){super(...arguments),u(this,"state",{showPreview:!!this.props.light}),u(this,"references",{wrapper:n=>{this.wrapper=n},player:n=>{this.player=n}}),u(this,"handleClickPreview",n=>{this.setState({showPreview:!1}),this.props.onClickPreview(n)}),u(this,"showPreview",()=>{this.setState({showPreview:!0})}),u(this,"getDuration",()=>this.player?this.player.getDuration():null),u(this,"getCurrentTime",()=>this.player?this.player.getCurrentTime():null),u(this,"getSecondsLoaded",()=>this.player?this.player.getSecondsLoaded():null),u(this,"getInternalPlayer",(n="player")=>this.player?this.player.getInternalPlayer(n):null),u(this,"seekTo",(n,a,o)=>{if(!this.player)return null;this.player.seekTo(n,a,o)}),u(this,"handleReady",()=>{this.props.onReady(this)}),u(this,"getActivePlayer",(0,Z.default)(n=>{for(const a of[...$,...e])if(a.canPlay(n))return a;return t||null})),u(this,"getConfig",(0,Z.default)((n,a)=>{const{config:o}=this.props;return Rn.default.all([k.defaultProps.config,k.defaultProps.config[a]||{},o,o[a]||{}])})),u(this,"getAttributes",(0,Z.default)(n=>(0,qe.omit)(this.props,In))),u(this,"renderActivePlayer",n=>{if(!n)return null;const a=this.getActivePlayer(n);if(!a)return null;const o=this.getConfig(n,a.key);return j.default.createElement(Mn.default,{...this.props,key:a.key,ref:this.references.player,config:o,activePlayer:a.lazyPlayer||a,onReady:this.handleReady})})}shouldComponentUpdate(n,a){return!(0,be.default)(this.props,n)||!(0,be.default)(this.state,a)}componentDidUpdate(n){const{light:a}=this.props;!n.light&&a&&this.setState({showPreview:!0}),n.light&&!a&&this.setState({showPreview:!1})}renderPreview(n){if(!n)return null;const{light:a,playIcon:o,previewTabIndex:l,oEmbedUrl:c,previewAriaLabel:s}=this.props;return j.default.createElement($n,{url:n,light:a,playIcon:o,previewTabIndex:l,previewAriaLabel:s,oEmbedUrl:c,onClick:this.handleClickPreview})}render(){const{url:n,style:a,width:o,height:l,fallback:c,wrapper:s}=this.props,{showPreview:_}=this.state,f=this.getAttributes(n),w=typeof s=="string"?this.references.wrapper:void 0;return j.default.createElement(s,{ref:w,style:{...a,width:o,height:l},...f},j.default.createElement(Dn,{fallback:c},_?this.renderPreview(n):this.renderActivePlayer(n)))}},u(r,"displayName","ReactPlayer"),u(r,"propTypes",k.propTypes),u(r,"defaultProps",k.defaultProps),u(r,"addCustomPlayer",n=>{$.push(n)}),u(r,"removeCustomPlayers",()=>{$.length=0}),u(r,"canPlay",n=>{for(const a of[...$,...e])if(a.canPlay(n))return!0;return!1}),u(r,"canEnablePIP",n=>{for(const a of[...$,...e])if(a.canEnablePIP&&a.canEnablePIP(n))return!0;return!1}),r};var se=Object.defineProperty,Nn=Object.getOwnPropertyDescriptor,Hn=Object.getOwnPropertyNames,zn=Object.prototype.hasOwnProperty,Bn=(e,t)=>{for(var r in t)se(e,r,{get:t[r],enumerable:!0})},Vn=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Hn(t))!zn.call(e,a)&&a!==r&&se(e,a,{get:()=>t[a],enumerable:!(n=Nn(t,a))||n.enumerable});return e},Fn=e=>Vn(se({},"__esModule",{value:!0}),e),Ge={};Bn(Ge,{AUDIO_EXTENSIONS:()=>le,DASH_EXTENSIONS:()=>ut,FLV_EXTENSIONS:()=>pt,HLS_EXTENSIONS:()=>ue,MATCH_URL_DAILYMOTION:()=>it,MATCH_URL_FACEBOOK:()=>et,MATCH_URL_FACEBOOK_WATCH:()=>tt,MATCH_URL_KALTURA:()=>ct,MATCH_URL_MIXCLOUD:()=>st,MATCH_URL_MUX:()=>Qe,MATCH_URL_SOUNDCLOUD:()=>Je,MATCH_URL_STREAMABLE:()=>rt,MATCH_URL_TWITCH_CHANNEL:()=>ot,MATCH_URL_TWITCH_VIDEO:()=>at,MATCH_URL_VIDYARD:()=>lt,MATCH_URL_VIMEO:()=>Ze,MATCH_URL_WISTIA:()=>nt,MATCH_URL_YOUTUBE:()=>ne,VIDEO_EXTENSIONS:()=>ce,canPlay:()=>Yn});var Wn=Fn(Ge),ve=K;const ne=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,Je=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,Ze=/vimeo\.com\/(?!progressive_redirect).+/,Qe=/stream\.mux\.com\/(\w+)/,et=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,tt=/^https?:\/\/fb\.watch\/.+$/,rt=/streamable\.com\/([a-z0-9]+)$/,nt=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,at=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,ot=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,it=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,st=/mixcloud\.com\/([^/]+\/[^/]+)/,lt=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,ct=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,le=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,ce=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,ue=/\.(m3u8)($|\?)/i,ut=/\.(mpd)($|\?)/i,pt=/\.(flv)($|\?)/i,ae=e=>{if(e instanceof Array){for(const t of e)if(typeof t=="string"&&ae(t)||ae(t.src))return!0;return!1}return(0,ve.isMediaStream)(e)||(0,ve.isBlobUrl)(e)?!0:le.test(e)||ce.test(e)||ue.test(e)||ut.test(e)||pt.test(e)},Yn={youtube:e=>e instanceof Array?e.every(t=>ne.test(t)):ne.test(e),soundcloud:e=>Je.test(e)&&!le.test(e),vimeo:e=>Ze.test(e)&&!ce.test(e)&&!ue.test(e),mux:e=>Qe.test(e),facebook:e=>et.test(e)||tt.test(e),streamable:e=>rt.test(e),wistia:e=>nt.test(e),twitch:e=>at.test(e)||ot.test(e),dailymotion:e=>it.test(e),mixcloud:e=>st.test(e),vidyard:e=>lt.test(e),kaltura:e=>ct.test(e),file:ae};var Kn=Object.create,N=Object.defineProperty,Xn=Object.getOwnPropertyDescriptor,qn=Object.getOwnPropertyNames,Gn=Object.getPrototypeOf,Jn=Object.prototype.hasOwnProperty,Zn=(e,t,r)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Qn=(e,t)=>{for(var r in t)N(e,r,{get:t[r],enumerable:!0})},dt=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of qn(t))!Jn.call(e,a)&&a!==r&&N(e,a,{get:()=>t[a],enumerable:!(n=Xn(t,a))||n.enumerable});return e},ea=(e,t,r)=>(r=e!=null?Kn(Gn(e)):{},dt(t||!e||!e.__esModule?N(r,"default",{value:e,enumerable:!0}):r,e)),ta=e=>dt(N({},"__esModule",{value:!0}),e),O=(e,t,r)=>(Zn(e,typeof t!="symbol"?t+"":t,r),r),ft={};Qn(ft,{default:()=>pe});var ra=ta(ft),Q=ea(v),C=K,ht=Wn;const na="https://www.youtube.com/iframe_api",Pe="YT",aa="onYouTubeIframeAPIReady",z=/[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,ee=/user\/([a-zA-Z0-9_-]+)\/?/,oa=/youtube-nocookie\.com/,ia="https://www.youtube-nocookie.com";class pe extends Q.Component{constructor(){super(...arguments),O(this,"callPlayer",C.callPlayer),O(this,"parsePlaylist",t=>{if(t instanceof Array)return{listType:"playlist",playlist:t.map(this.getID).join(",")};if(z.test(t)){const[,r]=t.match(z);return{listType:"playlist",list:r.replace(/^UC/,"UU")}}if(ee.test(t)){const[,r]=t.match(ee);return{listType:"user_uploads",list:r}}return{}}),O(this,"onStateChange",t=>{const{data:r}=t,{onPlay:n,onPause:a,onBuffer:o,onBufferEnd:l,onEnded:c,onReady:s,loop:_,config:{playerVars:f,onUnstarted:w}}=this.props,{UNSTARTED:H,PLAYING:R,PAUSED:x,BUFFERING:yt,ENDED:mt,CUED:gt}=window[Pe].PlayerState;if(r===H&&w(),r===R&&(n(),l()),r===x&&a(),r===yt&&o(),r===mt){const _t=!!this.callPlayer("getPlaylist");_&&!_t&&(f.start?this.seekTo(f.start):this.play()),c()}r===gt&&s()}),O(this,"mute",()=>{this.callPlayer("mute")}),O(this,"unmute",()=>{this.callPlayer("unMute")}),O(this,"ref",t=>{this.container=t})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}getID(t){return!t||t instanceof Array||z.test(t)?null:t.match(ht.MATCH_URL_YOUTUBE)[1]}load(t,r){const{playing:n,muted:a,playsinline:o,controls:l,loop:c,config:s,onError:_}=this.props,{playerVars:f,embedOptions:w}=s,H=this.getID(t);if(r){if(z.test(t)||ee.test(t)||t instanceof Array){this.player.loadPlaylist(this.parsePlaylist(t));return}this.player.cueVideoById({videoId:H,startSeconds:(0,C.parseStartTime)(t)||f.start,endSeconds:(0,C.parseEndTime)(t)||f.end});return}(0,C.getSDK)(na,Pe,aa,R=>R.loaded).then(R=>{this.container&&(this.player=new R.Player(this.container,{width:"100%",height:"100%",videoId:H,playerVars:{autoplay:n?1:0,mute:a?1:0,controls:l?1:0,start:(0,C.parseStartTime)(t),end:(0,C.parseEndTime)(t),origin:window.location.origin,playsinline:o?1:0,...this.parsePlaylist(t),...f},events:{onReady:()=>{c&&this.player.setLoop(!0),this.props.onReady()},onPlaybackRateChange:x=>this.props.onPlaybackRateChange(x.data),onPlaybackQualityChange:x=>this.props.onPlaybackQualityChange(x),onStateChange:this.onStateChange,onError:x=>_(x.data)},host:oa.test(t)?ia:void 0,...w}))},_),w.events&&console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause")}play(){this.callPlayer("playVideo")}pause(){this.callPlayer("pauseVideo")}stop(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}seekTo(t,r=!1){this.callPlayer("seekTo",t),!r&&!this.props.playing&&this.pause()}setVolume(t){this.callPlayer("setVolume",t*100)}setPlaybackRate(t){this.callPlayer("setPlaybackRate",t)}setLoop(t){this.callPlayer("setLoop",t)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}render(){const{display:t}=this.props,r={width:"100%",height:"100%",display:t};return Q.default.createElement("div",{style:r},Q.default.createElement("div",{ref:this.ref}))}}O(pe,"displayName","YouTube");O(pe,"canPlay",ht.canPlay.youtube);var sa=An.createReactPlayer,we=ra.default,la=sa([{key:"youtube",canPlay:we.canPlay,lazyPlayer:we}]);const ca=Pt(la),ua=({onClose:e,movieId:t})=>{const r=Oe(wt),n=xe();v.useEffect(()=>{const o=l=>{l.code==="Escape"&&e()};return window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[e]),v.useEffect(()=>{n(Ot(t))},[n,t]);const a=`https://www.youtube.com/embed/${r}`;return i.jsxs(i.Fragment,{children:[i.jsx(Dt,{onClick:e}),i.jsx(Ut,{children:i.jsx(ca,{url:a,controls:!0})})]})},pa=({trends:e,timer:t})=>{let r=e.vote_average*100/10*5/100;const[n,a]=v.useState(!1),o=()=>{a(!0),clearTimeout(t)};return i.jsxs(i.Fragment,{children:[i.jsx(kt,{$imgUrl:e.backdrop_path,children:i.jsxs(Te,{children:[i.jsxs(Ce,{children:[i.jsx(Lt,{children:i.jsx(qt,{currentRate:r})}),i.jsx(Se,{children:e.title}),i.jsx(Ee,{children:e.overview})]}),i.jsxs(It,{children:[i.jsx(te,{onClick:o,children:"Watch trailer"}),i.jsx(te,{children:"More details"})]})]})}),n&&i.jsx(ua,{onClose:()=>a(!1),movieId:e.id})]})},ya=()=>{const e=xe(),t=Oe(xt),[r,n]=v.useState(0),[a,o]=v.useState(null);return v.useEffect(()=>{e(Tt())},[e]),v.useEffect(()=>{const l=setTimeout(()=>{n(r===19?0:r+1)},1e4);return o(l),()=>clearTimeout(a)},[r]),i.jsx($t,{children:t!==null&&(t==null?void 0:t.length)>0?i.jsx(pa,{trends:t[r],timer:a}):i.jsx(i.Fragment,{children:i.jsxs(Te,{children:[i.jsxs(Ce,{children:[i.jsx(Se,{children:"Let’s Make Your Own Cinema"}),i.jsx(Ee,{children:"Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers."})]}),i.jsx(te,{children:i.jsx(St,{to:"/catalog",children:"Get Started"})})]})})})};export{ya as H};
