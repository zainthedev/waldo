import { Modal } from '../styled-components/modalStyles';
import { WelcomeText, StartButtonContainer } from '../styled-components/welcomeModalStyles';
import { Children } from 'react';
import { StartImage } from '../styled-components/imageStyles';
import { CharacterContainerComponent } from './CharacterContainerComponent';
import startImage from '../images/start.svg';

export type WelcomeModalComponentProps = {
    startGame: (e: React.MouseEvent) => void,
};

export const WelcomeModalComponent = ({ startGame }: WelcomeModalComponentProps) => {
    return (
        <Modal>
            <WelcomeText>
                Tag these characters as fast as you can!
                {"\n"}Scroll through the image to find the correct character.
                {"\n"}Click the character and choose the correct name.
                {"\n"}You will be timed and your score will be recorded, so move fast!
            </WelcomeText>
            <CharacterContainerComponent container={'WelcomeSplash'} children={Children} />
            <StartButtonContainer onClick={startGame}>
                <StartImage src={startImage} /> Start
            </StartButtonContainer>
        </Modal>
    );
};