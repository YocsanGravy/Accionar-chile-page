import { type FC } from "react";
import * as S from "./styled";

type CoverHeroProps = {
    title: string;
    paragraph: string;
    buttons: { link: string; text: string; variant: "primary" | "secondary" }[];
    image: string;
};

export const CoverHero: FC<CoverHeroProps> = ({ title, paragraph, buttons, image }) => {
    return (
        <S.CoverHeroWrapper style={{ backgroundImage: `url(${image})` }}>
            <S.CoverHeroContent>
                <h1 dangerouslySetInnerHTML={{ __html: title }} />
                <p>{paragraph}</p>
                <S.ButtonWrapper>
                    {buttons.map((button, index) => (
                        <S.ButtonLink key={index} href={button.link} variant={button.variant}>
                            {button.text}
                        </S.ButtonLink>
                    ))}
                </S.ButtonWrapper>
            </S.CoverHeroContent>
        </S.CoverHeroWrapper>
    );
};
