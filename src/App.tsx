import { useState, useEffect } from 'react';
import { WelcomeModalComponent } from './components/WelcomeModalComponent';
import { MainImageContainerComponent } from './components/MainImageContainerComponent';
import { HeaderComponent } from './components/HeaderComponent';
import { TooltipComponent } from './components/TooltipComponent';
import { ChoiceFeedback } from './styled-components/tooltipStyles';
import { ScoreScreenModalComponent } from './components/ScoreScreenModalComponent';
import './styles/reset.css';
import './styles/main.css';

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [tagging, setTagging] = useState(false);
  const [playerChoice, setPlayerChoice] = useState({ choiceMade: false, choice: '' })

  // Set the current mouse position as the clicked position
  // Used for controlling the positioning of the tooltip
  const handleMousePosition = (e: React.MouseEvent): void => {
    setMousePosition({ x: e.pageX, y: e.pageY });
  };

  // Get the click position of the mouse and convert it to units that are equal regardless of screen size
  // Used for the backend
  const getClickPosition = () => {
    return {
      x: Math.round((mousePosition.x / window.innerWidth) * 100),
      y: Math.round((mousePosition.y / window.innerWidth) * 100),
    };
  };

  // Display/hide the tooltip based on if tagging a character
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

  const startGame = (): void => {
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
      {playerChoice.choiceMade && (
        <ChoiceFeedback>
          That's not {playerChoice.choice}. Try again!
        </ChoiceFeedback>
      )}
      <MainImageContainerComponent handleClick={handleClick} />
      {gameOver === true && (
      <ScoreScreenModalComponent gameStarted={gameStarted}/>
      )}
    </div>
  );
}
