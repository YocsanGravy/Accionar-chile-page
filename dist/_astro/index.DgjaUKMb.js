import{n as t,j as e}from"./emotion-styled.browser.esm.CnbYx5VZ.js";import"./index.DdRMN4IK.js";import{T as o,M as i,c}from"./index.DpY2cwJM.js";import{I as d}from"./index.BeUpgFUJ.js";const x=t.div`
    padding: 30px;
    border-radius: 10px;
    background: ${o.bgElement};

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        background: linear-gradient(
            0deg,
            ${o.tertiary} 100%,
            ${o.primary} 0%
        );
        filter: blur(30px);
        opacity: 0.1;
        z-index: -1;
        transition: 0.3s opacity;
    }

    ${n=>n.$variant==="background-text"&&g}
`,m=t(x.withComponent("a"))`
    &:hover {
        &:before {
            opacity: 0.6;
        }

        img[data-icon="true"] {
            transform: translate(10px, -10px) scale(1.1);
        }
    }
`,f=t.span`
    position: absolute;
    top: 0;
    right: 0;
    text-transform: uppercase;

    font-size: 90px;
    line-height: 1;
    font-weight: 900;
    letter-spacing: -7px;
    z-index: 1;
    color: ${o.primary};
    opacity: 0.5;

    ${i.max("xxl")} {
        font-size: 80px;
    }

    ${i.max("xl")} {
        font-size: 60px;
        letter-spacing: -3px;
    }
`,h=t.div`
    position: relative;
    z-index: 2;

    ${i.max("md")} {
        max-width: 80%;
    }
`,g=c`
    position: relative;
    overflow: hidden;
    padding: 20px;

    h2,
    h3,
    h4 {
        margin-bottom: 10px;
        font-size: 25px;
        line-height: 1.2;

        &:after {
            content: none;
        }
    }

    h4,
    p {
        position: relative;
        z-index: 2;
    }

    p {
        line-height: 1.2;
    }
`,u=t.figure`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
`,y=t(d)`
    transition: transform 0.3s;
`,j=({children:n,variant:r,bgText:a,boxAsLink:s,...p})=>{if(!n)return null;const l=s?m:x;return e.jsxs(l,{$variant:r,...p,children:[r==="background-text"&&a&&e.jsx(f,{children:a}),e.jsx(h,{dangerouslySetInnerHTML:{__html:n}}),s&&e.jsx(u,{children:e.jsx(y,{iconData:"arrowCircle",alt:"arrow"})})]})};export{j as T};
