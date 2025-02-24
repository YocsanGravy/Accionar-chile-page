import{n as o,j as r}from"./emotion-styled.browser.esm.CnbYx5VZ.js";import{C as p}from"./index.DN6IRZbT.js";import{M as i}from"./index.DpY2cwJM.js";import"./index.DdRMN4IK.js";import{T as s}from"./index.DgjaUKMb.js";import{FadeIn as m}from"./FadeIn.Smuve1Dq.js";import"./index.BeUpgFUJ.js";import"./icon-astro.Ce_Wn98c.js";import"./styled.BoT9S-ii.js";const a=o.section`
    padding: 90px 0;
`,l=o.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    ${i.max("lg")} {
        grid-template-columns: repeat(1, 1fr);
    }

    h2 {
        letter-spacing: 2px;
        margin-bottom: 10px;
    }

    h2 {
        font-size: 35px;
        line-height: 1.2;

        ${i.max("lg")} {
            font-size: 30px;
        }
    }
`,B=({boxes:e})=>!e||e.length===0?null:r.jsx(a,{children:r.jsx(p,{children:r.jsx(l,{children:e.map((t,n)=>t.content&&r.jsx(m,{delay:"0."+n,children:r.jsx(s,{boxAsLink:t.asLink,href:t.href,children:t.content})},n))})})});export{B as BoxOffers};
