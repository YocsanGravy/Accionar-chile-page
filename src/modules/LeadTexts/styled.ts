import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

export const LeadTextsStyled = styled.section`
    padding: 100px 0;
    background-color: #f9f9f9; /* 🔹 Fondo pastel claro para toda la sección */

    ${MediaQuery.max("lg")} {
        padding: 60px 0;
    }
`;

export const LeadTextsContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

export const LeadTextsContentTitle = styled.div`
    margin-bottom: 40px;

    h2 {
        font-size: 2.5rem;
        color: ${Theme.secondary};
    }
`;

export const ServicesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 🔹 3 tarjetas por fila en pantallas grandes */
    gap: 30px;
    margin-top: 40px;

    ${MediaQuery.max("md")} {
        grid-template-columns: repeat(2, 1fr); /* 🔹 2 tarjetas en pantallas medianas */
    }

    ${MediaQuery.max("sm")} {
        grid-template-columns: 1fr; /* 🔹 1 tarjeta en pantallas pequeñas */
    }
`;

export const ServiceCard = styled.div`
    background: white; /* 🔹 Tarjetas en color blanco */
    color: ${Theme.textDefault};
    padding: 30px;
    border-radius: 15px; /* 🔹 Bordes redondeados suaves */
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* 🔹 Sombra ligera para dar relieve */

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
    }
`;

export const ServiceIcon = styled.div`
    font-size: 50px;
    margin-bottom: 15px;
    color: #007bff; /* 🔹 Azul pastel para los iconos */
`;

export const ServiceTitle = styled.h3`
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const ServiceDescription = styled.p`
    font-size: 16px;
    line-height: 1.5;
    max-width: 300px;
`;
