import mainImage from './images/main.jpeg'
import styled from 'styled-components';

export const MainImageContainer = styled.div`
    display: flex;
`;

export const MainImage = styled.image`
    height: 500px;
    src: ${mainImage}
`;