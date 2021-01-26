import { useState } from 'react';
import { WelcomeModalComponent } from './components/WelcomeModalComponent';
import { MainImageContainerComponent } from './components/MainImageContainerComponent';
import { HeaderComponent } from './components/HeaderComponent';
import { TooltipComponent } from './components/TooltipComponent';
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
    if (playerChoice.choiceMade === false) {
      handleTooltipDisplay();
      handleMousePosition(e);
    }
  };

  const makePlayerChoice = (e: React.MouseEvent): void => {
    setPlayerChoice({ choiceMade: true, choice: e.currentTarget.textContent || '' });

    // Sets the 'choiceMade' property back to false to hide the 'ChoiceFeedback' component and let the player try again
    setTimeout(() => {
      setPlayerChoice({ choiceMade: false, choice: playerChoice.choice });
    }, 3000);
  }

  const handleChoice = (e: React.MouseEvent): object => {
    if (playerChoice.choiceMade === false) {
      handleTooltipDisplay();
      makePlayerChoice(e);
    }
    return getClickPosition();
  };

  const startGame = (e: React.MouseEvent): void => {
    setGameStarted(true)
  };

  return (
    <div className="App">
      {gameStarted === false && (
        <WelcomeModalComponent startGame={startGame} />
      )}
      <HeaderComponent gameStarted={gameStarted} />
      {(tagging === true || playerChoice.choiceMade !== false) && (
        <TooltipComponent mousePosition={mousePosition} handleChoice={handleChoice} playerChoice={playerChoice} />
      )}
      <MainImageContainerComponent handleClick={handleClick} />
    </div>
  );
}
