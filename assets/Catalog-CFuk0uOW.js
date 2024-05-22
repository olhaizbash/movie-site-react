import{u as n,j as e,m as f,b,a as s,n as v,o as S,h as k,p as $,q as L,r as P,C as W,L as C,t as l}from"./index-v-dK_4Bx.js";import{d}from"./Upcoming.styled-B5cf4yKg.js";import{d as w,e as I,f as B,g as T,h as q,R as N,H as z}from"./WeeklyTrends.styles-DtTBM-yF.js";const M=n.section`
  padding: 40px 0px;

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    padding-top: 44px;
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.desktop}) {
    padding-top: 60px;
  }
`,R=n.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,_=n.input`
  width: 100%;
  padding: 1rem 1.2rem;
  border: 1px solid ${({theme:t})=>t.color.textchange};
  border-radius: 4px;
  font-size: 1rem;
  outline-color: transparent;
  background-color: ${({theme:t})=>t.color.pageBg};
  color: ${({theme:t})=>t.color.textchange};

  &:focus,
  &:focus-visible {
    outline: none;
    border: 3px solid ${({theme:t})=>t.color.orange};
  }

  &:not(:placeholder-shown) + span,
  &:focus + span {
    color: ${({theme:t})=>t.color.textchange};
    transform: translateX(10px) translateY(-25px);
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0 6px;
    background-color: ${({theme:t})=>t.color.pageBg};
  }

  &:not(:focus) + span {
    color: ${({theme:t})=>t.color.textchange};
  }
`,E=n.span`
  position: absolute;
  left: 0;
  padding-left: 1.2rem;
  font-size: 1rem;
  color: ${({theme:t})=>t.color.textchange};
  pointer-events: none;
  transition: 0.6s;
`,F=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`,H=n.div`
  display: flex;
  gap: 10px;
  align-items: baseline;
`,O=({searchResult:t})=>e.jsx(e.Fragment,{children:e.jsx(w,{children:t==null?void 0:t.map(a=>e.jsx(I,{children:e.jsxs(f,{to:`/catalog/${a.id}`,children:[e.jsx(B,{src:`https://image.tmdb.org/t/p/w500${a.poster_path}`}),e.jsxs(T,{children:[e.jsx("div",{children:e.jsx(q,{children:a.original_title})}),e.jsx("div",{children:e.jsx(N,{currentRate:a.vote_average*100/10*5/100})})]})]})},a.id))})}),A=()=>{const t=b(),a=s(v),p=s(S),g=s(k),[h,i]=$(),c=s(L),[x,u]=P.useState(c),o=h.get("query")??"",m=()=>{u(r=>r+1),t(l({query:o,page:x}))},j=r=>{if(r.target.value==="")return i({});i({query:r.target.value})},y=()=>{t(l({query:o,page:1}))};return e.jsx(M,{children:e.jsx(W,{children:e.jsxs(F,{children:[e.jsxs(H,{children:[e.jsxs(R,{children:[e.jsx(_,{type:"text",placeholder:" ",value:o,onChange:j,name:"query"}),e.jsx(E,{children:"Search movie"})]}),e.jsx(d,{style:{width:"90px"},type:"button",onClick:y,children:"Search"})]}),g&&e.jsx(C,{}),a.length<=0&&e.jsx("p",{children:"OOPS... We are very sorry! We don’t have any results matching your search."}),a.length>0&&e.jsx(O,{searchResult:a}),a.length>0&&p>c&&e.jsx(d,{style:{marginLeft:"auto",marginRight:"auto"},type:"button",onClick:m,children:"Load More"})]})})})},G=()=>e.jsxs(e.Fragment,{children:[e.jsx(z,{}),e.jsx(A,{})]});export{G as default};
