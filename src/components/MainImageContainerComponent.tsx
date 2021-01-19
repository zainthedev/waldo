import { MainImageContainer, MainImage } from '../styled-components/imageStyles'
import mainImage from '../images/main.jpg'

export const MainImageContainerComponent = () => {

    function getClickCoords(e: any) {
        let coords = {
            x: Math.round((e.nativeEvent.offsetX / window.innerWidth) * 100),
            y: Math.round((e.nativeEvent.offsetY / window.innerWidth) * 100),
            }
        console.log(coords)
        return coords
    }

    function cursorHandler(e: any) {
        let left = e.offsetX;
        let top = e.offsetY;
        e.style.left = left + 'px';
        e.style.top = top + 'px';
    }

    return (
        <MainImageContainer onClick={getClickCoords}>
            <MainImage src={mainImage}/ >
        </MainImageContainer>
    );
  }