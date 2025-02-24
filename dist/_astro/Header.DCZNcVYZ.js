import{n as o,j as t}from"./emotion-styled.browser.esm.CnbYx5VZ.js";import{S as m,L as f}from"./index.D0cQya1p.js";import{C as u}from"./index.DN6IRZbT.js";import{k as h,T as e,M as a,c as i}from"./index.DpY2cwJM.js";import{r as d}from"./index.DdRMN4IK.js";import"./index.L89qFqtn.js";import"./index.BeUpgFUJ.js";import"./icon-astro.Ce_Wn98c.js";const b=h`
    from {
        transform: translateY(-50px);
        opacity: 0.01;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
`,y=o.header`
    width: 100%;

    background: ${e.bgElement};

    padding: 20px 0;

    display: flex;

    justify-content: space-between;
    align-items: center;

    gap: 40px;

    position: sticky;
    top: 0;
    left: 0;
    z-index: 10;

    box-shadow: 0 0 10px rgb(123 123 123 / 10%);

    animation: ${b} 1s;
`,$=o(u)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
`,j=o.div`
    display: flex;
    gap: 50px;

    ${a.max("xl")} {
        gap: 20px;
    }
`,k=o.nav`
    display: flex;
    align-items: center;
    justify-content: center;

    ${a.max("lg")} {
        position: fixed;
        top: 0;
        right: -100%;

        background: ${e.bgElement};
        height: 100vh;
        z-index: 2;
        transform: translateX(100%);
        transition: transform 0.3s linear, right 0.7s;
        padding-top: 85px;

        width: clamp(300px, 80%, 300px);

        ${({$isOpen:n})=>n&&i`
                right: 0;
                transform: translateX(0);
            `};
    }
`,v=o.ul`
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;

    ${a.min("lg")} {
        gap: 20px;
        align-items: center;
        justify-content: center;
    }

    ${a.max("lg")} {
        gap: 10px;
        padding: 20px 10px 53px;
        overflow: auto;
        width: 100%;
        height: 100%;

        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    > li a {
        text-decoration: none;
        color: ${e.textDefault};
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        line-height: 18px;
        padding: 10px;
        border-radius: 5px;
        background-color: transparent;
        cursor: pointer;
        transition: background-color 0.2s linear;

        ${a.max("lg")} {
            padding: 10px 20px;
        }

        &:hover {
            background-color: ${e.tertiary};
            color: ${e.primary};
        }

        &.active:not(:hover) {
            background-color: ${e.tertiary};
            color: ${e.primary};
        }
        img {
            margin: 0 15px 0 0;

            max-width: 30px;
            max-height: 30px;

            ${a.max("xl")} {
                margin: 0 10px 0 0;
            }
        }
    }
`;o(m)`
    position: absolute;
    bottom: 0;
    background: ${e.bgElement};
    width: 100%;
    padding: 10px 0;
    margin: 0;
    left: 0;

    li {
        opacity: 1;
    }

    ${a.min("lg")} {
        display: none;
    }
`;const w=o.button`
    position: relative;
    z-index: 3;

    border: 1px solid ${e.tertiary};
    border-radius: 50%;
    background: ${e.bgElement};
    cursor: pointer;
    transition: background 0.3s, border-color 0.3s, color 0.3s;

    width: 45px;
    height: 45px;

    ${a.min("lg")} {
        display: none;
    }
`,c=o.span`
    background: ${e.tertiary};
    position: absolute;
    left: 50%;
    display: block;
    transform: translate(-50%, -50%);
    transition: transform 0.3s, background 0.3s, top 0.3s;
    pointer-events: none;

    width: 50%;
    height: 3px;

    ${a.max("lg")} {
        height: 2px;
    }

    ${({$open:n})=>n?i`
                  transform: translate(-50%, -50%) rotate(45deg);
                  top: 50%;
              `:i`
                  top: calc(50% - 4px);
              `}

    &:not(:first-of-type) {
        ${({$open:n})=>n?i`
                      transform: translate(-49%, -50%) rotate(-45deg);
                      top: 50%;
                  `:i`
                      top: calc(50% + 4px);
                  `}
    }
`,E=({state:n})=>{const{open:r,setOpen:s}=n,x=()=>{s(!r)},l=g=>{const p=g.target;!p.closest("nav")&&r&&p.tagName!=="BUTTON"&&s(!1)};return d.useEffect(()=>{if(r)return document.addEventListener("click",l),()=>{document.removeEventListener("click",l)}},[r]),t.jsxs(w,{$open:r,onClick:x,"aria-label":"Menu","aria-expanded":r,role:"button",tabIndex:0,children:[t.jsx(c,{$open:r}),t.jsx(c,{$open:r})]})},S=()=>{const[n,r]=d.useState(!1);return t.jsxs(j,{children:[t.jsx(k,{$isOpen:n,children:t.jsxs(v,{children:[t.jsx("li",{children:t.jsx("a",{href:"/",children:"Hogar"})}),t.jsx("li",{children:t.jsx("a",{href:"/offers",className:"active",children:"Sinergeticos"})}),t.jsx("li",{children:t.jsx("a",{href:"/about",children:"Sobre Nosotros"})}),t.jsx("li",{children:t.jsx("a",{href:"/contact",children:"Contacto"})})]})}),t.jsx(E,{state:{open:n,setOpen:r}})]})},B=()=>t.jsx(y,{children:t.jsxs($,{children:[t.jsx(f,{}),t.jsx(S,{})]})});export{B as Header};
