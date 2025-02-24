import{n,j as t}from"./emotion-styled.browser.esm.CnbYx5VZ.js";import"./index.DdRMN4IK.js";import{C as h}from"./index.DN6IRZbT.js";import{T as o,M as r,c as g}from"./index.DpY2cwJM.js";import{I as f}from"./index.L89qFqtn.js";import{B as u}from"./index.DXMWTQXz.js";import{FadeIn as x}from"./FadeIn.Smuve1Dq.js";import"./styled.DrM7DWRK.js";import"./styled.BoT9S-ii.js";const y=n.section`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 90px 0 50px;
    text-align: center;
`,j=n.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    max-width: 650px;
    margin: 0 auto;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        height: 80%;
        background: linear-gradient(
            0deg,
            transparent 0%,
            ${o.tertiary} 100%
        );

        filter: blur(100px);
        opacity: 0.3;
        z-index: -1;
    }

    .icon-wrapper {
        margin-top: 50px;
    }
`,w=({children:i})=>i?t.jsx(j,{children:i}):null,$=n.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    text-align: left;

    align-items: center;

    ${r.max("lg")} {
        grid-template-columns: 1fr;
        text-align: center;
    }

    ${({$switchPlaces:i})=>i&&g`
            > div:first-of-type {
                order: 2;
            }
        `}
`,I=n.figure`
    width: 100%;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        border-radius: 100%;
        background: linear-gradient(
            0deg,
            ${o.tertiary} 100%,
            ${o.primary} 0%
        );

        filter: blur(50px);
        opacity: 0.3;
        z-index: -1;
    }
`,c=n(f)`
    width: 100%;
    margin-bottom: 30px;
    min-height: 450px;

    object-fit: contain;

    ${r.max("lg")} {
        min-height: auto;
    }
`,T=n.div`
    ${r.max("lg")} {
        max-width: 490px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
    }

    h1 {
        margin-bottom: 20px;
        font-size: 80px;
        line-height: 84px;
        letter-spacing: -1px;

        ${r.max("xl")} {
            font-size: 60px;
            line-height: 64px;
        }

        ${r.max("sm")} {
            font-size: 50px;
            line-height: 45px;
            letter-spacing: -0.5px;
        }
    }

    p {
        ${r.min("lg")} {
            max-width: 400px;
        }
    }
`,b=n.div`
    display: flex;

    ${r.min("lg")} {
        gap: 30px;
    }

    ${r.max("lg")} {
        flex-direction: column;
        align-items: center;
    }
`,v=({title:i,paragraph:a,buttons:s,image:e,switchPlaces:p=!1})=>{if(!i&&!a&&!e)return null;const d=e.srcLocal?t.jsx(c,{srcLocal:e.srcLocal,alt:e.alt,width:e.width,height:e.height}):t.jsx(c,{src:e.src,alt:e.alt,width:e.width,height:e.height});return t.jsxs($,{$switchPlaces:p,children:[t.jsx(x,{delay:.2,children:t.jsxs(T,{children:[i&&t.jsx("h1",{dangerouslySetInnerHTML:{__html:i}}),a&&t.jsx("p",{dangerouslySetInnerHTML:{__html:a}}),s&&s.length>0&&t.jsx(b,{children:s.map((l,m)=>t.jsx(u,{link:l.link,variant:l.variant,children:l.text},m))})]})}),e&&t.jsx(x,{children:t.jsx(I,{children:d})})]})},F=({heroType:i,children:a,content:s})=>{if(!a&&!s)return null;let e;switch(i){case"center":e=t.jsx(w,{children:a});break;case"textImage":e=t.jsx(v,{...s});break}return t.jsx(y,{children:t.jsx(h,{children:e})})};export{F as Hero};
