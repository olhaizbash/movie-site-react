import{u as i,N as l,a as h,s as x,b as g,r as a,j as t,c,d as m,L as u,O as b}from"./index-e0sVv9fV.js";import{C as f}from"./Container-BszR2En6.js";const v=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
  padding-bottom: 8px;
  position: relative;

  @media (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding-top: 12px;
    padding-bottom: 12px;
  }
  @media (min-width: ${({theme:e})=>e.breakpoint.desctop}) {
    padding-top: 6px;
    padding-bottom: 6px;
  }
`,y=i(l)`
  display: flex;
  align-items: center;
`,k=i.svg`
  width: 30px;
  height: 24px;

  @media (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    width: 32px;
    height: 32px;
  }

  @media (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-right: 8px;
    width: 48px;
    height: 48px;
  }
`,j=i.span`
  display: none;
  color: ${({theme:e})=>e.color.logoText};
  transition: color ${({theme:e})=>e.transition.main};

  @media (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }

  @media (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    display: inline-block;
    font-weight: 400;
    font-size: 24px;
    line-height: 1.16;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;

    &:hover,
    &:focus {
      color: ${({theme:e})=>e.color.orange};
    }
  }
`,w=i.button`
display: none;
    
    @media screen and (max-width: 767px) {
display: block;
outline: none;
background-color: transparent;
border: none;
text-transform: uppercase;
color:  ${({theme:e})=>e.color.menuBtn};
font-weight: 500;
font-size: 12px;
line-height: 1.16;
cursor: pointer;
    }
}
`,$=i.nav`
  @media screen and (max-width: 767px) {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    display: none;

    &.nav-active {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
      display: block;
      background-color: ${({theme:e})=>e.color.pageBg};
      position: fixed;
      top: 48px;
      left: 0;
      padding: 20px;
      height: 428px;
      border-radius: 0px 0px 8px 0px;
      z-index: 100;
      width: 100%;
      // height: 100%
      transform: translate(0);
      transition: transform 0.25s ease-in-out;
    }
  }

  @media screen and (max-width: 320px) {
    &.nav-active {
      top: 39px;
    }
  }
`,C=i.ul`
  display: none;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    display: flex;
    gap: 32px;
  }
`,r=i.li`
  color: ${({theme:e})=>e.color.textchange};
  transition: color ${({theme:e})=>e.transition.main};
  position: relative;

  &:hover,
  &:focus {
    color: ${({theme:e})=>e.color.orange};
  }
`,s=i(l)`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;

  &:hover {
    &:after {
      content: "";
      position: absolute;
      width: 30%;
      height: 2px;
      background: ${({theme:e})=>e.color.orange};
      bottom: -4px;
      left: 0px;
    }
  }
`,L=i.div`
  opacity: 0;
  visibility: hidden;
  pointer-events: none;

  @media screen and (max-width: 767px) {
    &.backdrop-open {
      background-color: rgb(0, 0, 0);
      opacity: 0.2;
      visibility: visible;
      pointer-events: auto;
      position: absolute;
      top: 42;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
    }
  }
`,T="/movie-site-react/assets/favicon-V8-NnNKM.svg",N=i.div`
  cursor: pointer;
  width: 44px;
  height: 18px;
  border-radius: 194px;
  padding: 0px;
  background: ${({theme:e})=>e.color.gradient};

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 60px;
    height: 24px;
    padding: 5px;
  }
`,M=i.svg`
  width: 8px;
  height: 8px;
  animation: togglerLight 0.5s linear;
  transform-origin: center right;
  margin-left: 3px;

  @keyframes togglerLight {
    0% {
      transform: translateX(35px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 11px;
    height: 11px;
  }
`,z=i.svg`
  width: 8px;
  height: 8px;
  animation: togglerDark 0.5s linear;
  transform-origin: center left;
  margin-left: 30px;

  @keyframes togglerDark {
    0% {
      transform: translateX(-35px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 11px;
    height: 11px;
  }
`,O=()=>{const e=h(x),n=g(),[o,d]=a.useState(!0),p=()=>{n(m(e==="light"?"dark":"light")),d(!o)};return t.jsxs(N,{onClick:p,children:[e==="light"&&t.jsx(M,{children:t.jsx("use",{href:`${c}#icon-sun`})}),e==="dark"&&t.jsx(z,{children:t.jsx("use",{href:`${c}#icon-moon`})})]})},S=()=>{const[e,n]=a.useState(!1);return a.useEffect(()=>{e?document.body.style.overflow="hidden":document.body.style.overflow="visible"},[e]),t.jsx("header",{children:t.jsxs(f,{children:[t.jsxs(v,{children:[t.jsxs(y,{to:"/",children:[t.jsx(k,{children:t.jsx("use",{href:T+"#logo"})}),t.jsx(j,{children:"Cinemania"})]}),t.jsx($,{className:e?"nav-active":"",children:t.jsxs(C,{children:[t.jsx(r,{children:t.jsx(s,{to:"/",onClick:()=>{n(!1)},children:"Home"})}),t.jsx(r,{children:t.jsx(s,{to:"/catalog",onClick:()=>{n(!1)},children:"Catalog"})}),t.jsx(r,{children:t.jsx(s,{to:"/mylibrary",onClick:()=>{n(!1)},children:"My library"})})]})}),t.jsx(w,{onClick:()=>{n(!e)},children:"Menu"}),t.jsx(O,{})]}),t.jsx(L,{className:e?"backdrop-open":"",onClick:o=>{o.target===o.currentTarget?n(!e):n(!0)}})]})})},B=()=>t.jsx(t.Fragment,{children:t.jsx("p",{children:"Footer"})}),X=()=>t.jsxs(t.Fragment,{children:[t.jsx(S,{}),t.jsx("main",{children:t.jsx(a.Suspense,{fallback:t.jsx(u,{}),children:t.jsx(b,{})})}),t.jsx(B,{})]});export{X as default};
