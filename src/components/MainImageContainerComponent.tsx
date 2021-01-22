import { MainImageContainer, MainImage } from '../styled-components/imageStyles'
import mainImage from '../images/main.jpg'

export type MainImageContainerProps = {
    handleMousePosition: (e: React.MouseEvent) => void,
    pageX?: number,
    pageY?: number
}

export const MainImageContainerComponent = ({ handleMousePosition }: MainImageContainerProps) => {
    return (
        <MainImageContainer onClick={handleMousePosition}>
            <MainImage src={mainImage}/ >
        </MainImageContainer>
    );
}