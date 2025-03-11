import { type FC } from "react";
import * as S from "./styled";
import { Container } from "@components/Container";
import { FadeIn } from "@utils/animations/FadeIn";

// 🔹 Importamos los iconos de FontAwesome
import { FaUserGraduate, FaUsers, FaBriefcase, FaMicrophone, FaBuilding, FaHeart, FaHandHoldingHeart, FaChalkboardTeacher, FaPiggyBank } from "react-icons/fa";

// 🔹 Diccionario de iconos para usarlos dinámicamente
const iconMap: { [key: string]: JSX.Element } = {
    FaUserGraduate: <FaUserGraduate />,
    FaUsers: <FaUsers />,
    FaBriefcase: <FaBriefcase />,
    FaMicrophone: <FaMicrophone />,
    FaBuilding: <FaBuilding />,
    FaHandHoldingHeart: <FaHandHoldingHeart />,
    FaHeart: <FaHeart />,
    FaChalkboardTeacher: <FaChalkboardTeacher />,
    FaPiggyBank: <FaPiggyBank />,
};

type LeadTextsProps = {
    title: string;
    services: {
        icon: string; // 🔹 Ahora el icono es un string
        title: string;
        description: string;
    }[];
};

export const LeadTexts: FC<LeadTextsProps> = ({ services, title }) => {
    if (!services || !title) return null;

    return (
        <S.LeadTextsStyled>
            <Container>
                <S.LeadTextsContent>
                    <S.LeadTextsContentTitle>
                        <FadeIn>
                            <h2 dangerouslySetInnerHTML={{ __html: title }} />
                        </FadeIn>
                    </S.LeadTextsContentTitle>
                    <S.ServicesGrid>
                        {services.map((service, index) => (
                            <FadeIn key={index}>
                                <S.ServiceCard>
                                    <S.ServiceIcon>
                                        {iconMap[service.icon] || <FaBriefcase />} 
                                        {/* 🔹 Si no encuentra el icono, usa FaBriefcase por defecto */}
                                    </S.ServiceIcon>
                                    <S.ServiceTitle>{service.title}</S.ServiceTitle>
                                    <S.ServiceDescription>{service.description}</S.ServiceDescription>
                                </S.ServiceCard>
                            </FadeIn>
                        ))}
                    </S.ServicesGrid>
                </S.LeadTextsContent>
            </Container>
        </S.LeadTextsStyled>
    );
};
