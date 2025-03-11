import { type FC, useEffect, useState } from "react";
import * as S from "./styled";

export const Modal: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Mostrar el modal cuando la página cargue
    useEffect(() => {
        setTimeout(() => {
            setIsOpen(true);
        }, 500); // Se abre después de 500ms
    }, []);

    return (
        <S.ModalOverlay $isOpen={isOpen}>
            <S.ModalContent>
                <S.CloseButton onClick={() => setIsOpen(false)}>&times;</S.CloseButton>
                <h2>¡Bienvenido a Accionar Chile!</h2>
                <p>Únete a nuestra comunidad y descubre todo lo que tenemos para ti.</p>
                <S.Button onClick={() => setIsOpen(false)}>Unente</S.Button>
            </S.ModalContent>
        </S.ModalOverlay>
    );
};
