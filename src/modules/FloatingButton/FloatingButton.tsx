import { type FC } from "react";
import * as S from "./styled";
import { FaWhatsapp } from "react-icons/fa";

export const FloatingButton: FC = () => {
    return (
        <S.FloatingButton href="https://wa.me/XXXXXXXXXXX" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
        </S.FloatingButton>
    );
};
