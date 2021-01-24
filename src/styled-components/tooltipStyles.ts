import styled from 'styled-components';

export const Tooltip = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    transform: translate(-50%, -25%);
    z-index: 2;
    @media (max-width: 768px) {
        transform: translate(-50%, -15%);
    };
`;

export const TargetingBox = styled.div`
    display: flex;
    height: 60px;
    width: 60px;
    border: 2px solid white;
    @media (max-width: 768px) {
        height: 20px;
        width: 20px;
    };
`;

export const ChoiceBox = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
`;

export const ChoiceButton = styled.button`
    display: flex;
    flex-direction: column;
    border: solid 1px black;
    background: none;
`;