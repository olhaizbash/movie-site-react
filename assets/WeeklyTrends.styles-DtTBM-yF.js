import{R as l,j as a,B as S,C as y,H as j,S as T,v,w as k,x as $,y as f,m as x,b as P,a as W,l as C,r as p,z as L,A as E,N as B,u as s}from"./index-v-dK_4Bx.js";var O={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},b=l.createContext&&l.createContext(O),N=["attr","size","title"];function _(e,t){if(e==null)return{};var r=M(e,t),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function M(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?w(Object(r),!0).forEach(function(n){H(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function H(e,t,r){return t=I(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function I(e){var t=R(e,"string");return typeof t=="symbol"?t:String(t)}function R(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function z(e){return e&&e.map((t,r)=>l.createElement(t.tag,h({key:r},t.attr),z(t.child)))}function g(e){return t=>l.createElement(D,u({attr:h({},e.attr)},t),z(e.child))}function D(e){var t=r=>{var{attr:n,size:i,title:o}=e,m=_(e,N),d=i||r.size||"1em",c;return r.className&&(c=r.className),e.className&&(c=(c?c+" ":"")+e.className),l.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,m,{className:c,style:h(h({color:e.color||r.color},r.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),o&&l.createElement("title",null,o),e.children)};return b!==void 0?l.createElement(b.Consumer,null,r=>t(r)):t(O)}function F(e){return g({tag:"svg",attr:{viewBox:"0 0 536 512"},child:[{tag:"path",attr:{d:"M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"},child:[]}]})(e)}function A(e){return g({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(e)}function G(e){return g({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"},child:[]}]})(e)}const K=({currentRate:e})=>{const t=Array.from({length:5},(r,n)=>{let i=n+.5,o=n+1;return a.jsx("span",{children:e>=o?a.jsx(A,{size:20,color:"#f87719"}):e>=i?a.jsx(F,{size:20,color:"#f87719"}):a.jsx(G,{size:20,color:"#f87719"})},n)});return a.jsx(a.Fragment,{children:t})},Y=({trends:e})=>{let t=e.vote_average*100/10*5/100;return a.jsx(a.Fragment,{children:a.jsx(S,{$imgUrl:e.backdrop_path,children:a.jsxs(y,{children:[a.jsxs(j,{children:[a.jsx(T,{children:a.jsx(K,{currentRate:t})}),a.jsx(v,{children:e.title}),a.jsx(k,{children:e.overview})]}),a.jsxs($,{children:[a.jsx(f,{children:a.jsx(x,{to:`/trailer/${e.id}`,children:"Watch trailer"})}),a.jsx(f,{children:a.jsx(x,{to:`/catalog/${e.id}`,children:"More details"})})]})]})})})},q=()=>{const e=P(),t=W(C),r=Math.floor(Math.random()*20+0),[n,i]=p.useState(r),[o,m]=p.useState(null);return p.useEffect(()=>{e(L())},[e]),p.useEffect(()=>{const d=setTimeout(()=>{i(n===19?0:n+1)},1e4);return m(d),()=>clearTimeout(o)},[n]),a.jsx(E,{children:t!==null&&(t==null?void 0:t.length)>0?a.jsx(Y,{trends:t[n],timer:o}):a.jsx(a.Fragment,{children:a.jsxs(y,{children:[a.jsxs(j,{children:[a.jsx(v,{children:"Let’s Make Your Own Cinema"}),a.jsx(k,{children:"Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers."})]}),a.jsx(f,{children:a.jsx(B,{to:"/catalog",children:"Get Started"})})]})})})},J=s.section`
  padding-top: 40px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding-top: 52px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    padding-top: 80px;
  }
`,Q=s.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    gap: 28px;
  }
`,V=s.div`
  display: flex;
  justify-content: space-between;
`,X=s.h2`
  color: ${({theme:e})=>e.color.textchange};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 24px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    font-size: 28px;
  }
`,Z=s(x)`
  color: ${({theme:e})=>e.color.orange};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 24px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    font-size: 28px;
  }
`,ee=s.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    flex-direction: row;
    gap: 16px 15px;
    flex-wrap: wrap;
  }
`,te=s.li`
  width: 280px;
  height: 406px;
  border-radius: 5px;
  box-shadow: 1px 1px 24px 2px rgba(1, 1, 1, 0.45);
  cursor: pointer;
  position: relative;

  &:hover {
    -webkit-box-shadow: ${({theme:e})=>e.modalBoxShadow.cards};
    -moz-box-shadow: ${({theme:e})=>e.modalBoxShadow.cards};
    box-shadow: ${({theme:e})=>e.modalBoxShadow.cards};
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 224px;
    height: 325px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    width: 395px;
    height: 574px;
  }
`,re=s.img`
  display: block;
  border-radius: 5px;
  width: 100%;
  height: 100%;
`,ne=s.div`
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
  position: absolute;
  left: 0px;
  bottom: 0px;
  background: rgb(94, 90, 92);
  background: radial-gradient(
    circle,
    rgba(94, 90, 92, 1) 0%,
    rgba(0, 0, 0, 0.14889705882352944) 44%
  );
  width: 100%;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding: 20px;
  }
`,ae=s.h3`
  color: ${({theme:e})=>e.color.white};
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  text-transform: uppercase;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    line-height: 18px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    line-height: normal;
    font-size: 20px;
  }
`;export{q as H,K as R,J as S,Q as W,V as a,X as b,Z as c,ee as d,te as e,re as f,ne as g,ae as h};
