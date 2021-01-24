import { MainImageContainer, MainImage } from '../styled-components/imageStyles'
import mainImage from '../images/main.jpg'

export type MainImageContainerProps = {
    handleClick: (e: React.MouseEvent) => void,
    pageX?: number,
    pageY?: number
}

export const MainImageContainerComponent = ({ handleClick }: MainImageContainerProps) => {
    return (
        <MainImageContainer onClick={handleClick}>
            <MainImage src={mainImage}/ >
        </MainImageContainer>
    );
}