import styled from "@emotion/styled";
import { Theme } from "@styles/colors";

export const TeamSection = styled.section`
    text-align: center;
    padding: 80px 20px;
    
    h2 {
        font-size: 2.5rem;
        color: ${Theme.secondary};
        margin-bottom: 40px;
    }
`;

export const TeamGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    justify-items: center;
`;

export const Card = styled.div`
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
    max-width: 300px;
`;

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
`;

export const ProfileImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px solid ${Theme.primary};
`;

export const MemberInfo = styled.div`
    h3 {
        font-size: 1.5rem;
        margin-bottom: 5px;
        color: ${Theme.textDefault};
    }
    
    p {
        font-size: 1rem;
        color: ${Theme.secondary};
        margin: 5px 0;
    }
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 15px;

    a {
        color: ${Theme.textDefault};
        font-size: 1.5rem;
        transition: 0.3s;

        &:hover {
            color: ${Theme.primary};
        }
    }
`;
