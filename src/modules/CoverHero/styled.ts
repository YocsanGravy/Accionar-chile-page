import styled from "@emotion/styled";
import { Theme } from "@styles/colors";

export const CoverHeroWrapper = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh; /* Ocupa toda la pantalla */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: white;

    /* Overlay */
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5); /* Oscurece la imagen */
    }
`;

export const CoverHeroContent = styled.div`
    position: relative;
    z-index: 2;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    h1 {
        font-size: 3.5rem;
        font-weight: bold;
    }

    p {
        font-size: 1.2rem;
        max-width: 600px;
        color: white;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    gap: 15px;
    margin-top: 20px;
`;

export const ButtonLink = styled.a<{ variant: "primary" | "secondary" }>`
    padding: 12px 40px;
    min-width: 150px;
    border: 1.5px solid ${({ variant }) => (variant === "primary" ? Theme.textDefault : Theme.tertiary)};
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 1px;
    font-weight: 500;
    border-radius: 50px;
    text-transform: uppercase;
    text-decoration: none;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    transition: 0.3s;

    background: ${({ variant }) => (variant === "primary" ? "transparent" : Theme.tertiary)};
    color: ${({ variant }) => (variant === "primary" ? Theme.textDefault : Theme.primary)};

    &:hover {
        background: ${({ variant }) => (variant === "primary" ? Theme.textDefault : "transparent")};
        color: ${({ variant }) => (variant === "primary" ? Theme.primary : Theme.tertiary)};
    }
`;
