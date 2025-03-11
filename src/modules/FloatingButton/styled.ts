import styled from "@emotion/styled";

export const FloatingButton = styled.a`
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #fd8607; /* 🔹 Color similar al de la imagen */
    color: white;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 20px;
    border-radius: 30px;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    z-index: 1000;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.25);
    }

    svg {
        font-size: 22px;
    }
`;
