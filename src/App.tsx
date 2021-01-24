import React from 'react';
import { useState } from 'react'
import {MainImageContainerComponent} from './components/MainImageContainerComponent'
import {HeaderComponent} from './components/HeaderComponent'
import {TooltipComponent} from './components/TooltipComponent' 
import './styles/reset.css';
import './styles/main.css';

export default function App() {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0})
  const [tagging, setTagging] = useState(false)

  const handleMousePosition = (e: React.MouseEvent): void => {
    setMousePosition({x: e.pageX, y: e.pageY});
  };

  const handleTooltipDisplay = () => {
    tagging ? setTagging(false) : setTagging(true)
  }
  const handleClick = (e: React.MouseEvent): void => {
    handleTooltipDisplay()
    handleMousePosition(e)
  }

  return (
    <div className="App">
      <HeaderComponent />
      {tagging === true &&(
      <TooltipComponent mousePosition={mousePosition}/>
      )}
      <MainImageContainerComponent handleMousePosition={handleClick} />
    </div>
  );
}
