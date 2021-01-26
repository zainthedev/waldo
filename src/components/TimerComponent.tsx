import { Timer } from '../styled-components/headerStyles';
import { renderTime } from '../helper-functions/renderTime';
import { useEffect, useState } from 'react';
import { HeaderComponentProps } from '../types';

export const TimerComponent = ({ gameStarted }: HeaderComponentProps) => {
    const [time, setTime] = useState(0)

    function increaseTime() {
        setTime(time + 1)
    }

    useEffect(() => {
        if (gameStarted) {
            setTimeout(() => {
                increaseTime()
            }, 1000);
        };
    });

    return (
        <Timer>
            {renderTime(time)}
        </Timer>
    );
};