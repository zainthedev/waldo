import { WelcomeSplash, WelcomeText, StartButtonContainer } from '../styled-components/welcomeSplashStyles'
import { StartImage } from '../styled-components/imageStyles'
import { CharacterContainerComponent } from './CharacterContainerComponent'
import startImage from '../images/start.svg'
import { Children } from 'react'

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
            <CharacterContainerComponent container={'WelcomeSplash'} children={Children}/>
            <StartButtonContainer onClick={startGame}>
                <StartImage src={startImage}/> Start
            </StartButtonContainer>
        </WelcomeSplash>
    );
}