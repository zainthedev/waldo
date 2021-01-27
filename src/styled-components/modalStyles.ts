import styled from 'styled-components';

export const Modal = styled.div`
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
        margin-top: 15px;
        min-height: 100vh;
        min-width: 100vw;
    };
`;