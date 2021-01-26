import { ReactChildren } from 'react';
import { CharacterContainer, CharacterImageContainer, CharacterImage } from '../styled-components/imageStyles';
import jakImage from '../images/jak.svg';
import ratchetImage from '../images/ratchet.svg';
import yunaImage from '../images/yuna.svg';
import jakImageHeader from '../images/jakHeader.svg';
import ratchetImageHeader from '../images/ratchetHeader.svg';
import yunaImageHeader from '../images/yunaHeader.svg';

export type  CharacterContainerComponentProps = {
    children: ReactChildren,
    container: string,
};

export const CharacterContainerComponent = ({ container }: CharacterContainerComponentProps) => {
    return (
            <CharacterContainer>
                <CharacterImageContainer>
                    <CharacterImage src={container === 'header' ? jakImageHeader : jakImage} />
                    Jak
                </CharacterImageContainer>
                <CharacterImageContainer>
                    <CharacterImage src={container === 'header' ? ratchetImageHeader : ratchetImage} />
                    Ratchet
                </CharacterImageContainer>
                <CharacterImageContainer>
                    <CharacterImage src={container === 'header' ? yunaImageHeader: yunaImage} /> 
                    Yuna
                </CharacterImageContainer>
            </CharacterContainer>
    );
};