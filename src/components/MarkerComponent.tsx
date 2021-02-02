import { Marker } from '../styled-components/markerStyles';

export type MarkerProps = {
	character: {
		name: string;
		found: boolean;
		position: { x: number; y: number };
	};
};

export const MarkerComponent = ({ character }: MarkerProps) => {
	return (
		<Marker style={{ left: character.position.x, top: character.position.y }}>
			{character.name}
		</Marker>
	);
};
