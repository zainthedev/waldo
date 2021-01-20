import { MainImageContainer, MainImage } from '../styled-components/imageStyles'
import mainImage from '../images/main.jpg'

export const MainImageContainerComponent = (props: any) => {
    return (
        <MainImageContainer onClick={props.clickHandler}>
            <MainImage src={mainImage}/ >
        </MainImageContainer>
    );
  }