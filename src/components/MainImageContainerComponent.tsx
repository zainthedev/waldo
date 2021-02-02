import { MainImageContainer, PS2 } from '../styled-components/imageStyles';
import ps2Image from '../images/ps2Image.webp';

export type MainImageContainerProps = {
	handleClick: (e: React.MouseEvent) => void;
	pageX?: number;
	pageY?: number;
};

export const MainImageContainerComponent = ({ handleClick }: MainImageContainerProps) => {
	return (
		<MainImageContainer onClick={handleClick}>
			<PS2 src={ps2Image} />
		</MainImageContainer>
	);
};
