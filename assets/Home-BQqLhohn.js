import{u as n,e as o,a as r,f as d,j as t}from"./index-JdnGWLnZ.js";import{R as s,H as p}from"./Hero-BZPtOt1U.js";import{C as l}from"./Container-gcvNLAjR.js";const c=n.section`
  padding-top: 40px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding-top: 52px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    padding-top: 80px;
  }
`,x=n.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    gap: 28px;
  }
`,h=n.div`
  display: flex;
  justify-content: space-between;
`,m=n.h2`
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
`,b=n(o)`
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
`,f=n.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    flex-direction: row;
    gap: 16px;
  }
`,g=n.li`
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
`,k=n.img`
  display: block;
  border-radius: 5px;
  width: 100%;
`,w=n.div`
  display: flex;
  justify-content: space-between;
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
`,u=n.h3`
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
`,y=()=>{const e=r(d);return t.jsx(c,{children:t.jsx(l,{children:t.jsxs(x,{children:[t.jsxs(h,{children:[t.jsx(m,{children:"WEEKLY TRENDS"}),t.jsx(b,{to:"/catalog",children:"See all"})]}),t.jsx(f,{children:e==null?void 0:e.map((i,a)=>{if(a<=2)return t.jsx(g,{children:t.jsxs(o,{to:`/catalog/${i.id}`,children:[t.jsx(k,{src:`https://image.tmdb.org/t/p/w500${i.poster_path}`}),t.jsxs(w,{children:[t.jsx("div",{children:t.jsx(u,{children:i.original_title})}),t.jsx("div",{children:t.jsx(s,{currentRate:i.vote_average*100/10*5/100})})]})]})},i.id)})})]})})})},W=()=>t.jsxs(t.Fragment,{children:[t.jsx(p,{}),t.jsx(y,{})]});export{W as default};
