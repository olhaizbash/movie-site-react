import{u as i,r as d,b as h,j as t,e as w,f as u,a as p,g as $,h as y,i as j,k as v,L as T,l as g,m as z}from"./index-B91SjSSB.js";import{R,H as U}from"./Hero-1R502eEA.js";import{C as b}from"./Container-CKgwVkW4.js";const W=i.section`
  padding: 40px 0px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding-top: 44px;
    padding-bottom: 77px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    padding-top: 60px;
    padding-bottom: 103px;
  }
`,S=i.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    gap: 28px;
  }
`,L=i.h2`
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
`,C=i.div`
  display: flex;
  flex-direction: column;
  gap: 22px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    flex-direction: row;
    gap: 16px;
    justify-content: center;
    align-items: center;
  }
`,_=i.div`
  border-radius: 5px;
  display: block;
  width: 280px;
  height: 406px;
  margin: 0 auto;
  box-shadow: 1px 1px 24px 2px rgba(1, 1, 1, 0.45);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background: linear-gradient(
      307deg,
      rgba(0, 0, 0, 0.2) 23.85%,
      rgba(0, 0, 0, 0) 47.27%
    ),
    url(https://image.tmdb.org/t/p/w500${e=>e.$imgUrl}) lightgray
      50% / cover no-repeat;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 704px;
    height: 400px;
    background: linear-gradient(
        307deg,
        rgba(0, 0, 0, 0.2) 23.85%,
        rgba(0, 0, 0, 0) 47.27%
      ),
      url(https://image.tmdb.org/t/p/w780${e=>e.$imgUrl}) lightgray
        50% / cover no-repeat;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    width: 805px;
    height: 458px;
    background: linear-gradient(
        307deg,
        rgba(0, 0, 0, 0.2) 23.85%,
        rgba(0, 0, 0, 0) 47.27%
      ),
      url(https://image.tmdb.org/t/p/w1280${e=>e.$imgUrl}) lightgray
        50% / cover no-repeat;
  }
`,E=i.h1`
color: ${({theme:e})=>e.color.textchange};
font-family: Roboto;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin: 0;
margin-bottom: 29px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 24px;
    margin-bottom: 24px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    line-height: 32px;
    margin-bottom: 28px;
  }
`,l=i.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 15px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    margin-bottom: 13.5px;
  }
`,s=i.h2`
  color: ${({theme:e})=>e.color.textchange};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  margin: 0;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    line-height: normal;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    font-size: 16px;
  }
`,c=i.p`
  color: ${({theme:e})=>e.color.textchange};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  text-align: end;
  margin: 0;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    font-size: 16px;
  }
`,I=i.p`
  color: ${({theme:e})=>e.color.textchange};
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin: 0;
`,x=i.button`
  border-radius: 74px;
  border: 1px solid var(--linear, #ffc226);
  background: transparent;
  padding: 12px 24px;
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: ${({theme:e})=>e.color.textchange};
  cursor: pointer;
  margin-top: 16px;
  transition: background ${({theme:e})=>e.transition.main};

  &:hover,
  &:focus {
    background: ${({theme:e})=>e.color.gradientHover};
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    line-height: 16px;
    margin-top: 24px;
  }
`,A=i.div`
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    width: 390px;
  }
`,B=({favorites:e,upcomingMovie:o})=>{const[a,r]=d.useState(!1),f=Math.floor(Math.random()*20+0),[n,Q]=d.useState(o[f]),m=h();return d.useEffect(()=>{e.findIndex(k=>k.id===(n==null?void 0:n.id))>=0?r(!0):r(!1)},[e,n]),t.jsxs(C,{children:[t.jsx(_,{$imgUrl:n.backdrop_path}),t.jsxs(A,{children:[t.jsx(E,{children:n==null?void 0:n.original_title}),t.jsxs(l,{children:[t.jsx(s,{children:"Release date"}),t.jsx(c,{children:n==null?void 0:n.release_date})]}),t.jsxs(l,{children:[t.jsx(s,{children:"Vote/Votes"}),t.jsx(c,{children:`${n==null?void 0:n.vote_average}/${n==null?void 0:n.vote_count}`})]}),t.jsxs(l,{children:[t.jsx(s,{children:"Popularity"}),t.jsx(c,{children:n==null?void 0:n.popularity})]}),t.jsxs("div",{children:[t.jsx(s,{children:"ABOUT"}),t.jsx(I,{children:n==null?void 0:n.overview})]}),a?t.jsx(x,{onClick:()=>{m(w(n))},children:"Remove from my library"}):t.jsx(x,{onClick:()=>{m(u(n))},children:"Add to my library"})]})]})},D=()=>{const e=h(),o=p($),a=p(y),r=p(j);return d.useEffect(()=>{e(v())},[e]),t.jsx(W,{children:t.jsx(b,{children:t.jsxs(S,{children:[t.jsx(L,{children:"upcoming this month"}),a&&t.jsx(T,{}),o!==null&&t.jsx(B,{upcomingMovie:o,favorites:r})]})})})},F=i.section`
  padding-top: 40px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding-top: 52px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    padding-top: 80px;
  }
`,H=i.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    gap: 28px;
  }
`,N=i.div`
  display: flex;
  justify-content: space-between;
`,P=i.h2`
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
`,V=i(g)`
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
`,K=i.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    flex-direction: row;
    gap: 16px;
  }
`,O=i.li`
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
`,Y=i.img`
  display: block;
  border-radius: 5px;
  width: 100%;
`,q=i.div`
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
`,G=i.h3`
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
`,J=()=>{const e=p(z);return t.jsx(F,{children:t.jsx(b,{children:t.jsxs(H,{children:[t.jsxs(N,{children:[t.jsx(P,{children:"WEEKLY TRENDS"}),t.jsx(V,{to:"/catalog",children:"See all"})]}),t.jsx(K,{children:e==null?void 0:e.map((o,a)=>{if(a<=2)return t.jsx(O,{children:t.jsxs(g,{to:`/catalog/${o.id}`,children:[t.jsx(Y,{src:`https://image.tmdb.org/t/p/w500${o.poster_path}`}),t.jsxs(q,{children:[t.jsx("div",{children:t.jsx(G,{children:o.original_title})}),t.jsx("div",{children:t.jsx(R,{currentRate:o.vote_average*100/10*5/100})})]})]})},o.id)})})]})})})},te=()=>t.jsxs(t.Fragment,{children:[t.jsx(U,{}),t.jsx(J,{}),t.jsx(D,{})]});export{te as default};
