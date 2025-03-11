import { type FC } from "react";
import * as S from "./styled";
import { TeamMember } from "./TeamMember";

const teamMembers = [
    {
        image: "https://i.pravatar.cc/150?img=1",
        name: "Carlos Mendoza",
        role: "CEO & Fundador",
        description: "Apasionado por la innovación y el liderazgo estratégico.",
        socialLinks: {
            facebook: "https://facebook.com",
            twitter: "https://twitter.com",
            linkedin: "https://linkedin.com",
        },
    },
    {
        image: "https://i.pravatar.cc/150?img=11",
        name: "Mariana López",
        role: "Directora de Marketing",
        description: "Experta en estrategias de marca y comunicación digital.",
        socialLinks: {
            facebook: "https://facebook.com",
            twitter: "https://twitter.com",
            linkedin: "https://linkedin.com",
        },
    },
    {
        image: "https://i.pravatar.cc/150?img=10",
        name: "Javier Morales",
        role: "Desarrollador Full Stack",
        description: "Especialista en soluciones tecnológicas eficientes.",
        socialLinks: {
            facebook: "https://facebook.com",
            twitter: "https://twitter.com",
            linkedin: "https://linkedin.com",
        },
    },
    {
        image: "https://i.pravatar.cc/150?img=9",
        name: "Sofía Rodríguez",
        role: "Diseñadora UX/UI",
        description: "Transforma ideas en experiencias digitales impactantes.",
        socialLinks: {
            facebook: "https://facebook.com",
            twitter: "https://twitter.com",
            linkedin: "https://linkedin.com",
        },
    },
];

export const Team: FC = () => {
    return (
        <S.TeamSection>
            <h2>Conozca a nuestro equipo</h2> {/* ✅ Título agregado */}
            <S.TeamGrid>
                {teamMembers.map((member, index) => (
                    <TeamMember key={index} {...member} />
                ))}
            </S.TeamGrid>
        </S.TeamSection>
    );
};
