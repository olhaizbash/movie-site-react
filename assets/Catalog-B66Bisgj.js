import{u as t,j as e}from"./index-CEf3O7ck.js";import{C as n}from"./Container-C6z8bfer.js";import{H as r}from"./Hero-Bn-olnU5.js";const a=t.section`
  padding: 40px 0px;

  @media screen and (min-width: ${({theme:o})=>o.breakpoint.tablet}) {
    padding-top: 44px;
  }

  @media screen and (min-width: ${({theme:o})=>o.breakpoint.desktop}) {
    padding-top: 60px;
  }
`,s=t.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`,i=t.input`
  width: 100%;
  padding: 1rem 1.2rem;
  border: 1px solid ${({theme:o})=>o.color.textchange};
  border-radius: 4px;
  font-size: 1rem;
  outline-color: transparent;
  background-color: ${({theme:o})=>o.color.pageBg};
  color: ${({theme:o})=>o.color.textchange};

  &:focus,
  &:focus-visible {
    outline: none;
    border: 3px solid ${({theme:o})=>o.color.orange};
  }

  &:not(:placeholder-shown) + span,
  &:focus + span {
    color: ${({theme:o})=>o.color.textchange};
    transform: translateX(10px) translateY(-25px);
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0 6px;
    background-color: ${({theme:o})=>o.color.pageBg};
  }

  &:not(:focus) + span {
    color: ${({theme:o})=>o.color.textchange};
  }
`,c=t.span`
  position: absolute;
  left: 0;
  padding-left: 1.2rem;
  font-size: 1rem;
  color: ${({theme:o})=>o.color.textchange};
  pointer-events: none;
  transition: 0.6s;
`,l=()=>e.jsx(a,{children:e.jsxs(n,{children:[e.jsxs(s,{children:[e.jsx(i,{type:"text",placeholder:" "}),e.jsx(c,{children:"Search movie"})]}),e.jsx("div",{children:"Cards"})]})}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{}),e.jsx(l,{})]});export{g as default};
