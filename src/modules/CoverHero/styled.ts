import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import { css } from "@emotion/react";

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
    padding: 20px;

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

    /* 🔹 En móviles, ajustamos la altura */
    @media (max-width: 768px) {
        height: auto;
        padding: 80px 20px; /* Espaciado adicional */
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

        @media (max-width: 768px) {
            font-size: 2rem; /* 🔹 Reducimos tamaño en móviles */
        }
    }

    p {
        font-size: 1.2rem;
        max-width: 600px;
        color: white;

        @media (max-width: 768px) {
            font-size: 1rem; /* 🔹 Texto más pequeño en móviles */
        }
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    gap: 15px;
    margin-top: 20px;

    /* 🔹 En móviles, los botones se apilan en columna */
    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        align-items: center;
    }
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

    /* 🔹 En móviles, los botones ocupan el 80% del ancho */
    @media (max-width: 768px) {
        width: 80%;
    }
`;
