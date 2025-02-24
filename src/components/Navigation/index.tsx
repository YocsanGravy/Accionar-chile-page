import * as S from "./styled";
import { useState, type FC } from "react";
import { Hamburger } from "./components/Hamburger";

export const Navigation: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <S.NavigationStyled>
            <S.NavigationListWrapper $isOpen={isOpen}>
                <S.NavigationList>
                    <li>
                        <a href="/">Hogar</a>
                    </li>
                    <li>
                        <a href="/offers" className="active">
                            Sinergeticos
                        </a>
                    </li>
                    <li>
                        <a href="/about">Sobre Nosotros</a>
                    </li>
                    <li>
                        <a href="/contact">Contacto</a>
                    </li>
                </S.NavigationList>
            </S.NavigationListWrapper>
            <Hamburger
                state={{
                    open: isOpen,
                    setOpen: setIsOpen,
                }}
            />
        </S.NavigationStyled>
    );
};
