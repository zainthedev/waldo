import { Modal } from '../styled-components/modalStyles';
import { ScoreScreenWrapper, PlayerScoreDisplay, PlayerNameInput, InputErrorText, NameSubmitButton } from '../styled-components/scoreScreenModalStyles';
import { TimerComponent } from './TimerComponent';
import { useFirestore } from 'reactfire';
import { ScoreboardComponent } from './ScoreboardComponent';
import { useState } from 'react';
import { checkForBadWords } from '../helper-functions/checkForBadWords';

export type ScoreboardModalComponentProps = {
    time: number,
    gameStarted: boolean,
    gameOver: boolean,
};

export const ScoreScreenModalComponent = ({ time, gameStarted, gameOver }: ScoreboardModalComponentProps) => {
    const [playerName, setPlayerName] = useState('');
    const [nameSubmitted, setNameSubmitted] = useState(false);
    const [inputError, setInputError] = useState({ error: false, badWord: false })

    const userCollection = useFirestore().collection('users');

    const addUser = async () => {
        if (nameSubmitted === false) {
            await userCollection.doc(playerName).set({ name: playerName.toString(), time: time }, { merge: true });
        }
    };

    const handleSubmit = () => {
        if (checkForBadWords(playerName)) {
            setInputError({ error: true, badWord: true });
        }
        else if (playerName.length > 20) {
            setInputError({ error: true, badWord: false });
        }
        else {
            setNameSubmitted(true);
            setInputError({ error: false, badWord: false });
            addUser();
        }
    }

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
                            Enter your name:
                    <PlayerNameInput onChange={handlePlayerName} placeholder={'Enter name'} />
                            <NameSubmitButton onClick={handleSubmit}>
                                Submit
                            </NameSubmitButton>
                            {inputError.error === true &&
                                <InputErrorText>
                                    {inputError.badWord === true ? `Nice try` : `Name too long (Max 20 characters)`}
                                </InputErrorText>}
                        </>
                    )}
                </PlayerScoreDisplay>
                <ScoreboardComponent />
            </ScoreScreenWrapper >
        </Modal>
    );
};