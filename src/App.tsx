import { useState, useEffect } from 'react';
import { WelcomeModalComponent } from './components/WelcomeModalComponent';
import { MainImageContainerComponent } from './components/MainImageContainerComponent';
import { HeaderComponent } from './components/HeaderComponent';
import { TooltipComponent } from './components/TooltipComponent';
import { ChoiceFeedback } from './styled-components/tooltipStyles';
import './styles/reset.css';
import './styles/main.css';

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [tagging, setTagging] = useState(false);
  const [playerChoice, setPlayerChoice] = useState({ choiceMade: false, choice: '' })

  const handleMousePosition = (e: React.MouseEvent): void => {
    setMousePosition({ x: e.pageX, y: e.pageY });
  };

  const getClickPosition = () => {
    return {
      x: Math.round((mousePosition.x / window.innerWidth) * 100),
      y: Math.round((mousePosition.y / window.innerWidth) * 100),
    };
  };

  const handleTooltipDisplay = () => {
    tagging ? setTagging(false) : setTagging(true);
  };

  const handleClick = (e: React.MouseEvent): void => {
    handleTooltipDisplay();
    handleMousePosition(e);
  };

  const makePlayerChoice = (e: React.MouseEvent): void => {
    setPlayerChoice({ choiceMade: true, choice: e.currentTarget.textContent || '' });
  }

  const handleChoice = (e: React.MouseEvent): object => {
    handleTooltipDisplay();
    makePlayerChoice(e);
    return getClickPosition();
  };

  const startGame = (e: React.MouseEvent): void => {
    setGameStarted(true)
  };

    // Sets the 'choiceMade' property back to false to hide the 'ChoiceFeedback' component
    useEffect(() => {
      const choiceTimer = setTimeout(() => setPlayerChoice({ choiceMade: false, choice: playerChoice.choice }), 3000);
      return () => clearTimeout(choiceTimer);
    }, [playerChoice]);

  return (
    <div className="App">
      {gameStarted === false && (
        <WelcomeModalComponent startGame={startGame} />
      )}
      <HeaderComponent gameStarted={gameStarted} />
      {(tagging === true) && (
        <TooltipComponent mousePosition={mousePosition} handleChoice={handleChoice} playerChoice={playerChoice} />
      )}
      <MainImageContainerComponent handleClick={handleClick} />
      {playerChoice.choiceMade && (
                <ChoiceFeedback>
                    That's not {playerChoice.choice}. Try again!
                </ChoiceFeedback>
            )}
    </div>
  );
}
