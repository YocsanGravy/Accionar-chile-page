import{c as e,T as t}from"./index.DpY2cwJM.js";import{n}from"./emotion-styled.browser.esm.CnbYx5VZ.js";const x=n.div`
    display: flex;
    justify-content: ${({$align:r})=>r||"flex-start"};
    margin-top: 20px;
`,o=n.a`
    text-transform: uppercase;
    transition: 0.3s;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    text-align: center;

    ${({$variant:r})=>r==="primary"&&a};
    ${({$variant:r})=>r==="secondary"&&i};
`,c=o.withComponent("button"),a=e`
    padding: 12px 40px;
    min-width: 150px;
    border: 1.5px solid ${t.textDefault};
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 1px;
    font-weight: 500;
    border-radius: 50px;
    background: transparent;
    color: ${t.textDefault};

    &:hover {
        background: ${t.textDefault};
        color: ${t.primary};
    }
`,i=e`
    padding: 12px 40px;
    min-width: 150px;
    border: 1.5px solid ${t.tertiary};
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 1px;
    font-weight: 500;
    border-radius: 50px;
    background: ${t.tertiary};
    color: ${t.primary};

    &:hover {
        background: transparent;
        color: ${t.tertiary};
    }
`;export{x as B,c as a,o as b};
