import React from 'react';
import mainImage from './images/main.png'
import { MainImageContainer, MainImage } from './styled-components/imageStyles'
import './styles/reset.css';
import './styles/main.css';

const App = () => {
  return (
    <div className="App">
      <MainImageContainer>
        <MainImage src={mainImage}/>
      </MainImageContainer>
    </div>
  );
}

export default App;
