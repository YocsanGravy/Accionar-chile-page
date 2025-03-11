import styled from "@emotion/styled";
import { Theme } from "@styles/colors";

export const ModalOverlay = styled.div<{ $isOpen: boolean }>`
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const ModalContent = styled.div`
    background: white;
    padding: 30px;
    border-radius: 10px;
    text-align: center;
    max-width: 500px;
    width: 90%;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    animation: fadeIn 0.3s ease-in-out;

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 15px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: ${Theme.primary};
`;

export const Button = styled.button`
    margin-top: 15px;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    background: ${Theme.tertiary};
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background: ${Theme.secondary};
    }
`;
