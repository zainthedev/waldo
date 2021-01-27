import { Modal } from '../styled-components/modalStyles';
import { PlayerScoreDisplay, PlayerNameInput, NameSubmitButton, ScoreBoard } from '../styled-components/scoreScreenModalStyles'
import { TimerComponent } from './TimerComponent'
import { HeaderComponentProps } from '../types';

export const ScoreScreenModalComponent = ({ gameStarted }: HeaderComponentProps) => {
    return (
        <Modal>
            <PlayerScoreDisplay>
                YOUR TIME:
                < TimerComponent gameStarted={gameStarted} />
            </PlayerScoreDisplay>
            <PlayerNameInput />
            <NameSubmitButton>
                Submit
            </NameSubmitButton>
            <ScoreBoard />
        </Modal>
    );
};