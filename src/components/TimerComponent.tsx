import { Timer } from '../styled-components/headerStyles';
import { renderTime } from '../helper-functions/renderTime';
import { HeaderComponentProps } from '../types';

export const TimerComponent = ({ time }: HeaderComponentProps) => {
    return (
        <Timer>
            {renderTime(time)}
        </Timer>
    );
};