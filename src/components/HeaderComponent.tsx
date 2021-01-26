import { Children } from 'react';
import { Header } from '../styled-components/headerStyles';
import { CharacterContainerComponent } from './CharacterContainerComponent';


export const HeaderComponent = () => {
    return (
        <Header>
            <CharacterContainerComponent container={'header'} children={Children}/>
        </Header>
    );
};