import { useState, useEffect } from 'react';
import { WelcomeModalComponent } from './components/WelcomeModalComponent';
import { MainImageContainerComponent } from './components/MainImageContainerComponent';
import { HeaderComponent } from './components/HeaderComponent';
import { TooltipComponent } from './components/TooltipComponent';
import { MarkerComponent } from './components/MarkerComponent';
import { ChoiceFeedback } from './styled-components/tooltipStyles';
import { ScoreScreenModalComponent } from './components/ScoreScreenModalComponent';
import { useCheckFirebaseCollection } from './firebase/useCheckFirebaseCollection';
import './styles/reset.css';
import './styles/main.css';

export default function App() {
	const [gameStarted, setGameStarted] = useState(false);
	const [gameOver, setGameOver] = useState(false);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [tagging, setTagging] = useState(false);
	const [playerChoice, setPlayerChoice] = useState({
		correctChoice: false,
		choiceMade: false,
		choice: '',
	});
	const [remainingCharacters, setRemainingCharacters] = useState(['Jak', 'Ratchet', 'Yuna']);
	const [characters, setCharacters] = useState([
		{ name: 'Jak', found: false, position: { x: 0, y: 0 } },
		{ name: 'Ratchet', found: false, position: { x: 0, y: 0 } },
		{ name: 'Yuna', found: false, position: { x: 0, y: 0 } },
	]);
	const [time, setTime] = useState(0);

	const increaseTime = () => {
		setTime(time + 1);
	};

	// Set the current mouse position as the clicked position
	// Used for controlling the positioning of the tooltip
	const handleMousePosition = (e: React.MouseEvent): void => {
		setMousePosition({ x: e.pageX, y: e.pageY });
	};

	// Display/hide the tooltip based on if tagging a character
	const handleTooltipDisplay = () => {
		tagging ? setTagging(false) : setTagging(true);
	};

	// Firebase position collection promises
	const jakPositionsPromise = useCheckFirebaseCollection('jak');
	const ratchetPositionsPromise = useCheckFirebaseCollection('ratchet');
	const yunaPositionsPromise = useCheckFirebaseCollection('yuna');

	//Check if the clicked position is found in the positions array in Firebase
	const checkForMatch = async (x: number, y: number, character: string) => {
		const coords = `x: ${Math.round((x / window.innerWidth) * 100)}, y: ${Math.round(
			(y / window.innerWidth) * 100
		)}`;
		const jakResult = await jakPositionsPromise;
		const ratchetResult = await ratchetPositionsPromise;
		const yunaResult = await yunaPositionsPromise;

		switch (character) {
			case 'Jak':
				return jakResult.positions.includes(coords);
			case 'Ratchet':
				return ratchetResult.positions.includes(coords);
			case 'Yuna':
				return yunaResult.positions.includes(coords);
		}
	};

	const makePlayerChoiceState = async (e: React.MouseEvent): Promise<void> => {
		const targetCharacter = e.currentTarget.textContent || '';
		// Returns TRUE if choice was correct
		const choiceEvaluation = await checkForMatch(mousePosition.x, mousePosition.y, targetCharacter);

		if (choiceEvaluation) {
			const newRemainingCharacters = [...remainingCharacters];
			const newCharacters = [...characters];
			const foundCharacter = {
				name: targetCharacter,
				found: true,
				position: mousePosition,
			};

			newCharacters.forEach((character: any) => {
				if (character.name === targetCharacter) {
					newCharacters.splice(newCharacters.indexOf(character), 1, foundCharacter);
				}
				return character;
			});

			newRemainingCharacters.splice(newRemainingCharacters.indexOf(targetCharacter), 1);
			setPlayerChoice({
				correctChoice: true,
				choiceMade: true,
				choice: targetCharacter,
			});
			setCharacters(newCharacters);
			setRemainingCharacters(newRemainingCharacters);
		} else {
			setPlayerChoice({
				correctChoice: false,
				choiceMade: true,
				choice: targetCharacter,
			});
		}
	};

	const handleClick = (e: React.MouseEvent): void => {
		if (gameStarted) {
			handleTooltipDisplay();
			handleMousePosition(e);
		}
	};

	const handleChoice = (e: React.MouseEvent): any => {
		handleTooltipDisplay();
		makePlayerChoiceState(e);
	};

	const startGame = (): void => {
		setGameStarted(true);
	};

	// Sets the choiceMade property back to false to hide the 'ChoiceFeedback' component
	useEffect(() => {
		const choiceTimer = setTimeout(
			() =>
				setPlayerChoice({
					correctChoice: false,
					choiceMade: false,
					choice: playerChoice.choice,
				}),
			3000
		);
		return () => clearTimeout(choiceTimer);
	}, [playerChoice]);

	// Ends the game when there are no remaining characters to be found
	useEffect(() => {
		if (remainingCharacters.length === 0) {
			setGameOver(true);
		}
	}, [remainingCharacters.length]);

	// Increase the total time taken by 1 second accordingly
	useEffect(() => {
		if (gameStarted && !gameOver) {
			setTimeout(() => {
				increaseTime();
			}, 1000);
		}
	});

	return (
		<div className='App'>
			{!gameStarted && <WelcomeModalComponent startGame={startGame} />}
			<HeaderComponent time={time} gameStarted={gameStarted} gameOver={gameOver} />
			{tagging && (
				<TooltipComponent
					mousePosition={mousePosition}
					handleChoice={handleChoice}
					playerChoice={playerChoice}
					remainingCharacters={remainingCharacters}
				/>
			)}
			{playerChoice.choiceMade && !gameOver && (
				<ChoiceFeedback>
					{playerChoice.correctChoice
						? `You found ${playerChoice.choice}. Nice!`
						: `Thats not ${playerChoice.choice}. Try again!`}
				</ChoiceFeedback>
			)}
			{characters.map((character) => {
				return character.found && <MarkerComponent key={character.name} character={character} />;
			})}
			{!gameOver && <MainImageContainerComponent handleClick={handleClick} />}
			{gameOver && (
				<ScoreScreenModalComponent time={time} gameStarted={gameStarted} gameOver={gameOver} />
			)}
		</div>
	);
}
