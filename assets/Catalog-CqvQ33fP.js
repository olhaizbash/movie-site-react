import{u as a,j as t,b as f,a as n,m as j,n as y,h as b,o as S,p as v,L,q as l}from"./index-BDDfpars.js";import{C as $}from"./Container-D4aF1lG5.js";import{l as k,m as C,d as p,H as w}from"./MovieList-Od__gmiK.js";const B=a.section`
  padding: 40px 0px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding-top: 44px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    padding-top: 60px;
  }
`,P=a.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,q=a.input`
  width: 100%;
  padding: 1rem 1.2rem;
  border: 1px solid ${({theme:e})=>e.color.textchange};
  border-radius: 4px;
  font-size: 1rem;
  outline-color: transparent;
  background-color: ${({theme:e})=>e.color.pageBg};
  color: ${({theme:e})=>e.color.textchange};

  &:focus,
  &:focus-visible {
    outline: none;
    border: 3px solid ${({theme:e})=>e.color.orange};
  }

  &:not(:placeholder-shown) + span,
  &:focus + span {
    color: ${({theme:e})=>e.color.textchange};
    transform: translateX(10px) translateY(-25px);
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0 6px;
    background-color: ${({theme:e})=>e.color.pageBg};
  }

  &:not(:focus) + span {
    color: ${({theme:e})=>e.color.textchange};
  }
`,I=a.span`
  position: absolute;
  left: 0;
  padding-left: 1.2rem;
  font-size: 1rem;
  color: ${({theme:e})=>e.color.textchange};
  pointer-events: none;
  transition: 0.6s;
`,M=a.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`,N=a.div`
  display: flex;
  gap: 10px;
  align-items: baseline;
`,W=({searchResult:e})=>t.jsx(t.Fragment,{children:t.jsx(k,{children:e==null?void 0:e.map(o=>t.jsx(C,{el:o},o.id))})}),z=()=>{const e=f(),o=n(j),d=n(y),g=n(b),[h,s]=S(),i=n(v),r=h.get("query")??"",x=()=>{e(l({query:r,page:i+1}))},m=c=>{if(c.target.value==="")return s({});s({query:c.target.value})},u=()=>{e(l({query:r,page:1}))};return t.jsx(B,{children:t.jsx($,{children:t.jsxs(M,{children:[t.jsxs(N,{children:[t.jsxs(P,{children:[t.jsx(q,{type:"text",placeholder:" ",value:r,onChange:m,name:"query"}),t.jsx(I,{children:"Search movie"})]}),t.jsx(p,{style:{width:"90px"},type:"button",onClick:u,children:"Search"})]}),g&&t.jsx(L,{}),o.length>0&&t.jsx(W,{searchResult:o}),o.length>0&&d>i&&t.jsx(p,{style:{marginLeft:"auto",marginRight:"auto"},type:"button",onClick:x,children:"Load More"})]})})})},A=()=>t.jsxs(t.Fragment,{children:[t.jsx(w,{}),t.jsx(z,{})]});export{A as default};
