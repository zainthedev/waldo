import { WelcomeSplash, WelcomeText, StartButtonContainer } from '../styled-components/welcomeSplashStyles'
import { CharacterContainer, CharacterImageContainer, CharacterImage, StartImage } from '../styled-components/imageStyles'
import jakImage from '../images/jak.svg'
import ratchetImage from '../images/ratchet.svg'
import yunaImage from '../images/yuna.svg'
import startImage from '../images/start.svg'

export type  WelcomeSplashComponentProps = {
    startGame: (e: React.MouseEvent) => void,
}

export const WelcomeSplashComponent = ({startGame}: WelcomeSplashComponentProps) => {
    return (
        <WelcomeSplash>
            <WelcomeText>
                Tag these characters as fast as you can!
                {"\n"}Scroll through the image to find the correct character.
                {"\n"}Click the character and choose the correct name.
                {"\n"}You will be timed and your score will be recorded, so move fast!
            </WelcomeText>
            <CharacterContainer>
                <CharacterImageContainer>
                    <CharacterImage src={jakImage} />
                    Jak
                </CharacterImageContainer>
                <CharacterImageContainer>
                    <CharacterImage src={ratchetImage} />
                    Ratchet
                </CharacterImageContainer>
                <CharacterImageContainer>
                    <CharacterImage src={yunaImage} /> 
                    Yuna
                </CharacterImageContainer>
            </CharacterContainer>
            <StartButtonContainer onClick={startGame}>
                <StartImage src={startImage}/> Start
            </StartButtonContainer>
        </WelcomeSplash>
    );
}