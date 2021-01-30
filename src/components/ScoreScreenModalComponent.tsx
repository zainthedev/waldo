import { Modal } from '../styled-components/modalStyles';
import { PlayerScoreDisplay, PlayerNameInput, NameSubmitButton } from '../styled-components/scoreScreenModalStyles';
import { TimerComponent } from './TimerComponent';
import { ScoreboardComponent } from './ScoreboardComponent';
import { HeaderComponentProps } from '../types';

export const ScoreScreenModalComponent = ({ time, gameStarted, gameOver }: HeaderComponentProps) => {
    return (
        <Modal>
            <PlayerScoreDisplay>
                YOUR TIME:
                < TimerComponent time={time} gameStarted={gameStarted} gameOver={gameOver} />
            </PlayerScoreDisplay>
            <PlayerNameInput />
            <NameSubmitButton>
                Submit
            </NameSubmitButton>
            <ScoreboardComponent />
        </Modal>
    );
};