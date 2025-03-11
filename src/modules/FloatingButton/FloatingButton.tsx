import { type FC } from "react";
import * as S from "./styled";
import { FaCommentDots } from "react-icons/fa"; // Ícono de chat

export const FloatingButton: FC = () => {
    return (
        <S.FloatingButton href="https://wa.me/XXXXXXXXXXX" target="_blank" rel="noopener noreferrer">
            <span>¡Hablemos aquí!</span> 
            <FaCommentDots />
        </S.FloatingButton>
    );
};
