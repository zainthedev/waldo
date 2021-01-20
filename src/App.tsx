import React from 'react';
import { useState } from 'react'
import {MainImageContainerComponent} from './components/MainImageContainerComponent'
import {TooltipComponent} from './components/TooltipComponent'
import './styles/reset.css';
import './styles/main.css';

export default function App() {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0})

  const clickHandler = (e: any) => {
    setMousePosition({x: e.pageX, y: e.pageY});
  };


  return (
    <div className="App">
      <TooltipComponent mousePosition={mousePosition}/>
      <MainImageContainerComponent clickHandler={clickHandler} />
    </div>
  );
}
