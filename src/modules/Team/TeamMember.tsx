import { type FC } from "react";
import * as S from "./styled";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

type TeamMemberProps = {
    image: string;
    name: string;
    description: string;
    role: string;
    socialLinks: {
        facebook?: string;
        twitter?: string;
        linkedin?: string;
    };
};

export const TeamMember: FC<TeamMemberProps> = ({ image, name, description, role, socialLinks }) => {
    return (
        <S.Card>
            <S.ImageWrapper>
                <S.ProfileImage src={image} alt={name} />
            </S.ImageWrapper>
            <S.MemberInfo>
                <h3>{name}</h3>
                <p><b>{role}</b></p>
                <p>{description}</p>
            </S.MemberInfo>
            <S.SocialIcons>
                {socialLinks.facebook && (
                    <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                )}
                {socialLinks.twitter && (
                    <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                )}
                {socialLinks.linkedin && (
                    <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                )}
            </S.SocialIcons>
        </S.Card>
    );
};
