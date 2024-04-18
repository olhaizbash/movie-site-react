import{u as n,b as m,a as c,m as f,n as j,h as y,r as l,o as b,p as S,j as t,L as v}from"./index-BPwX3y2F.js";import{C as L}from"./Container-SZXBwtop.js";import{l as $,m as k,d as C,H as P}from"./MovieList-7E4pkT3W.js";const B=n.section`
  padding: 40px 0px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding-top: 44px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    padding-top: 60px;
  }
`,w=n.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`,q=n.input`
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
`,I=n.span`
  position: absolute;
  left: 0;
  padding-left: 1.2rem;
  font-size: 1rem;
  color: ${({theme:e})=>e.color.textchange};
  pointer-events: none;
  transition: 0.6s;
`,z=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`,E=()=>{const e=m(),a=c(f),p=c(j),d=c(y),[r,g]=l.useState(1),[u,i]=b(),s=u.get("query")??"";l.useEffect(()=>{e(S({query:s,page:r}))},[r,s,e]);const x=()=>{g(o=>o+1)},h=o=>{if(o.target.value==="")return i({});i({query:o.target.value})};return t.jsx(B,{children:t.jsx(L,{children:t.jsxs(z,{children:[t.jsxs(w,{children:[t.jsx(q,{type:"text",placeholder:" ",value:s,onChange:h,name:"query"}),t.jsx(I,{children:"Search movie"})]}),d&&t.jsx(v,{}),a.length>0&&t.jsx($,{children:a==null?void 0:a.map(o=>t.jsx(k,{el:o},o.id))}),a.length>0&&p>r&&t.jsx(C,{style:{marginLeft:"auto",marginRight:"auto"},type:"button",onClick:x,children:"Load More"})]})})})},H=()=>t.jsxs(t.Fragment,{children:[t.jsx(P,{}),t.jsx(E,{})]});export{H as default};
