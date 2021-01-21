import { MainImageContainer, MainImage } from '../styled-components/imageStyles'
import { MainImageContainerProps } from '../types'
import mainImage from '../images/main.jpg'


export const MainImageContainerComponent = ({ handleMousePosition }: MainImageContainerProps) => {
    return (
        <MainImageContainer onClick={handleMousePosition}>
            <MainImage src={mainImage}/ >
        </MainImageContainer>
    );
}