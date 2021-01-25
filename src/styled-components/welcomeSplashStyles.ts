import styled from 'styled-components';

export const WelcomeSplash = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    place-items: center;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    height: 65vh;
    border-radius: 10px;
    font-weight: 700;
    font-size: calc((0.1em + 1vmin) + (0.1em + 1vmax));
    background: rgb(99,101,176);
    background: linear-gradient(180deg, rgba(99,101,176,1) 0%, rgba(52,170,231,1) 70%, rgba(56,191,235,1) 100%);
    @media (max-width: 768px) {
        min-height: 100vh;
        min-width: 100vw;
    };
`;

export const WelcomeText = styled.div`
    white-space: break-spaces;
    text-align: center;
`;

export const StartButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    place-content: center;
    cursor: pointer;
`;