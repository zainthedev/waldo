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
    border: 2px solid #eefbff;
    @media (max-width: 768px) {
        height: 20px;
        width: 20px;
    };
`;

export const ChoiceBox = styled.div`
    display: flex;
    flex-direction: column;
    background: #22222c;
`;

export const ChoiceButton = styled.div`
    display: flex;
    flex-direction: column;
    border: solid 1px #6365b0;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 8px;
    padding-right: 8px;
    cursor: pointer;
    background: none;
    &:hover {
        transition: all 0.1s ease-in-out;
        background-color: #6365b0;
    }
    @media (max-width: 768px) {
        font-size: calc((0.1em + 1vmin) + (0.1em + 1vmax));
    };
`;

export const ChoiceFeedback = styled.div`
    display: flex;
`