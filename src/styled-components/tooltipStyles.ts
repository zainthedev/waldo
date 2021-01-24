import styled from 'styled-components';

export const Tooltip = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    transform: translate(-50%, -15%);
    z-index: 2;
`;

export const TargetingBox = styled.div`
    display: flex;
    height: 35px;
    width: 35px;
    border: 2px solid black;
`;

export const ChoiceBox = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
`;