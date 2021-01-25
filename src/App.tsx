import React from 'react';
import { useState } from 'react'
import { WelcomeSplashComponent } from './components/WelcomeSplashComponent'
import {MainImageContainerComponent} from './components/MainImageContainerComponent'
import {HeaderComponent} from './components/HeaderComponent'
import {TooltipComponent} from './components/TooltipComponent' 
import './styles/reset.css';
import './styles/main.css';

export default function App() {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
  const [tagging, setTagging] = useState(false);

  const handleMousePosition = (e: React.MouseEvent): void => {
    setMousePosition({x: e.pageX, y: e.pageY});
  };

  const getClickPosition = () => {
    return {
      x: Math.round((mousePosition.x / window.innerWidth) * 100),
      y: Math.round((mousePosition.y / window.innerWidth) * 100),
    };
  }

  const handleTooltipDisplay = () => {
    tagging ? setTagging(false) : setTagging(true);
  }

  const handleClick = (e: React.MouseEvent): void => {
    handleTooltipDisplay();
    handleMousePosition(e);
  }

  const handleChoice = (e: React.MouseEvent): object => {
    handleTooltipDisplay();
    return getClickPosition();
  }

  return (
    <div className="App">
      <WelcomeSplashComponent />
      <HeaderComponent />
      {tagging === true && (
      <TooltipComponent mousePosition={mousePosition} handleChoice={handleChoice}/>
      )}
      <MainImageContainerComponent handleClick={handleClick} />
    </div>
  );
}
