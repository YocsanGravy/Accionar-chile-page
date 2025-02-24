import{n as e,j as t}from"./emotion-styled.browser.esm.CnbYx5VZ.js";import{T as r}from"./index.DpY2cwJM.js";import{I as s}from"./index.L89qFqtn.js";import"./index.DdRMN4IK.js";import{I as i}from"./index.BeUpgFUJ.js";const c=e.div`
    position: relative;
    z-index: 3;

    a {
        font-size: 35px;
        line-height: 30px;
        font-weight: 700;
        display: inline-flex;
        position: relative;

        span {
            &:after {
                content: "";
                position: absolute;
                bottom: -5px;
                left: 0;
                width: 25%;
                height: 3px;
                background-color: ${r.primary};
                z-index: 1;
                transition: width 0.2s linear;
            }
        }

        &:hover span:after {
            width: 100%;
        }

        img {
            height: 50px;
            width: 63px;
            object-fit: contain;
        }
    }
`,m=()=>t.jsx(c,{children:t.jsx("a",{href:"/",children:t.jsx(s,{srcLocal:"logo",alt:"logo"})})}),l=e.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    margin: 20px 0 0;
`,p=e.ul`
    display: flex;
    gap: 10px;
    list-style-type: none;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
`,o=e.li`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    cursor: pointer;
    transition: 0.3s;
    opacity: 0.5;

    &:hover {
        opacity: 1;
    }

    &:not(:last-of-type) {
        &:after {
            content: "";
            display: block;
            width: 1px;
            height: 20px;
            background-color: ${r.textSecondary};
            margin: 0 10px;
        }
    }
`,n=e.a`
    text-decoration: none;
    color: inherit;

    img {
        width: 20px;
        height: 20px;
        aspect-ratio: 20/20;
        object-fit: contain;
    }
`,j=({...a})=>t.jsx(l,{...a,children:t.jsxs(p,{children:[t.jsx(o,{children:t.jsx(n,{href:"https://www.facebook.com",target:"_blank",rel:"noreferrer",children:t.jsx(i,{iconData:"facebook",alt:"facebook"})})}),t.jsx(o,{children:t.jsx(n,{href:"https://www.linkedin.com",target:"_blank",rel:"noreferrer",children:t.jsx(i,{iconData:"linkedin",alt:"linkedin"})})})]})});export{m as L,j as S};
