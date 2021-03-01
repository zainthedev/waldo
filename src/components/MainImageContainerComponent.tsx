import { MainImageContainer, PS2 } from '../styled-components/imageStyles';
import ps2Image from '../images/ps2Image.webp';
import ps2ImageJPG from '../images/ps2Image.jpg';

export type MainImageContainerProps = {
	handleClick: (e: React.MouseEvent) => void;
	pageX?: number;
	pageY?: number;
};

export const MainImageContainerComponent = ({ handleClick }: MainImageContainerProps) => {
	return (
		<MainImageContainer onClick={handleClick}>
			<PS2 srcSet={ps2ImageJPG} src={ps2Image} />
		</MainImageContainer>
	);
};
