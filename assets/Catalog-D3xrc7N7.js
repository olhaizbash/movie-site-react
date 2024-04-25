import{u as o,j as t,b as y,a as n,m as f,n as j,h as b,o as S,p as v,C as L,L as $,q as l}from"./index-BKCxqzMs.js";import{d}from"./Upcoming.styled--a7W2pQL.js";import{d as k,M as C,H as P}from"./MovieList-DBzrh35I.js";const w=o.section`
  padding: 40px 0px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding-top: 44px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    padding-top: 60px;
  }
`,B=o.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,W=o.input`
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
`,q=o.span`
  position: absolute;
  left: 0;
  padding-left: 1.2rem;
  font-size: 1rem;
  color: ${({theme:e})=>e.color.textchange};
  pointer-events: none;
  transition: 0.6s;
`,M=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`,I=o.div`
  display: flex;
  gap: 10px;
  align-items: baseline;
`,N=({searchResult:e})=>t.jsx(t.Fragment,{children:t.jsx(k,{children:e==null?void 0:e.map(a=>t.jsx(C,{el:a},a.id))})}),z=()=>{const e=y(),a=n(f),p=n(j),g=n(b),[h,s]=S(),i=n(v),r=h.get("query")??"",x=()=>{e(l({query:r,page:i+1}))},u=c=>{if(c.target.value==="")return s({});s({query:c.target.value})},m=()=>{e(l({query:r,page:1}))};return t.jsx(w,{children:t.jsx(L,{children:t.jsxs(M,{children:[t.jsxs(I,{children:[t.jsxs(B,{children:[t.jsx(W,{type:"text",placeholder:" ",value:r,onChange:u,name:"query"}),t.jsx(q,{children:"Search movie"})]}),t.jsx(d,{style:{width:"90px"},type:"button",onClick:m,children:"Search"})]}),g&&t.jsx($,{}),a.length<=0&&t.jsx("p",{children:"OOPS... We are very sorry! We don’t have any results matching your search."}),a.length>0&&t.jsx(N,{searchResult:a}),a.length>0&&p>i&&t.jsx(d,{style:{marginLeft:"auto",marginRight:"auto"},type:"button",onClick:x,children:"Load More"})]})})})},T=()=>t.jsxs(t.Fragment,{children:[t.jsx(P,{}),t.jsx(z,{})]});export{T as default};
