import React from 'react';
import {MainImageContainerComponent} from './components/MainImageContainerComponent'
import {TooltipComponent} from './components/TooltipComponent'
import './styles/reset.css';
import './styles/main.css';

const App = () => {
  return (
    <div className="App">
      <TooltipComponent />
      <MainImageContainerComponent />
    </div>
  );
}

export default App;
