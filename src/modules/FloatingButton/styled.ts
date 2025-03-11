import styled from "@emotion/styled";

export const FloatingButton = styled.a`
    position: fixed;
    bottom: 20px; /* 🔹 Ajusta la posición vertical */
    right: 20px; /* 🔹 Ajusta la posición horizontal */
    background-color: #25d366; /* 🔹 Color verde de WhatsApp */
    color: white;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 30px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15); /* 🔹 Sombra para destacar */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    z-index: 1000; /* 🔹 Asegura que siempre esté encima */

    &:hover {
        transform: scale(1.1);
        box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
    }
`;
