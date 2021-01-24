import React from 'react';
import { useState } from 'react'
import {MainImageContainerComponent} from './components/MainImageContainerComponent'
import {HeaderComponent} from './components/HeaderComponent'
import {TooltipComponent} from './components/TooltipComponent' 
import './styles/reset.css';
import './styles/main.css';

export default function App() {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0})

  const handleMousePosition = (e: React.MouseEvent): void => {
    setMousePosition({x: e.pageX, y: e.pageY});
  };

  return (
    <div className="App">
      <HeaderComponent />
      <TooltipComponent mousePosition={mousePosition}/>
      <MainImageContainerComponent handleMousePosition={handleMousePosition} />
    </div>
  );
}
