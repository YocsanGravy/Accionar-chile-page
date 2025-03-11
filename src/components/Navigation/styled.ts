import { Socials } from "@components/Socials";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

export const NavigationWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between; /* Espacia los elementos */
    width: 100%;
    padding: 10px 20px;
`;

export const NavigationStyled = styled.div`
    display: flex;
    flex: 1;
    justify-content: center; /* Centra los elementos */
    gap: 50px;

    ${MediaQuery.max("xl")} {
        gap: 20px;
    }
`;

export const NavigationListWrapper = styled.nav<{ $isOpen: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;

    ${MediaQuery.max("lg")} {
        position: fixed;
        top: 0;
        right: -100%;

        background: ${Theme.bgElement};
        height: 100vh;
        z-index: 2;
        transform: translateX(100%);
        transition: transform 0.3s linear, right 0.7s;
        padding-top: 85px;

        width: clamp(300px, 80%, 300px);

        ${({ $isOpen }) =>
            $isOpen &&
            css`
                right: 0;
                transform: translateX(0);
            `};
    }
`;

export const NavigationList = styled.ul`
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;

    ${MediaQuery.min("lg")} {
        gap: 20px;
        align-items: center;
        justify-content: center;
    }

    ${MediaQuery.max("lg")} {
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
        color: ${Theme.textDefault};
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

        ${MediaQuery.max("lg")} {
            padding: 10px 20px;
        }

        &:hover {
            background-color: ${Theme.tertiary};
            color: ${Theme.primary};
        }

        &.active:not(:hover) {
            background-color: ${Theme.tertiary};
            color: ${Theme.primary};
        }
    }
`;

/* Botón de "Conectar" */
export const ConnectButton = styled.a`
    padding: 10px 20px;
    border: 1.5px solid ${Theme.tertiary};
    border-radius: 25px;
    font-size: 14px;
    font-weight: 600;
    color: ${Theme.tertiary};
    background: transparent;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
        background: ${Theme.tertiary};
        color: white;
    }
`;
