import { Header } from '../styled-components/headerStyles'
import { CharacterContainerHeader, CharacterImageContainerHeader, CharacterImageHeader } from '../styled-components/imageStyles'
import jakImageHeader from '../images/jakHeader.svg'
import ratchetImageHeader from '../images/ratchetHeader.svg'
import yunaImageHeader from '../images/yunaHeader.svg'

export const HeaderComponent = () => {
    return (
        <Header>
            <CharacterContainerHeader>
                <CharacterImageContainerHeader>
                    <CharacterImageHeader src={jakImageHeader} />
                    Jak
                </CharacterImageContainerHeader>
                <CharacterImageContainerHeader>
                    <CharacterImageHeader src={ratchetImageHeader} />
                    Ratchet
                </CharacterImageContainerHeader>
                <CharacterImageContainerHeader>
                    <CharacterImageHeader src={yunaImageHeader} /> 
                    Yuna
                </CharacterImageContainerHeader>
            </CharacterContainerHeader>
        </Header>
    );
}