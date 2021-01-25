import { WelcomeSplash, WelcomeText, CharacterContainer } from '../styled-components/welcomeSplashStyles'
import { CharacterImageContainer, Jak, Ratchet, Yuna } from '../styled-components/imageStyles'
import jakImage from '../images/jak.png'
import ratchetImage from '../images/ratchet.png'
import yunaImage from '../images/yuna.png'

export const WelcomeSplashComponent = () => {
    return (
        <WelcomeSplash>
            <WelcomeText>
                Tag these characters as fast as you can!
                Scroll through the image to find the correct character.
                Once found, click the character and choose the correct name.
                You will be timed and compared to others, so move fast!
            </WelcomeText>
            <CharacterContainer>
                <CharacterImageContainer>
                    <Jak src={jakImage} />
                    Jak
                </CharacterImageContainer>
                <CharacterImageContainer>
                    <Ratchet src={ratchetImage} />
                    Ratchet
                </CharacterImageContainer>
                <CharacterImageContainer>
                    <Yuna src={yunaImage} /> 
                    Yuna
                </CharacterImageContainer>
            </CharacterContainer>
        </WelcomeSplash>
    );
}