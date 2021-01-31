import { Modal } from '../styled-components/modalStyles';
import { ScoreScreenWrapper, PlayerScoreDisplay, PlayerNameInput, NameSubmitButton } from '../styled-components/scoreScreenModalStyles';
import { TimerComponent } from './TimerComponent';
import { useFirestore } from 'reactfire';
import { ScoreboardComponent } from './ScoreboardComponent';
import { useState } from 'react';

export type ScoreboardModalComponentProps = {
    time: number,
    gameStarted: boolean,
    gameOver: boolean,
};

export const ScoreScreenModalComponent = ({ time, gameStarted, gameOver }: ScoreboardModalComponentProps) => {
    const [playerName, setPlayerName] = useState('');
    const [nameSubmitted, setNameSubmitted] = useState(false);

    const userCollection = useFirestore().collection('users');

    const addUser = async () => {
        setNameSubmitted(true)
        if (nameSubmitted === false) {
            await userCollection.doc(playerName).set({ name: playerName.toString(), time: time }, { merge: true });
        }
    };

    function handlePlayerName(e: React.FormEvent<HTMLInputElement>) {
        return setPlayerName(e.currentTarget.value);
    };

    return (
        <Modal>
            <ScoreScreenWrapper >
                <PlayerScoreDisplay>
                    YOUR TIME:
                < TimerComponent time={time} gameStarted={gameStarted} gameOver={gameOver} />
                    {nameSubmitted === false && (
                        <>
                            Enter your name
                    <PlayerNameInput onChange={handlePlayerName} placeholder={'Enter name'} />
                            <NameSubmitButton onClick={addUser}>
                                Submit
                        </NameSubmitButton>
                        </>
                    )}
                </PlayerScoreDisplay>
                <ScoreboardComponent />
            </ScoreScreenWrapper >
        </Modal>
    );
};