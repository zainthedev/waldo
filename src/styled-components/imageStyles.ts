import styled from 'styled-components';

export const MainImageContainer = styled.div`
    display: flex;
`;

export const PS2 = styled.img`
    max-width: 100%;
`;

export const CharacterImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    height: fit-content;
    width: fit-content;
`;

export const CharacterImage = styled.img`
    height: 25vh;
    @media (max-width: 768px) {
        height: 20vh;
    };
`;

export const StartImage = styled.img`
    height: 9vh;
    @media (max-width: 768px) {
        height: 8vh;
    };
`;