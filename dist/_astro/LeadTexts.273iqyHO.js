import{n as i,j as e}from"./emotion-styled.browser.esm.CnbYx5VZ.js";import"./index.DdRMN4IK.js";import{M as t,T as p}from"./index.DpY2cwJM.js";import{C as s}from"./index.DN6IRZbT.js";import{FadeIn as d}from"./FadeIn.Smuve1Dq.js";import"./styled.BoT9S-ii.js";const l=i.section`
    padding: 100px 0;

    ${t.max("lg")} {
        padding: 60px 0;
    }
`;i.h2`
    &:last-child {
        margin-bottom: 40px;
    }
`;const m=i.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;

    ${t.max("lg")} {
        grid-template-columns: 1fr;
    }
`,x=i.div`
    display: flex;
    flex-direction: column;
    gap: 150px;

    ${t.max("lg")} {
        order: 2;
        gap: 50px;
    }

    h3 {
        font-size: 30px;
        font-weight: 200;

        ${t.max("lg")} {
            font-size: 20px;
        }
    }

    h4 {
        font-size: 20px;

        margin-bottom: 5px;

        ${t.max("lg")} {
            font-size: 16px;
        }
    }

    p {
        font-size: 16px;
        line-height: 1.7;
        letter-spacing: 0.7px;

        &:not(:last-child) {
            margin-bottom: 40px;
        }
    }

    > div:not(:last-child) {
        ${t.max("lg")} {
            border-bottom: 1px solid ${p.tertiary};
            padding-bottom: 50px;
            margin-bottom: 0;
        }
    }
`,g=i.div`
    display: flex;
    justify-content: center;

    > div h2 {
        position: sticky;
        top: 50%;
        display: block;
    }

    img {
        border-radius: 10px;

        border-top-right-radius: 200px;
        border-bottom-left-radius: 200px;

        width: 90%;

        ${t.max("lg")} {
            width: 100%;
            max-height: 300px;

            border-top-right-radius: 100px;
            border-bottom-left-radius: 100px;
        }
    }
`;i.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin: 50px 0;

    ${t.max("sm")} {
        grid-template-columns: 1fr;
    }
`;i.section`
    padding: 100px 0;

    ${t.max("lg")} {
        padding: 60px 0;
    }

    h2 br {
        ${t.max("sm")} {
            display: none;
        }
    }
`;i.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;

    ${t.max("lg")} {
        grid-template-columns: repeat(2, 1fr);
    }

    ${t.max("sm")} {
        grid-template-columns: 1fr;
    }
`;const $=({contentText:o,title:r})=>!o&&!r?null:e.jsx(l,{children:e.jsx(s,{children:e.jsxs(m,{children:[r&&e.jsx(g,{children:e.jsx(d,{children:e.jsx("h2",{dangerouslySetInnerHTML:{__html:r}})})}),e.jsx(x,{children:o.map((n,a)=>e.jsx(d,{children:e.jsx("div",{dangerouslySetInnerHTML:{__html:n.content}})},a))})]})})});export{$ as LeadTexts};
