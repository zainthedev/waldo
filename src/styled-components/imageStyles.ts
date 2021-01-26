import styled from 'styled-components';
import { Header }  from './headerStyles'

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

    ${Header} & {
        display: flex;
        width: 50%;
        flex-direction: row;
        place-content: space-evenly;
        
        @media (max-width: 768px) {
        width: 100%;
        };
    }
`;

export const CharacterImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    ${Header} & {
    display: flex;
    flex-direction: row;
    place-items: center;
    align-self: center;
    }
`;


export const CharacterImage = styled.img`
    height: 25vh;
    
    ${Header} & {
    height: 9vh;
    width: 9vh;
    border-radius: 50%;
    object-fit: cover;
        @media (max-width: 768px) {
            height: 8vh;
            width: 8vh;
        };
    }

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