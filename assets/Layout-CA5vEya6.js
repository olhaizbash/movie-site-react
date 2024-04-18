import{u as i,N as p,a as m,s as f,b as u,r,j as t,c as o,d as b,L as j,O as v}from"./index-BPwX3y2F.js";import{C as h}from"./Container-SZXBwtop.js";const y=i.div`
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
`,k=i(p)`
  display: flex;
  align-items: center;
`,w=i.svg`
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
`,$=i.span`
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
`,L=i.button`
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
`,T=i.nav`
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
`,a=i.li`
  color: ${({theme:e})=>e.color.textchange};
  transition: color ${({theme:e})=>e.transition.main};
  position: relative;

  &:hover,
  &:focus {
    color: ${({theme:e})=>e.color.orange};
  }
`,l=i(p)`
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
`,F=i.div`
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
`,N="/movie-site-react/assets/favicon-V8-NnNKM.svg",z=i.div`
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
`,S=i.svg`
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
`,I=i.svg`
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
`,M=()=>{const e=m(f),n=u(),[s,x]=r.useState(!0),g=()=>{n(b(e==="light"?"dark":"light")),x(!s)};return t.jsxs(z,{onClick:g,children:[e==="light"&&t.jsx(S,{children:t.jsx("use",{href:`${o}#icon-sun`})}),e==="dark"&&t.jsx(I,{children:t.jsx("use",{href:`${o}#icon-moon`})})]})},D=()=>{const[e,n]=r.useState(!1);return r.useEffect(()=>{e?document.body.style.overflow="hidden":document.body.style.overflow="visible"},[e]),t.jsx("header",{children:t.jsxs(h,{children:[t.jsxs(y,{children:[t.jsxs(k,{to:"/",children:[t.jsx(w,{children:t.jsx("use",{href:N+"#logo"})}),t.jsx($,{children:"Cinemania"})]}),t.jsx(T,{className:e?"nav-active":"",children:t.jsxs(C,{children:[t.jsx(a,{children:t.jsx(l,{to:"/",onClick:()=>{n(!1)},children:"Home"})}),t.jsx(a,{children:t.jsx(l,{to:"/catalog",onClick:()=>{n(!1)},children:"Catalog"})}),t.jsx(a,{children:t.jsx(l,{to:"/mylibrary",onClick:()=>{n(!1)},children:"My library"})})]})}),t.jsx(L,{onClick:()=>{n(!e)},children:"Menu"}),t.jsx(M,{})]}),t.jsx(F,{className:e?"backdrop-open":"",onClick:s=>{s.target===s.currentTarget?n(!e):n(!0)}})]})})},O=i.section`
  padding-bottom: 20px;
`,B=i.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`,X=i.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,E=i.p`
  color: ${({theme:e})=>e.color.textchange};
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,H=i.svg`
  width: 24px;
  height: 24px;
`,c=i.svg`
  width: 24px;
  height: 24px;
  fill: ${({theme:e})=>e.color.logoText};
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    fill: ${({theme:e})=>e.color.orange};
  }
`,R=i.ul`
  display: flex;
  gap: 10px;
`,d=i.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`,W=()=>t.jsx(O,{children:t.jsx(h,{children:t.jsxs(B,{children:[t.jsxs(X,{children:[t.jsx(E,{children:"2024 | Developed with "}),t.jsx(H,{children:t.jsx("use",{href:`${o}#icon-heart`})})]}),t.jsxs(R,{children:[t.jsx("li",{children:t.jsx(d,{href:"https://www.linkedin.com/in/olha-izbash",target:"_blank",children:t.jsx(c,{children:t.jsx("use",{href:`${o}#icon-inkedin`})})})}),t.jsx("li",{children:t.jsx(d,{href:"https://github.com/olhaizbash",target:"_blank",children:t.jsx(c,{children:t.jsx("use",{href:`${o}#icon-github`})})})})]})]})})}),V=()=>t.jsxs(t.Fragment,{children:[t.jsx(D,{}),t.jsx("main",{children:t.jsx(r.Suspense,{fallback:t.jsx(j,{}),children:t.jsx(v,{})})}),t.jsx(W,{})]});export{V as default};
