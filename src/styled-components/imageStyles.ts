import styled from 'styled-components';

export const MainImageContainer = styled.div`
    display: flex;
`;

export const PS2 = styled.img`
    max-width: 100%;
`;

export const CharacterContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    place-content: space-evenly;
`;

export const CharacterContainerHeader = styled.div`
    display: flex;
    width: 50%;
    flex-direction: row;
    place-content: space-evenly;
`;

export const CharacterImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

export const CharacterImageContainerHeader = styled.div`
    display: flex;
    place-items: center;
    align-self: center;
    text-align: center;
`;


export const CharacterImage = styled.img`
    height: 25vh;
    @media (max-width: 768px) {
        height: 20vh;
    };
`;

export const CharacterImageHeader = styled.img`
    height: 9vh;
    width: 9vh;
    border-radius: 50%;
    object-fit: cover;
`;

export const StartImage = styled.img`
    height: 9vh;
    @media (max-width: 768px) {
        height: 8vh;
    };
`;