import{n as e}from"./emotion-styled.browser.esm.CnbYx5VZ.js";import{T as t,M as o,c as n}from"./index.DpY2cwJM.js";const p=e.form`
    padding: 30px;
    background: ${t.bgElement};
    border-radius: 10px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
    width: 100%;

    h2 {
        font-size: 30px;
        line-height: 36px;
        font-weight: 300;
        margin-bottom: 10px;

        ${o.max("lg")} {
            font-size: 20px;
            line-height: 25px;
        }
    }

    p {
        opacity: 0.8;

        ${o.max("lg")} {
            font-size: 14px;
            line-height: 16px;
        }
    }
`,r=n`
    padding: 10px 0;
    border: none;
    width: 100%;
    margin-bottom: 10px;
    box-sizing: border-box;
    background: transparent;
    border-bottom: 1px solid ${t.textSecondary};
    transition: border-color 0.3s;
    letter-spacing: 1px;
    color: ${t.textDefault};
    margin: 30px 0;

    ${o.max("lg")} {
        margin-bottom: 0;
    }

    &:focus,
    &:active {
        outline: none;
        border-color: ${t.tertiary};
    }

    &::placeholder {
        color: ${t.textSecondary};
    }
`,s=e.div``,x=e.input`
    ${r}
`,d=e.textarea`
    ${r};

    resize: none;
    min-height: 90px;
`;export{p as F,s as I,d as a,x as b};
