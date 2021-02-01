import { Children } from 'react';
import { Header } from '../styled-components/headerStyles';
import { TimerComponent } from './TimerComponent';
import { CharacterContainerComponent } from './CharacterContainerComponent';
import { HeaderComponentProps } from '../types';

export const HeaderComponent = ({ time, gameStarted, gameOver }: HeaderComponentProps) => {
    return (
        <Header>
            <CharacterContainerComponent container={'header'} children={Children} />
            {gameStarted && (
                <TimerComponent time={time} gameStarted={gameStarted} gameOver={gameOver} />
            )}
        </Header>
    );
};