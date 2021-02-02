import { Timer } from '../styled-components/headerStyles';
import { renderTime } from '../helper-functions/renderTime';
import { HeaderProps } from '../types';

export const TimerComponent = ({ time }: HeaderProps) => {
	return <Timer>{renderTime(time)}</Timer>;
};
